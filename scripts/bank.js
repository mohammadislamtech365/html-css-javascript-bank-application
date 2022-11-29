document.getElementById("deposit-btn").addEventListener("click",function(){
    var depositAmount = document.getElementById("deposit-amnt").value;
    var totalDepositAmount = document.getElementById("deposit-current-amnt").innerText;
    var balanceAmount =  document.getElementById("balance-amnt").innerText;
    document.getElementById("deposit-current-amnt").innerText = parseFloat(depositAmount) + parseFloat(totalDepositAmount);
    document.getElementById("balance-amnt").innerText  = parseFloat(totalDepositAmount) + parseFloat(balanceAmount) + parseFloat(depositAmount) ;
});

document.getElementById("withdraw-btn").addEventListener("click",function(){
    console.log("clicked");
});