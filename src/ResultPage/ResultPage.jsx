
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function ResultPage(){
  return(
<div>
   <div style={{color:'black',alignContent:'center'}}>Thank you For Appearing</div>


   <Button><Link to='/' style={{textDecoration:'none',color:'white'}}>Home</Link></Button>
</div>
    );


}

export { ResultPage };