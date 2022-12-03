import {createClient} from '@supabase/supabase-js';
import {Auth, ThemeSupa} from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
    "https://ystzevlbwdoiqhqyalak.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzdHpldmxid2RvaXFocXlhbGFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk5OTE4OTIsImV4cCI6MTk4NTU2Nzg5Mn0.3C30BEjTfYTKQ3VyqTboLDSljJjaCHyKJkimyzPCru0"
);
async function signInWithFacebook() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
    });
    console.log(data);
  }
function Login() {
    const navigate = useNavigate();
    
    supabase.auth.onAuthStateChange( async (event) =>{
        if(event !== "SIGNED_OUT") {
            // success
            navigate("/success");
        } else {
            //to home
        }
    })
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => signInWithFacebook()}>login fb</button>
      </header>
    </div>
  );
}

export default Login;
