<?php
// Detail koneksi ke MySQL
$servername = "127.0.0.1:8111";  // Host server MySQL
$username = "root";         // Username MySQL (default: root)
$password = "";             // Password default MySQL (kosong)
$dbname = "test1";    // Nama database yang dihubungkan

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Mengecek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
// $connection = new mysqli("localhost", "root", "", "", 8111); // Ganti username, password, dan nama database
// if ($connection->connect_error) {
//     die("Koneksi gagal: " . $connection->connect_error);
// } else {
//     echo "Koneksi berhasil ke MySQL di port: " . $connection->port;
// }
// $connection->close();
?>