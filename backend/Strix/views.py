from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
import json
from django.core import serializers
from django.contrib.auth.mixins import PermissionRequiredMixin,LoginRequiredMixin
from .mixins import RoleRequiredMixin
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import auth
from django.contrib.auth import authenticate
from .models import * 
from .serializers import *

from django.core.exceptions import ValidationError
from django.contrib.auth.tokens import default_token_generator
from .MailService import *
from django.utils.http import urlsafe_base64_decode


class Login(APIView):

    def post(self, request):

        data = json.loads(request.body)

        print(data)

        email = data['email']
        password = data['password']

        if User.objects.filter(email=email).exists():
            Username = User.objects.get(email=email).username
        else:
            return Response({"msg":"You are not a registered user try again"},status=404)
        
        user = authenticate(username=Username,password=password)

        if user is not None:
            auth.login(request,user)
            token,_ = Token.objects.get_or_create(user=user)
            role = User.objects.get(username=user).groups.values_list('name',flat=True)
            return Response(
                {
                    "Token": token.key,
                    "Role": role[0]
                },status=200)
        else:
            return Response({"msg":"You are not a registered user try again"},status=404)


class Logout(APIView):

    def post(self,request):
        print(request.user)
        if request.user.is_anonymous:
            return Response(False,status=404)
        else:
            auth.logout(request)
            return Response(True,status=200)



###############################################################################################


class EmailConfirmation(APIView):

    token_generator = default_token_generator

    def post(self,request):

        data = json.loads(request.body)
        email = data['email']

        opts = {
            'request': self.request,
            'email': email,
            'token_generator': self.token_generator
        }
        
        if(EmailSend.send(self,**opts)):
            return Response({"key": "Done"},status=200)
        else:
            return Response({"key": "Not Done"},status=404)

class PasswordConfirmation(APIView):

    token_generator = default_token_generator

    def post(self,request):

        data = json.loads(request.body)

        uid = data['uid']
        token = data['token']

        try:
            user_id = urlsafe_base64_decode(uid).decode()
            user = User.objects.get(pk=user_id)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist, ValidationError):
            user = None
        
        if self.token_generator.check_token(user,token):
            return Response({"uid":uid,"token":token},status=200)
        else:

            return Response(False,status=404)


class ResetPassword(APIView):
    
    token_generator = default_token_generator

    def post(self,request):
        
        data = json.loads(request.body)
        password = data['password']
        retypedPass = data['retypedPass']
        confirm = data['confirm']

        uid = confirm['uid']
        token = confirm['token']

        try:
            user_id = urlsafe_base64_decode(uid).decode()
            user = User.objects.get(pk=user_id)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist, ValidationError):
            user = None
        
        if self.token_generator.check_token(user,token):
            if password==retypedPass:
                user.set_password(password)
                user.save()
                return Response({},status=200)
            else:
                return Response(True,status=404)
        else:
            return Response(False,status=404)

###############################################################################################


# class ProjectList(APIView):

#     def get(self,request):
#         user = request.user

#         if user.is_anonymous:
#             return Response("Thota pissuda",status=404)
#         else:
#             role = User.objects.get(username=user).groups.values_list('name',flat=True)
#             if role[0]=='Admin':
#                 projects = self.Admin(user)
#             else:
#                 projects = self.OtherUser(user)

#         return Response(projects.values(),status=200)

#     def Admin(self,user):
#         return(Project.objects.filter(adminid=user))
        
#     def OtherUser(self,user):
#         return(Project.objects.filter(userlist=user))


#     def post(self,request):
#         data = json.loads(request.body)
#         project = Project.objects.filter(id=data['pid'])

#         return Response(project.values(),status=200)


class Filters(APIView):

    def get(self,request):

        SEVERITY = []
        for i in  SEVERITY_METHODS:
            SEVERITY.append(i[0])

        BUGTYPE = []
        for i in  BUGTYPE_METHODS:
            BUGTYPE.append(i[0])

        PRIORITY = []
        for i in PRIORITY_METHODS:
            PRIORITY.append(i[0])

        Filters = {
            "review": [
                "Reviewd",
                "Not Reviewd"
            ],
            "severity": SEVERITY,
            "priority": PRIORITY,
            "bugtype": BUGTYPE,
            "status": [
                "Open",
                "In Progress",
                "Review",
                "Done"
            ]
        }

        return Response(Filters,status=200)


class GetTickets(APIView):

    def post(self,request):

        body = json.loads(request.body)

        tickets = Ticket.objects.filter(project_id=body["pid"])
        
        Tickets = []

        for ticket in tickets:

            data = {
                "id": ticket.id,
                "issuename": ticket.issuename,
                "issuedescription": ticket.issuedescription,
                "date": ticket.date,
                "bugtype": ticket.bugtype,
                "priority": ticket.priority,
                "severity": ticket.severity,
                "bspstatus": "Included" if ticket.bspstatus else "Not Included",
                "approval": "Approved" if ticket.approval else "Rejected",
                "totaleffort": ticket.totaleffort,
                "project": Project.objects.get(id=ticket.project_id).projectname,
                "workstate": Workstate.objects.get(id=ticket.workstate_id).workstatename,
                "externaluser_id": ticket.externaluser_id,
                "review": "Reviewed" if ticket.review else "Not Reviewed"
            }

            Tickets.append(data)


        return Response({"Tickets":Tickets},status=200)


##############################################################################################


# Internal Users
class InternalUserList(viewsets.ModelViewSet):
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.filter(groups__in=[1,3,4,2])

# External Users
class ExternalUserList(viewsets.ModelViewSet):
    serializer_class = UserSerializer

    def get_queryset(self):
        return User.objects.filter(groups=5)

# Projects
class ProjectList(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer

    def get_queryset(self):
        user = self.request.user
        role = User.objects.get(username=user).groups.values_list('name',flat=True)
        if role[0]=='Admin':
            return(Project.objects.filter(adminid=user))
        else:
            return(Project.objects.filter(userlist=user))

