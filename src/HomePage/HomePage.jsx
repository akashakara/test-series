import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,Row,Col
  } from 'reactstrap';

import { userActions } from '../_actions';

function HomePage() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

    return (
       <div> <div className="col-lg-8 offset-lg-2" style={{marginTop:-10,left:650,flexDirection:'column'}}>
           <Link to="/prof" style={{textDecoration:'none',color:'cadetblue'}}> <text style={{textAlign:'left' ,flexDirection:'row',fontSize:20}}>Hi, {user.firstName}</text></Link>
           
           

            </div>
            <div class="cor-card">
            <Row>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Introduction to AI</CardTitle>
          <CardText>Test your Artificial Intelligence knowledge by taking this quiz. All question and answers are based on all areas of Artificial Intelligence.</CardText>
          <CardText style={{textAlign:'right'}}>30 Min.</CardText>
          <Button><Link style={{color:'white',textDecoration:'none'}} to="/quiz">Attempt Now</Link></Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">RPA Basics</CardTitle>
          <CardText>Could Your Organization Benefit from Robotic Process Automation? Take our quiz to find out how an RPA solution can transform your business. RPA quiz</CardText>
          <CardText style={{textAlign:'right'}}>30 Min.</CardText>
          <Button>Attempt Now</Button>
        </Card>
      </Col>
      
    </Row>

    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Java Bootcamp</CardTitle>
          <CardText>There are a list of core java quizzes such as basics quiz, oops quiz, string handling quiz, array quiz, exception handling quiz, collection framework quiz etc.
</CardText>
          <CardText style={{textAlign:'right'}}>20 Min.</CardText>
          <Button>Attempt Now</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Python for Data Science</CardTitle>
          <CardText>Practice MCQs to boost your profile take Vskills practice test in Data Science with Python, and enrich your profile for superior opportunity Now!</CardText>
          <CardText style={{textAlign:'right'}}>40 Min.</CardText>
          <Button>Attempt Now</Button>
        </Card>
      </Col>
      
    </Row>
            </div>

        </div>
    );
}

export { HomePage };