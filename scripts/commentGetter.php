<?php include '../database/databaseConnection.php'; ?>
<?php
  $sql = "SELECT * FROM comments ORDER BY id DESC";
  $result = $conn->query($sql);

  if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
      echo "{$row['id']};{$row['comment']};{$row['comDate']};{$row['user']};";
      echo $row['edited'] === "1" ? "1" : "0";
      echo "//";
    }
  }
 ?>
