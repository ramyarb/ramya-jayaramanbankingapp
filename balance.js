function Balance(){
  const ctx = React.useContext(UserContext);  
  const [name, setName] = React.useState('Ramya');
  
  //get user balance
let userBal = 0;
  ctx.users.map((usr) => {
    if(usr.name === name)

    {
      console.log("user " +name+" balance is "+ usr.balance);
      userBal = usr.balance;
    }
  })
  let greet = "Hi "+name+" ,";
  return (
    

    
        <Card
        bgcolor="secondary"
        header="Balance"
        title={greet}
        body={  
                <>
             
                Your balance is <b>{userBal} </b>
                </>
              
            }
      />
  );
}
