<?php
  $pw = password_hash($_POST['pass'], PASSWORD_DEFAULT);
  echo $pw;
 ?>
