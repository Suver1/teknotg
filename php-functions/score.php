<?php

if (isset($_GET['action']) && ($_GET['action'] == 'getScore')) {

    db_action('get', null, null, null);

} else if (isset($_POST['action']) && ($_POST['action'] == 'sendScore')) {

    $name = db_quote($_POST['name']);
    $score = db_quote($_POST['score']);
    $time_used = db_quote($_POST['time_used']);

    db_action('save', $name, $score, $time_used);

} else {

    db_action('show', null, null, null);

}


function db_action($action, $name, $score, $time_used) {

    if ($action == 'save') {

        db_query("INSERT INTO game_scores (
                      name,
                      score,
                      time_used
                  ) VALUES (
                      {$name},
                      {$score},
                      {$time_used}
                  )
                      ");

    }

    if ($action == 'get') {

        db_get_json_results();

    }

    if ($action == 'show') {

        db_get_results();

    }

}


function db_connect() {
    static $connection;

    if (!isset($connection)) {
        require_once('../configuration.php');
        $connection = mysqli_connect($hostname, $username, $password, $dbname);
    }

    if ($connection === false) {
        return mysqli_connect_error();
    }

    return $connection;
}


function db_query($query) {
    $connection = db_connect();

    $result = mysqli_query($connection, $query);

    return $result;
}


function db_quote($value) {
    $connection = db_connect();

    return "'" . mysqli_real_escape_string($connection, $value) . "'";
}


function db_get_results() {

    $result = db_query("SELECT * FROM game_scores ORDER BY score DESC, entry_date ASC");

    //print results
    echo '<link rel="stylesheet" href="style.css">';
    echo '<table>';
    echo '<thead>';
    echo '<th>ID</th> <th>Name</th> <th>Score</th> <th>Time used</th> <th>Entry date</th>';
    echo '</thead>';

    while ($entry = mysqli_fetch_assoc($result)) {
        echo '<tr>';
        echo '<td>' . $entry{'id'} . '</td>';
        echo '<td>' . $entry{'name'} . '</td>';
        echo '<td>' . $entry{'score'} . '</td>';
        echo '<td>' . $entry{'time_used'} . '</td>';
        echo '<td>' . $entry{'entry_date'} . '</td>';
        echo '</tr>';
    }

    echo '</table>';

}


function db_get_json_results() {

    $rawResult = db_query("SELECT * FROM game_scores ORDER BY score DESC, entry_date ASC");

    $results = array();

    while ($result = mysqli_fetch_assoc($rawResult)) {
        $results[] = $result;
    }

    echo json_encode($results);

}
