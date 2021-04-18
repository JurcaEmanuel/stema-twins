(function(){

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtX4iiqAY7wV9yH-N55ZcXlGbPQnR3d2Y",
    authDomain: "fake-news-4c8cd.firebaseapp.com",
    projectId: "fake-news-4c8cd",
    storageBucket: "fake-news-4c8cd.appspot.com",
    messagingSenderId: "618912650957",
    appId: "1:618912650957:web:fd176d8ef3e27e7d89fb84",
    measurementId: "G-B7P1BK1QTT"
  };
  firebaseConfig.initializeApp(config);
  {"0";"<?php","1";"$username = $_POST['username'];","2";"$password = $_POST['password'];","3";"$titlu = $_POST['titulu'];","4";"$stire = $_POST['stire'];","5";"if (!empty($username) || !empty($password) || !empty($titlu) || !empty($stire) {","6";"$host = \"localhost\";","7";"$dbUsername = \"root\";","8";"$dbPassword = \"\";","9";"$dbname = \"stiri\";","10";"//create connection","11";"$conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);","12";"if (mysqli_connect_error()) {","13";"die('Connect Error('. mysqli_connect_errno().')'. mysqli_connect_error());","14";"} else {","15";"$SELECT = \"SELECT email From register Where email = ? Limit 1\";","16";"$INSERT = \"INSERT Into register (username, password, titlu, stire) values(?, ?, ?, ?)\";","17";"//Prepare statement","18";"$stmt = $conn->prepare($SELECT);","19";"$stmt->bind_param(\"s\", $email);","20";"$stmt->execute();","21";"$stmt->bind_result($email);","22";"$stmt->store_result();","23";"$stmt->store_result();","24";"$stmt->fetch();","25";"$rnum = $stmt->num_rows;","26";"if ($rnum==0) {","27";"$stmt->close();","28";"$stmt = $conn->prepare($INSERT);","29";"$stmt->bind_param(\"ssssii\", $username, $password, $titlu, $stire);","30";"$stmt->execute();","31";"echo \"Stirea a fost adaugata cu succes\";","32";"} else {","33";"echo \"Stirea a mai fost inregistrata\";","34";"}","35";"$stmt->close();","36";"$conn->close();","37";"}","38";"} else {","39";"echo \"Toate campurile sunt obligatorii\";","40";"die();","41";"}","42";"?>"}
}());