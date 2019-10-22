<!DOCTYPE html>
<html lang="en">

<head>
  <title>Chartpedia</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
  <script src="https://kit.fontawesome.com/59a38f9bcb.js" crossorigin="anonymous"></script>
  <script src="https://www.gstatic.com/charts/loader.js"></script>
  <script src="https://www.google.com/jsapi"></script>
  <script src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
  <script src="../scripts/login.js">

  </script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css" />
  <link rel="stylesheet" href="../styles/styles.css">
  <style>
        /* Small devices (landscape phones) */
        @media (min-width: 576px) {
        }
        /* Medium devices (tablets) */
        @media (min-width: 768px) {
        }
        /* Large devices (desktops) */
        @media (min-width: 992px) {
        }
        /* Extra large devices (large desktops) */
        @media (min-width: 1200px) {
        }
        /* The given screen size or smaller */
        /* Extra small devices (portrait phones)*/
        @media (max-width: 575px) {
        }
        /* Small devices (landscape phones)*/
        @media (max-width: 767px) {}

        /* Medium devices (tablets)*/
        @media (max-width: 991px) {}

        /* Large devices (desktops)*/
        @media (max-width: 1199px) {}
    </style>
</head>
<body>
  <div>
    <div class="modal fade text-light" id="loginModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title">Login</h5>
            <button class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" class="form-control">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" class="form-control">
                <div class="invalid-feedback float-left">Username or password is wrong</div>
              </div>
          </div>
          <div class="modal-footer" id="loginFooter">
              <button class="btn btn-primary" onclick="logIntoSite();">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  

<div id="header" class="jumbotron">
  <h1>Chartpedia</h1>
  <h2 class="card-subtitle my-2 text-white-50" id="titlesubtitle">A thing being developed</h2>
</div>

<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
        <li class="nav-item">
          <a class="nav-link active text-white-50" href="comments.php">Comments</a>
        </li>
      </ul>
      <div>
          <button class="btn btn-dark mr-3" data-toggle="modal" data-target="#loginModal">Login</button>
      </div>
      <a href="https://github.com/Montori/chartpediaphp" class="fab fa-github text-light d-inline" title="Follow us on GitHub" style="text-decoration: none;"></a>
    </div>
  </nav>
</div>
