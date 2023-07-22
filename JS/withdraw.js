document.getElementById("withdraw-btn").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueBYId("input-withdraw");
  if (newWithdrawAmount >= 0) {
    const previouswithdrawTotal = getElementValueBYId("current-withdraw");
    const newWithdrawTotal = newWithdrawAmount + previouswithdrawTotal;
    //      setTextElementvalueById("current-withdraw", newWithdrawTotal);

    const previousBalance = getElementValueBYId("balance");

    const newBalanceTotal = previousBalance - newWithdrawAmount;
    if (previousBalance >= newWithdrawAmount) {
      setTextElementvalueById("current-withdraw", newWithdrawTotal);
      setTextElementvalueById("balance", newBalanceTotal);
    } else {
      alert("Not Have Enough balance");
    }
  } else {
    alert("Type a number");
  }
});
