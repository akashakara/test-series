import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
        <div className="col-lg-8 offset-lg-2" style={{marginTop:-10,left:650,flexDirection:'column'}}>
            <h3 style={{textAlign:'left' ,flexDirection:'row'}}>Hi {user.firstName}</h3>
           
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}

export { HomePage };