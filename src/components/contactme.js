import "./contact.css"
import React from 'react'
import { Icon } from 'semantic-ui-react'
const ContactMe=()=>{
    return(
        <div className="contact">
        <div className="circle"></div>
        <div className="circle1">
            <span>Contact</span>
        </div>
        <div className="circle2"></div>
        <div className="circle3">
            <p className="circle31">
                <div className="iconn"><Icon name='mail' size='big'/><a href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new">riteshkumar8561@gmail.com</a></div>
                <div className="iconn"><Icon name='github' size='big'/><a href="https://github.com/riteshkumar7">https://github.com/riteshkumar7</a></div>
                <div className="iconn"><Icon name='linkedin' size='big'/><a href="https://www.linkedin.com/in/ritesh-kushwaha-5333b7182/">https://www.linkedin.com/in/ritesh-kushwaha-5333b7182/</a></div>
                <div className="iconn"><Icon name='phone' size='big' /><a href="">9198557704</a></div>
            </p>
        </div>
        </div>
    );
}
export default ContactMe;