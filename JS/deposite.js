document.getElementById("deposite-btn").addEventListener("click", function () {
    const newDepositeAmount = getInputFieldValueBYId("input-deposite");

    if (newDepositeAmount >= 0) {
        const previousDepositeTotal = getElementValueBYId("current-deposite");
        const newDepositeTotal = newDepositeAmount + previousDepositeTotal;
        setTextElementvalueById("current-deposite", newDepositeTotal);

        const previousBalance = getElementValueBYId("balance");
        const newBalanceTotal = previousBalance + newDepositeAmount;
        setTextElementvalueById("balance", newBalanceTotal);
    } else {
        alert("Type a number");
    }
});
