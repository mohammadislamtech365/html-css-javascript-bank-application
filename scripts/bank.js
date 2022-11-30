function getInput(id){
  const target = document.getElementById(id);
  const targetString = target.value;
  const targetNumericValue = parseFloat(targetString);
  return targetNumericValue;
}
function getElement(id){
  const target = document.getElementById(id);
  const targetString = target.innerHTML;
  const targetNumericValue = parseFloat(targetString);
  return targetNumericValue;
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositAmount = getInput("deposit-amnt");
  const totalDepositAmount = getElement('deposit-current-amnt');
  const balanceAmount = getElement('balance-amnt');
  if (!isNaN(depositAmount)) {
    document.getElementById("deposit-current-amnt").innerText =
    Math.abs(depositAmount) + totalDepositAmount;
    document.getElementById("balance-amnt").innerText =
    parseFloat(balanceAmount) + Math.abs(parseFloat(depositAmount));
  }
  document.getElementById("deposit-amnt").value = "";
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmount = getInput("withdraw-amnt");
  const totalWithdrawAmount = getElement("withdraw-current-amnt");
  const balanceAmount = getElement("balance-amnt");
  if (!isNaN(withdrawAmount)) {
    document.getElementById("withdraw-current-amnt").innerText =
    Math.abs(parseFloat(withdrawAmount)) + parseFloat(totalWithdrawAmount);
    document.getElementById("balance-amnt").innerText =
    parseFloat(balanceAmount) - Math.abs(parseFloat(withdrawAmount));
  }
  document.getElementById("withdraw-amnt").value = "";
});
