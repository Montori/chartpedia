<?php

// database settings
$db = null;
$db_engine = 'mysql';
$host = 'localhost';
$charset = 'utf8';

$db_user = 'student2';
$db_password = 'Password1';
$db_base = 'student2_data';
$dsn = "mysql:host=$host;dbname=$db_base;charset=$charset";

// Connection to our database
try{

    $dsn = "mysql:host=$host;dbname=$db_base;charset=$charset";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
        PDO::ATTR_EMULATE_PREPARES   => true,
    ];
    $db = new PDO($dsn, $db_user, $db_password, $options);

}catch (PDOException $e){
     print(json_encode(array('outcome' => false, 'message' => 'Unable to connect')));
}


// Get all my users
function getFullListOfData($dbh)
{
    $request = $dbh->prepare( "SELECT kuupaev, temp FROM temperatuur2 WHERE id < 2" );
    return $request->execute() ?  $request->fetchAll() : null;
}


$users = getFullListOfData($db);

// List of the chart rows
$rows = [];

// Create rows for each month
foreach ($users as $key => $value) {
     $rows[] =  ['c' =>
                        [
                          ['v' => $key],
                          ['v' => $value, 'f' => 'Share']
                        ]
                ];
}

// Structure data for google visualization API
$data = [

     'cols' => [
            ['1', 'Date', 'type' => 'string'],
            ['2',  'Temperature', 'type' => 'number']
      ],
      'rows' => $rows

];


header('Content-Type: application/json');
echo json_encode($data);
