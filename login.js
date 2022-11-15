function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleLogin(){
    console.log(name,email,password);
    
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    let userExists = false;
    ctx.users.forEach((user)=>{
      if(user.email === email && user.password === password)
      {
        setName(user.name);
        setShow(false);
        userExists=true;
      }
      
    });
    if(!userExists){
      setStatus('Invalid User');
      setShow(true);
    }

  }    

  
  return (
    
    <Card
    bgcolor="secondary"
    header="Login"
    status={status}
    body={show ? (  
            <>
           Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleLogin}> Login</button>
            </>
          ):(
            <>
            <h5>Success</h5>
           
            </>
          )}
  />
  )  
}
