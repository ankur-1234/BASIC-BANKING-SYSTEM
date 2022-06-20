function sendMoney(){
    var Name = document.getElementById("Name").value;
    var EAmount = parseInt(document.getElementById("EAmount").value);
 var SenderName = document.getElementById("SenderName").value;
  var findSenderBankAccount = SenderName + "123";
    var enterSAmount =parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if (EAmount <*
       enterSAmount) {
       alert("Insufficient Balance..Please check your account balance.")
    }
 else {
       var findUserBankAccount = Name + "123";
      
       var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + EAmount;
       var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - EAmount;
       document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
       document.getElementById(findUserBankAccount).innerHTML = finalAmount;
       alert(`Successful Transaction !!  
       $${EAmount} is sent to ${Name}@email.com.`)
 
       // transaction history 
       var createPTag = document.createElement("li");
       var textNode = document.createTextNode(`Rs ${EAmount} is sent from the sender with Email-id ${SenderName}@email.com
  to recepient with Email-id ${Name}@email.com on ${Date()}.`);
       createPTag.appendChild(textNode);
       var element = document.getElementById("transaction-history-body");
       element.insertBefore(createPTag, element.firstChild);
    }
 }