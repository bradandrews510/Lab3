function Validation(pass1, pass2)
{
	var p1 = document.getElementById('pass1').value;
	var p2 = document.getElementById('pass2').value;

    if((p2 != p1) && (p1.length >= 8)) //Most common case (passwords do not match)
	{
		alert("Passwords do not match!");
	}

	if((p1 != p2) && (p1.length < 8)) //Passwords do not match and need at least 8 characters (password)
	{

		alert("Passwords do not match! One is not 8 characters or more.");
	}

	if((p1 == p2) && (p1.length < 8)) //Same passwords, but need at least 8 characters (password)
	{
		alert("Passwords match! The passwords are not 8 characters or more.");
	}
	else if ((p1 == p2) && (p1.length >= 8)) //Else passwords match, hence validated.
	{
		alert("Passwords validated!");
	}
}
