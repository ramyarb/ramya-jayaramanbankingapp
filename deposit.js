function Deposit(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [depositAmt, setDepositAmt]         = React.useState('');
  const [validTransaction, setValidTransaction] = React.useState(false);
  const ctx = React.useContext(UserContext);  
  const [name, setName]     = React.useState('Ramya');

  function validate(field, label){
      if (!field) {
        setStatus('Error : Field is Empty - ' + label);
        setTimeout(() => setStatus(''),3000);
        setValidTransaction(false);
        return false;
      }
      if (!Number(field)) {
        setStatus('Error : Not a Number - ' + label);
        setTimeout(() => setStatus(''),3000);
        setValidTransaction(false);
        return false;
      }
      if (Number(field)<=0) {
        setStatus('Error : Negative Deposit - ' + label);
        setTimeout(() => setStatus(''),3000);
        setValidTransaction(false);
        return false;
      }

      return true;
  }

  function handleDeposit(event){
    console.log();
    if (!validate(depositAmt,'Deposit Amount'))     return;
    let usrBalance =0;
     ctx.users.forEach((user) => {
       if(user.name === name)
       {
        usrBalance = user.balance;
        return;
       }
       
    });
    let newTotal = Number(usrBalance) + Number(depositAmt);
    //setTotalState(newTotal);
    setShow(false);
    
    setValidTransaction(false);
//uodate user bal

    ctx.users.forEach(user => {
      if(user.name === name)user.balance=newTotal;
    });
    setStatus("Success: Your Current Balance is "+newTotal);
    event.preventDefault();
  }    

  function clearForm(){
    setDepositAmt('');
  
    setShow(true);
  }
  
  return (
    
    <Card
    bgcolor="secondary"
    header={name}
    status={status}
    body={show ? (  
            <>
            Deposit Amount<br/>
            $<input type="input" className="form-control" id="depositAmt" placeholder="Enter Deposit Amount" value={depositAmt} onChange={e => setDepositAmt(e.currentTarget.value)} /><br/>
           
            <button type="submit" className="btn btn-dark" onClick={handleDeposit} disabled={validTransaction}>Deposit</button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-dark" onClick={clearForm}>Add another Deposit</button>
            </>
          )}
  />
  )
}