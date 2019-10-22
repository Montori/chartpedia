<?php
include '../database/databaseConnection.php';
$str = "ajaja";
//if(mb_strlen($_POST['name']) >= 3 && mb_strlen($_POST['comment']) >= 20){
  $sql = "INSERT INTO comments (comment, comDate, user, ip, edited) VALUES ('{$_POST['comment']}', NOW(), '{$_POST['name']}', '{$_SERVER['REMOTE_ADDR']}', FALSE)";

  mysqli_query($conn, $sql);
  $conn->close();
//}
 ?>
