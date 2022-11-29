document.getElementById("login-btn").addEventListener('click',function(){
   const userId = document.getElementById("username").value;
   const password = document.getElementById("pwd").value;
   //Never do password and email validation on client side. This is just for testing purporse
   if(userId === "saikat2021@gmail.com" && password === "test1234") {
    window.location.href="./bank.html";
   }
   else {
    alert("Please enter correct email id and password")
   }
})