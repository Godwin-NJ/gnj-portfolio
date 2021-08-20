import { AiFillGithub,AiFillLinkedin,AiFillMail,AiFillTwitterCircle } from "react-icons/ai";
import { BiCaretDown } from "react-icons/bi";

const Contact = () => {
    return ( 
    <footer >
        <article className="footerStyle">
           <h4><BiCaretDown/> </h4>
           <div className="footerIcon">
                <span>
                    <a href="https://github.com/Godwin-NJ" target="_blank" rel="noreferrer">
                    < AiFillGithub />
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/amadigodwin7/" target="_blank" rel="noreferrer"> 
                    < AiFillLinkedin />
                    </a>
                </span>
                <span>
                    <a 
                    href="https://mail.google.com/mail/u/0/?fs=1&to=amadigodwin7@gmail.com&su=SUBJECT&body=BODY&tf=cm" 
                    target="_blank" 
                    rel="noreferrer">
                        <AiFillMail />
                    </a>
                </span>
                <span>
                    <a href="http://twitter.com/godwin_nj" target="_blank" rel="noreferrer">
                         <AiFillTwitterCircle />
                    </a>
                </span>
           </div>
           <p>amadigodwin7@gmail.com</p>
           <h5>Lagos, Nigeria </h5>
           <p>@ {new Date().getFullYear()} Designed & built by Godwin Amadi</p>
        </article>
    </footer>
     );
}
 
export default Contact;