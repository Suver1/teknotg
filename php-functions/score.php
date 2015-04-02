<?php
$username = "bit";
$password = "yP76sxmD5ZAFjzhf";
$hostname = "bit.dance";
$dbname = "bit";
$tablename = "game_scores";


//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password)
    or die("Unable to connect to MySQL");


//select a database to work with
$selected = mysql_select_db($dbname, $dbhandle)
    or die("Could not select database");


//execute the SQL query and return records
$result = mysql_query("SELECT * FROM {$tablename}");






//print results
echo '<link rel="stylesheet" href="style.css">';
echo '<table>';
echo '<thead>';
echo '<th>ID</th> <th>Name</th> <th>Score</th> <th>Time used</th> <th>Entry date</th>';
echo '</thead>';

while ($entry = mysql_fetch_array($result)) {
    echo '<tr>';
    echo '<td>' . $entry{'id'} . '</td>';
    echo '<td>' . $entry{'name'} . '</td>';
    echo '<td>' . $entry{'score'} . '</td>';
    echo '<td>' . $entry{'time_used'} . '</td>';
    echo '<td>' . $entry{'entry_date'} . '</td>';
    echo '</tr>';
}

echo '</table>';


//close the connection
mysql_close($dbhandle);
