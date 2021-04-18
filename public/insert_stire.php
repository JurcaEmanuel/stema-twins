<?php
$username = $_POST['username'];
$password = $_POST['password'];
$titlu = $_POST['titulu'];
$stire = $_POST['stire'];
if (!empty($username) || !empty($password) || !empty($titlu) || !empty($stire) {
 $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "stiri";
    //create connection
    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    if (mysqli_connect_error()) {
     die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());
    } else {
     $SELECT = "SELECT email From register Where email = ? Limit 1";
     $INSERT = "INSERT Into register (username, password, titlu, stire) values(?, ?, ?, ?)";
     //Prepare statement
     $stmt = $conn->prepare($SELECT);
     $stmt->bind_param("s", $email);
     $stmt->execute();
     $stmt->bind_result($email);
     $stmt->store_result();
     $stmt->store_result();
     $stmt->fetch();
     $rnum = $stmt->num_rows;
     if ($rnum==0) {
      $stmt->close();
      $stmt = $conn->prepare($INSERT);
      $stmt->bind_param("ssssii", $username, $password, $titlu, $stire);
      $stmt->execute();
      echo "Stirea a fost adaugata cu succes";
     } else {
      echo "Stirea a mai fost inregistrata";
     }
     $stmt->close();
     $conn->close();
    }
} else {
 echo "Toate campurile sunt obligatorii";
 die();
}
?>