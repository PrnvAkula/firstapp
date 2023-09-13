import React, {useEffect} from 'react'
import { UserAuth } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom';

const Home =() =>{

  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
        await logOut();
        navigate('/login');
    }
    catch (error) {
        console.log(error);
    }
};

  return (
    <div>
      <button onClick={handleSignOut}>Log Out</button>
    </div>
  )
}

export default Home;