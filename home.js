/* 
THIS PART IS DESIGN FOR THE DEPOSITE AND SUM THE CURRENT ACCOUNT BALANCE
*/

document.getElementById("deposite-btn").addEventListener("click", function () {
    const depositeField = document.getElementById("input-deposite");
    const newDeposite = depositeField.value;
 

    const currentDeposite = document.getElementById("current-deposite");
    const totalDeposite = currentDeposite.innerText;
    const finalDeposite = parseFloat(totalDeposite) + parseFloat(newDeposite);
    depositeField.value=" ";
    currentDeposite.innerText = finalDeposite.toFixed(2);

    const currentBalance = document.getElementById("balance");
    const totalBalance = currentBalance.innerText;
    const finalBalance = parseFloat(totalBalance) + newDeposite;


    currentBalance.innerText = finalBalance.toFixed(2);
    console.log(finalBalance);

})



/* 
THIS PART IS DESIGN FOR THE WITHDRAW AND MINUS THE CURRENT ACCOUNT BALANCE
AND ALSO SHOW ERROR IF YOU DONOT HAVE ENOUGH CRADIT IN YOUR ACCOUNT
*/

document.getElementById("withdraw-btn").addEventListener("click", function () {

    const withdrawField = document.getElementById("input-withdraw");
    const newWithdraw = parseFloat(withdrawField.value);
    withdrawField.value=" ";

    const currentBalance = document.getElementById("balance");
    const totalBalance = parseFloat(currentBalance.innerText);


    const currentWithdraw = document.getElementById("current-withdraw");
    const totalWithdraw = parseFloat(currentWithdraw.innerText);

    if (totalBalance < newWithdraw) {
        alert("YOU HAVE A INSUFFICIENT BALANCE");
    }
    else {

        const finalWithdraw = totalWithdraw + newWithdraw;

        currentWithdraw.innerText = finalWithdraw.toFixed(2);

        const finalBalance = totalBalance - newWithdraw;


        if (finalBalance >= 0) {
            currentBalance.innerText = finalBalance.toFixed(2);
        }
        else {
            alert("YOU HAVE INSUFFICIENT BALANCE");
        }
    }
})