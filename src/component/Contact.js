import { AiFillGithub,AiFillLinkedin,AiFillMail,AiFillTwitterCircle } from "react-icons/ai";

const Contact = () => {
    return ( 
    <footer >
        <article className="footerStyle">
           <h4>Get In Touch </h4>
           <div className="footerIcon">
            <span>< AiFillGithub /></span>
            <span>< AiFillLinkedin /></span>
            <span><AiFillMail /></span>
            <span><AiFillTwitterCircle /></span>
           </div>
           <p>amadigodwin7@gmail.com</p>
           <h5>Lagos, Nigeria </h5>
           <p>@ {new Date().getFullYear()} Designed & built by Godwin Amadi</p>
        </article>
    </footer>
     );
}
 
export default Contact;