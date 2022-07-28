function login(){
    window.location.href="login.html";
}
function submitform(){
    var name=document.getElementById("name").value;
    var mail=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    if(name==""||mail==""||pass==""){
        alert("Enter all input fields");
    }
    else{
        window.location.href="user.html";
    }
}