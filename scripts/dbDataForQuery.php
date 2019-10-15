<?php include '../database/databaseConnection.php'; ?>
<?php
  $sql = "SELECT * FROM temperatuur2 WHERE asukoht='".$_REQUEST["l"]."' AND kuupaev LIKE '".$_REQUEST["d"]."%'"."AND window='".$_REQUEST["c"]."' ORDER BY kuupaev ASC";
  $result = $conn->query($sql);

  if($result->num_rows > 0){
    while($row = $result->fetch_assoc()){
      echo $row['celsius'].";".$row['kuupaev']."//";
    }
  }
 ?>
