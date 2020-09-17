import React,{useState, useEffect} from 'react';

import { IUserInput } from '../../Common/Interfaces';
const API_BASE_URL = "https://localhost:44345/api" ;
const POLL_API_URL = API_BASE_URL + "/poll/"
const USER_API_URL = API_BASE_URL + "/user/"


async function fetchUser(id: string | number)
{
  
}

function HomePage() {
  const [index, setIndex] = useState(1);
  const [user, setUser] = useState(undefined);
  useEffect( () => 
  {
    const getUser = async () =>
    {
      const response = await fetch(USER_API_URL+index);
      const data = await response.json();
      console.log(data);
      setUser(data.name);
    }
    getUser();
  }, []);


  return (
    <div>
      <h1>Just testing</h1>
      <button type='button' onClick={() => setIndex(index+1)}>
        Next
      </button>
      {user && <div>{user}</div>}
      
    </div>
    
  )
}

export default HomePage;