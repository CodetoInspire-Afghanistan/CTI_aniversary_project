// accessing input object
		var username=document.myform.username;
		var email=document.myform.email;
		var pwd=document.myform.pwd;
		var pwd_confirm=document.myform.pwd_confirm;

	// accessing div elements
		var name_error=document.getElementById("name_error");
		var email_error=document.getElementById("email_error");
		var pwd_error=document.getElementById("pwd_error");
	//	adding event handler
	username.addEventListener("blur", nameVerify, true);

function nameVerify () {
	// body...
	if(username.value != ""){
		username.style.border="";
		name_error.textContent="";
		return true;
	}
}
function validate () {
	// body...
	if(username.value == ""){
		name_error.textContent="Username is required!";
		username.style.border="1px solid red";
		username.focus();
		return false;

	}
	if(email.value == ""){
		email_error.textContent="Email is required!";
		email.style.border="1px solid red";
		email.focus();
		return false;

	}
	if(pwd.value == ""){
		pwd_error.textContent="Password is required!";
		pwd.style.border="1px solid red";
		pwd.focus();
		return false;

	}
	if(pwd.value != pwd_confirm.value){
		pwd_error.textContent="Does not match!";
		pwd_confirm.style.border="1px solid  red";
		pwd_confirm.focus();
		return false;
	}
}