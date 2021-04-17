
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button ,Card,CardBody,CardText,CardTitle} from 'reactstrap';
import { userActions } from '../_actions';
import { useDispatch, useSelector } from 'react-redux';
function profile(){
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }
  return(
<div style={{flex:'1'}}>
  
        <Card body>
          <CardTitle tag="h5">Name:{user.firstName }{ user.lastName}</CardTitle>
          <CardTitle tag="h5">UserName:{user.username}</CardTitle>
          
          <Button> <Link to="/login" style={{textDecoration:'none',color:'white'}}>Logout</Link></Button>
         
        </Card>

        <div style={{justifyContent:'end'}}><Button><Link to='/' style={{textDecoration:'none', color:"white"}}>Back</Link></Button></div>
  
        
</div>
    );


}

export { profile };