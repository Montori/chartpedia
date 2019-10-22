<?php
include '../database/databaseConnection.php';

session_start();

if(isset($_POST['username'], $_POST['password'])){
  $sql = $conn->prepare("SELECT id,password FROM user_login WHERE username = ?");
  $sql->bind_param('s', $_POST['username']);
  $sql->execute();
  $sql->store_result();

  if($sql -> num_rows > 0){
    $sql->bind_result($id, $password);
    $sql->fetch();
    if(password_verify($_POST['password'], $password)){
      session_regenerate_id();
      $_SESSION['loggedin'] = TRUE;
		  $_SESSION['name'] = $_POST['username'];
		  $_SESSION['id'] = $id;
      echo '202';
    }else{
      echo "701";
    }
  }else{
    echo "700";
  }
  $sql->close();
}else{
  echo "406";
}
 ?>
