import {  Card, CardText,CardTitle,CardActions} from 'react-mdl';
import { AiFillGithub,AiOutlineLink } from "react-icons/ai";

const Project = () => {
    return ( 
        <div>
            <section className="cardProject">
                 {/* project 1 */}
                 <div className="card">
                <Card  shadow={3} style={{width: '350px', height: '350px'}}>
                <CardTitle expand style={{color: '#fff', 
                background: 'url(https://freepngimg.com/thumb/calculator/2-red-calculator-png-image-thumb.png) bottom right 50% no-repeat #46B6AC'}}>
                   React Calculator 
                </CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    React | Vanilla Js | Css
                    <br/>
                    <div className="iconProject">
                        <a href="https://github.com/Godwin-NJ/sci-calculator.git" target="_blank" rel="noreferrer">
                            <AiFillGithub />
                        </a>
                        <a href="https://godwin-nj.github.io/sci-calculator/" target="_blank" rel="noreferrer">
                            <AiOutlineLink />
                        </a>
                    </div>
                </CardActions>
                </Card>
                </div>

                    {/* project 2 */}
                     <div className="card">
                <Card  shadow={3} style={{width: '350px', height: '350px'}}>
                <CardTitle expand style={{color: '#fff', 
                background: 'url(https://freepngimg.com/thumb/calculator/2-red-calculator-png-image-thumb.png) bottom right 50% no-repeat #46B6AC'}}>
                   React Calculator 
                </CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    React | Vanilla Js | Css
                    <br/>
                    <div className="iconProject">
                        <a href="https://github.com/Godwin-NJ/sci-calculator.git" target="_blank" rel="noreferrer">
                            <AiFillGithub />
                        </a>
                        <a href="https://godwin-nj.github.io/sci-calculator/" target="_blank" rel="noreferrer">
                            <AiOutlineLink />
                        </a>
                    </div>
                </CardActions>
                </Card>
                </div>
                    {/* project 3 */}
                     <div className="card">
                <Card  shadow={3} style={{width: '350px', height: '350px'}}>
                <CardTitle expand style={{color: '#fff', 
                background: 'url(https://freepngimg.com/thumb/calculator/2-red-calculator-png-image-thumb.png) bottom right 50% no-repeat #46B6AC'}}>
                   React Calculator 
                </CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    React | Vanilla Js | Css
                    <br/>
                    <div className="iconProject">
                        <a href="https://github.com/Godwin-NJ/sci-calculator.git" target="_blank" rel="noreferrer">
                            <AiFillGithub />
                        </a>
                        <a href="https://godwin-nj.github.io/sci-calculator/" target="_blank" rel="noreferrer">
                            <AiOutlineLink />
                        </a>
                    </div>
                </CardActions>
                </Card>
                </div>
            </section>
        </div>
     );
}
 
export default Project;