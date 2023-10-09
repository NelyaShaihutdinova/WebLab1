<?php
require_once('CoordinatesValidator.php');
require_once ('HitPoint.php');
session_start();
if (!isset($_SESSION["results"])) {
    $_SESSION["results"] = array();
}
if ($_GET['clear'] == "false") {
    $y = $_GET['y'];
    $x = $_GET['x'];
    $r = $_GET['r'];
    $time_zone_offset = $_GET['time'];
    $validator = new CoordinatesValidator($x, $y, $r);
    if ($validator->checkData()) {
        $hitPoint = new HitPoint($x, $y, $r);
        if ($hitPoint->checkPoint()){
            $flag = "TRUE";
        } else {
            $flag = "FALSE";
        }
        $time = date('H:i:s', time() + 3 * 60 * 60);
        $newResult = array(
            "time" => $time,
            "x" => $x,
            "y" => $y,
            "r" => $r,
            "result" => $flag
        );
        array_push($_SESSION["results"], $newResult);
        foreach (array_reverse($_SESSION["results"]) as $tableRow) {
            echo "<tr>";
            echo "<th>" . $tableRow["time"] . "</th>";
            echo "<th>" . $tableRow["x"] . "</th>";
            echo "<th>" . $tableRow["y"] . "</th>";
            echo "<th>" . $tableRow["r"] . "</th>";
            echo "<th>" . $tableRow["result"] . "</th>";
            echo "</tr>";
        }
    }
} else {
    $_SESSION["results"] = array();
}