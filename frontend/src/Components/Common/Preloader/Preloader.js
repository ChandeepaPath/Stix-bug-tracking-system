import React from 'react';
import './Preloader.scss'

function Preloader(){
    return(
        <div id="container">
            <div class="divider" aria-hidden="true"></div>
            <p class="loading-text" aria-label="Loading">
                <span class="letter" aria-hidden="true">L</span>
                <span class="letter" aria-hidden="true">o</span>
                <span class="letter" aria-hidden="true">a</span>
                <span class="letter" aria-hidden="true">d</span>
                <span class="letter" aria-hidden="true">i</span>
                <span class="letter" aria-hidden="true">n</span>
                <span class="letter" aria-hidden="true">g</span>
            </p>
        </div>
    )
}

export default Preloader;