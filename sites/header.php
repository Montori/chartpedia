<!DOCTYPE html>
<html lang="en">

<head>
  <title>Chartpedia</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
  <script src="https://kit.fontawesome.com/59a38f9bcb.js" crossorigin="anonymous"></script>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript" src="https://www.google.com/jsapi"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
  <link rel="stylesheet" href="../styles/styles.css">
</head>

<div id="header" class="jumbotron">
  <h1>Chartpedia</h1>
  <p id="headersubtitle">A thing being developed</p>
</div>

<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <a class="navbar-brand text-light" href="index.php">Chartpedia</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarToggler">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link text-white-50" href="temperature.php">Temperature <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white-50" href="humidity.php">Humidity</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-white-50" href="cpuTemperature.php">CPU-Temperature</a>
        </li>
      </ul>
    <div>
      <a href="https://github.com/Montori/chartpediaphp" class="fab fa-github text-light d-inline" style="text-decoration: none;"></a>
    </div>
  </div>
</nav>
