document.getElementById("deposit-btn").addEventListener("click", function () {
  var depositAmount = document.getElementById("deposit-amnt").value;
  var totalDepositAmount = document.getElementById(
    "deposit-current-amnt"
  ).innerText;
  var balanceAmount = document.getElementById("balance-amnt").innerText;
  if (depositAmount !== "") {
    document.getElementById("deposit-current-amnt").innerText =
    Math.abs(parseFloat(depositAmount)) + parseFloat(totalDepositAmount);
    document.getElementById("balance-amnt").innerText =
    parseFloat(balanceAmount) + Math.abs(parseFloat(depositAmount));
  }
  document.getElementById("deposit-amnt").value = "";
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  var withdrawAmount = document.getElementById("withdraw-amnt").value;
  var totalWithdrawAmount = document.getElementById(
    "withdraw-current-amnt"
  ).innerText;
  var balanceAmount = document.getElementById("balance-amnt").innerText;
  if (withdrawAmount !== "") {
    document.getElementById("withdraw-current-amnt").innerText =
    Math.abs(parseFloat(withdrawAmount)) + parseFloat(totalWithdrawAmount);
    document.getElementById("balance-amnt").innerText =
    parseFloat(balanceAmount) - Math.abs(parseFloat(withdrawAmount));
  }
  document.getElementById("withdraw-amnt").value = "";
});
