import * as React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { Button, Col } from "reactstrap";

function QuizPage(){
    const [counter, setCounter] = React.useState(30);
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 100000);
      }, [counter]);
    return(
        <div className="App" >
        <div style={{textAlign:'right'}}>Time: {counter} Min. Left</div>
       <div> <h3>Quiz</h3></div>
       <div>questions section</div>
       <div style={{justifyContent:'end'}}><Button><Link to='/result' style={{textDecoration:'none', color:"white"}}>Submit</Link></Button></div>
       
      </div>

   
    );

}




export { QuizPage };