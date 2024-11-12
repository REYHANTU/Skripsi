<?php 

include 'Config.php';
$sql="Select*from combined_merge_datasets";
$result=$conn->query($sql);

// $data=array();

// if($result->num_rows > 0) {
//     while($row=$result->fetch_assoc()) {
//         $data[]=$row;
//     }
// }

// echo json_encode($data);

// $conn->close();

?>