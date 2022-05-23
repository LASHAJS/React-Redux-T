import React, {useState} from "react";
import {Form, Button, Card} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {AuthUser} from "../../redux/reducers/AuthReducer";


const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const {email, password} = user;
    const dispatch = useDispatch()
    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        const userData = {
            userEmail:user.email,
            password:user.password
        }
        if(user.email !== '' && user.password !== ''){
            dispatch(AuthUser(userData))
        }
    };

    return (
        <Card className={"w-25"} style={{margin:"50px auto"}}>
            <Card.Body>
                <Card.Title>ავტორიზაცია</Card.Title>
                <Form className="rounded p-4 p-sm-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>თქვენი ელ.ფოსტა</Form.Label>
                        <Form.Control type="email"
                                      placeholder=""
                                      value={email}
                                      name="email"
                                      onChange={onChange}
                                      required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>თქვენი პაროლი</Form.Label>
                        <Form.Control type="password"
                                      placeholder=""
                                      value={password}
                                      name="password"
                                      onChange={onChange}
                                      required
                        />
                    </Form.Group>
                    <Button variant="outline-primary" value="Login"
                            onClick={onSubmit}
                    >
                        შესვლა
                    </Button>
                </Form>
            </Card.Body>

        </Card>


    );

};
export default Login