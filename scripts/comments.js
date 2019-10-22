var nameMin = 3;
var commentMin = 20;
var comments = [];

let initialReq = new XMLHttpRequest();

initialReq.onreadystatechange = function()
{
  if(this.readyState == 4 && this.status == 200)
  {
    comments = convertResponseText(this.responseText);//Ab hier passiert die Magic
    for (var i = 0; i < comments.length-1; i++) {
      let currComment = comments[i];
      createSiteComment(currComment.user, currComment.text)
    }
  }
}

initialReq.open("GET", "../scripts/commentGetter.php",true);
initialReq.send();

function convertResponseText(text)
{
  let result = [];
  rawComment = text.split("//");

  for (var i = 0; i < rawComment.length; i++) {
    splitComment = rawComment[i].split(";");

    let comment = {
      id: splitComment[0],
      text: splitComment[1],
      date: splitComment[2],
      user: splitComment[3],
      edited: splitComment[4]
    };

    result.push(comment)
  }

  return result;
}

function createSiteComment(user, text)
{
  let comment = document.createElement("div");
  comment.classList.add("card");
  comment.classList.add("bg-dark");
  comment.classList.add("text-white-50");
  comment.classList.add("siteComment");

  let header = document.createElement("div");
  header.classList.add("card-header");
  header.classList.add("font-weight-bold");
  header.innerHTML = `${user} said:`

  let body = document.createElement("div");
  body.classList.add("card-body");

  let textBody = document.createElement("p");
  textBody.classList.add("card-text");
  textBody.innerHTML = text;
  body.appendChild(textBody);

  comment.appendChild(header);
  comment.appendChild(body);

  document.getElementById("comment-container").appendChild(comment);
}

function submitComment()
{
  let nameElement = document.getElementById("usernameInput");
  let commentElement = document.getElementById("commentText");

  let nameOK = validateInput(nameElement, nameMin);
  let commentOK = validateInput(commentElement, commentMin);
  if(nameOK && commentOK)
  {
    handleSuccess();
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.open("POST", "../scripts/comment_post.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(`name=${nameElement.value}&comment=${commentElement.value}`);
  }
}

function validateInput(element, validation)
{
  let result = false;

  if(element.value.length < validation)
  {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
  }
  else
  {
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");

    result = true;
  }
  return result;
}

function handleSuccess()
{
  let button = document.getElementById("commit");
  let loadingPanel = document.getElementById("loadingPanel");

  button.classList.add("disabled");
  button.disabled = true;
  loadingPanel.style.display = 'inline-block';

  setTimeout(remSpinner, 2000);

  function remSpinner()
  {
    loadingPanel.style.display = 'none';
    button.innerHTML = "Done!";

    setTimeout(resetForm, 1000);

    function resetForm()
    {
      button.innerHTML = "Submit";
      button.classList.remove("disabled");
      button.disabled = false;
      let nameElement = document.getElementById("usernameInput");
      let commentElement = document.getElementById("commentText");
      commentElement.classList.remove("is-valid");
      nameElement.classList.remove("is-valid");
      commentElement.value = "";
      nameElement.value = "";
      clearFields(nameElement, commentElement);
    }
  }
}
