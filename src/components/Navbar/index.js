import React from "react";
import {Link} from "react-router-dom";
import {Button, Form} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import {logOutUser} from "../../redux/reducers/AuthReducer";

const Navbar = () => {

    const dispatch = useDispatch()

    const isAuth = localStorage.getItem("jwt")
    const userData  = useSelector(state => state.auth.userData);
    
    const handleLougOut = () => {
        dispatch(logOutUser())
    }
    return (
        <div className="col-md-12 bg-dark py-2">
            <nav className="navbar bg-dark navbar-dark d-flex justify-content-between">
                <Link to={"/"} className="navbar-brand ml-5 ms-2">
                    React Redux
                </Link>
                <div style = {{color:"white"}}>
                    {userData && userData.userEmail}
                </div>
                {isAuth && (
                    <Form>
                        <Button variant="outline-secondary" className="me-2" onClick={handleLougOut}>
                            გასვლა
                        </Button>
                    </Form>
                )}


            </nav>
        </div>
    );
};

export default Navbar;