
/*function validate()
{
    var Email_Address=document.getElementById("Inputemail").Value;
    var Password=document.getElementById("InputPassword").Value;

    if(Inputemail=="gopi@gmail.com" && InputPassword=="Gopi8978")
    {
        alert("login succesfull")
        return false
    }
    else
    {
        alert("login failed")
    }

} */

function validate() {
    var user = document.getElementById("Inputemail").value;

    var pass = document.getElementById("Inputpassword").value;
    if (user == "") {
        alert("enter u r mail")
        return false;
    }
    if (pass == "") {
        alert("enter u r password")
        return false;
    }
    else{
        alert("login sucessfully")
    }
}














