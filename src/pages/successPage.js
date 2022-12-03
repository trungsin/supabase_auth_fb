import {createClient} from '@supabase/supabase-js';
import {Auth, ThemeSupa} from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';
import React,{useEffect,useState} from 'react';

const supabase = createClient(
    "https://ystzevlbwdoiqhqyalak.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzdHpldmxid2RvaXFocXlhbGFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk5OTE4OTIsImV4cCI6MTk4NTU2Nzg5Mn0.3C30BEjTfYTKQ3VyqTboLDSljJjaCHyKJkimyzPCru0"
);
function Success() {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        async function getUserData(){
            await supabase.auth.getUser().then((value)=>{
                if(value.data?.user){
                    console.log(value.data.user);
                    setUser(value.data.user);
                }
            })
        }
        getUserData();
    }, []);
    async function signOutUser(){
        const {error} = await supabase.auth.signOut();
        navigate("/");
    }

    return (
      <div className="App">
        <header className="App-header">
            { Object.keys(user).length !== 0 ?
                <>
                    <h1> Success</h1>
                    <button onClick={() => signOutUser()}>Sign Out</button>
                </>
            :
                <>
                    <h1> User not logged in</h1>
                    <button onClick={() => { navigate("/")}}>Back To home</button>
                </>
            }
            
        </header>
      </div>
    );
  }
  
  export default Success;
  