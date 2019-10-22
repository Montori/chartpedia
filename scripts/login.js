function logIntoSite()
{
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200)
    {
      if(this.responseText !== "202"){
        document.getElementById("password").classList.add("is-invalid");
        document.getElementById("username").classList.add("is-invalid");
      }else
      {
        document.getElementById("loginFooter").innerHTML = "Login successful";
        setTimeout(success, 2000)
      }
    }
  }
  xmlhttp.open("POST", "../database/login_auth.php", true);
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xmlhttp.send(`username=${user}&password=${pass}`);
}

function success()
{
  modal = document.getElementById("loginModal");
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  modal.setAttribute('style', 'display: none');
  document.body.removeChild(document.getElementsByClassName('modal-backdrop')[0]);
}
