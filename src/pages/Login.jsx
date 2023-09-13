import './Login.css';
import React ,{useEffect} from 'react';
import { UserAuth } from '../context/Authcontext';
import { AuthContextProvider } from '../context/Authcontext';
import { auth } from './config';
import Home from './Home';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();

        try {
            await googleSignIn(auth);
            navigate('/home');
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect=(() => {
        if (user != null) {
          navigate('/home');
        }
      }, [user]);

    return (
        <>
            <div className="LoginPage"></div>
            <div className="LoginBox">
                Login
                <img className='LoginImage' src="https://openclipart.org/image/2400px/svg_to_png/218548/Elephant_minimal_vishnuvp.png"></img>
                <button className="button" onClick={handleGoogleSignIn}>
                    <img className='google-logo' src="https://pluspng.com/img-png/google-logo-png-open-2000.png"></img>
                    Login In with Google
                </button>
            </div>
        </>
    );
};

export default Login;