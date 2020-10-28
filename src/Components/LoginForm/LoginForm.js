import React,{Component} from 'react';

import  './LoginForm.css'



class Login extends Component{
    render(){
        return(
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                       <h3 className="display-2">STRIX</h3><p/>
                       <hr className="pbar bg-dark"/>
                       <h4 className="display-4 font-italic">Show me the code....</h4> 
                    </div>
                    <div className="col-md-6 login-form-2 bg-dark">
                        <h3>Login Here</h3>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email *"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password *"/>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Login" />
                            </div>
                            <br/>
                            <div className="form-group">
                                <a className="ForgetPwd" value="Login">Forget Password ?</a>
                            </div>
                        </form>
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

