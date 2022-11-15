function AllData(){
  const ctx = React.useContext(UserContext);

  const createUserCards = [];
   ctx.users.map((user) => {
    console.log(`${user.name} , ${user.email} , ${user.password} , ${user.balance}`);
     let usrname= "User : "+user.name;
    createUserCards.push(<Card
      bgcolor="secondary"
      header={usrname}
      title="Details"
      body={  
              <>
              User Name : {user.name}<br></br>
              Password :  {user.password}<br></br>
              E-Mail :  {user.email} <br/>
              Balance :  {user.balance}<br/>
              </>
            
          }
        />);
       
    })
  return (
    <>
    <h5>All Data in Store</h5>
    <div>{createUserCards}</div>
    <br/>
    </>
  );
}
