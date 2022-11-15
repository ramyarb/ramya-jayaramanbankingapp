function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [withdrawAmt, setWithdrawAmt]         = React.useState('');
  const [validTransaction, setValidTransaction] = React.useState(false);
  const ctx = React.useContext(UserContext);  
  const [name, setName]     = React.useState('Ramya');

  function validate(field, label,prevBal,transBal){
      if (!field) {
        setStatus('Error : Field is EmpBalty - ' + label);
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
        setStatus('Error : Negative withdraw - ' + label);
        setTimeout(() => setStatus(''),3000);
        setValidTransaction(false);
        return false;
      }
      if (Number(prevBal)<=0) {
        setStatus('Error : Insufficient balance to perform Withdrawal  - Your Balance is ' + prevBal);
        setTimeout(() => setStatus(''),3000);
        setValidTransaction(false);
        return false;
      }if (Number(transBal)<0) {
        setStatus('Error : Invalid transaction - Your current balance is' + prevBal+' will not support this transaction');
        setTimeout(() => setStatus(''),3000);
        setValidTransaction(false);
        return false;
      }


      return true;
  }

  function handlewithdraw(event){
    console.log();
    
    let usrBalance =0;
     ctx.users.forEach((user) => {
       if(user.name === name)
       {
        usrBalance = user.balance;
        return;
       }
       
    });
    let newTotal = Number(usrBalance) -  Number(withdrawAmt);
    if (!validate(withdrawAmt,'Withdraw Amount',usrBalance,newTotal))     return;
    
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
    setWithdrawAmt('');
  
    setShow(true);
  }
  
  return (
    
    <Card
    bgcolor="secondary"
    header={name}
    status={status}
    body={show ? (  
            <>
            Withdrawal Amount<br/>
            <input type="input" className="form-control" id="withdrawAmt" placeholder="Enter Withdraw Amount" value={withdrawAmt} onChange={e => setWithdrawAmt(e.currentTarget.value)} /><br/>
           
            <button type="submit" className="btn btn-dark" onClick={handlewithdraw} disabled={validTransaction}>Withdraw</button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-dark" onClick={clearForm}>Add another Withdraw</button>
            </>
          )}
  />
  )
}
