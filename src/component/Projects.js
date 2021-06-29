import {  Card, CardText,CardTitle,CardActions,Chip } from 'react-mdl';


const Project = () => {
    return ( 
        <div>
            <section className="cardProject">
                 {/* project 1 */}
                 <div className="card">
                <Card  shadow={3} style={{width: '320px', height: '320px'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>
                    Update
                </CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Chip>React</Chip>
                    <Chip>Vanilla Js</Chip>
                </CardActions>
                </Card>
                </div>
                    {/* project 2 */}
                <div className="card">
                <Card  shadow={3} style={{width: '320px', height: '320px'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Chip>MongoDb</Chip>
                    <Chip>Node Js</Chip>
                </CardActions>
                </Card>
                </div>
                    {/* project 3 */}
                <div  className="card">
                <Card shadow={3} style={{width: '320px', height: '320px'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <CardActions border>
                    <Chip>React</Chip>
                    <Chip>Vanilla Js</Chip>
                </CardActions>
                </Card>
                </div>
            </section>
        </div>
     );
}
 
export default Project;