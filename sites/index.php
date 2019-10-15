<?php include 'database/databaseConnection.php'; ?>
<?php include 'header.php'; ?>
<!-- Das ist der Main Body Container, hier kommt der ganze Content hin -->

<body>
  <script type="text/javascript" src="https://threejs.org/build/three.js"></script>
  <script src="../scripts/drei.js"></script>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card text-center bg-dark text-light">
          <div class="card-body text-left">
            <h3 class="card-title text-center">About</h3>
            <p class="card-text text-center">
              This Project was created as a task within an internship at the Kehtna KHK.
              <br>
              The internship is part of a student exchange program called Erasmus+,
              which allows students to visit another country in the EU for a period of time,
              live there and work there. For Malte Bohn and me, Daniel Hartung, this exchange took place
              in Kehtna, Estonia. This website is one of our tasks we have in our internship, it shows
              charts of temperature, humidity and CPU-temperature measurements.
            </p>
            <br>
            <h5 class="text-center">For this Project we used:</h5>
            <div class="text-center">
              <ul>
                <li>html / css</li>
                <li>JavaScript / php</li>
                <li>Bootstrap</li>
                <li>Google Charts</li>
                <li>Ajax</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <div class="card bg-dark text-light">
          <div class="card-body">
            <h3 class="card-title">Malte Bohn</h3>
            <h6 class="card-subtitle mb-2 text-muted">Profile</h6>
            <p class="card-text">About me</p>
            <h5 class="card-title">Follow me</h5>
            <div>
              <a href="https://github.com/Montori" class="fab fa-github text-light d-inline" target="_blank" style="text-decoration: none;"></a>
              <a href="#" class="fab fa-linkedin" target="_blank" style="text-decoration: none;"></a>
              <a href="#" class="fab fa-twitter" target="_blank" style="text-decoration: none;"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card bg-dark text-light">
          <div class="card-body">
            <h3 class="card-title">Daniel Hartung</h3>
            <h6 class="card-subtitle mb-2 text-muted">Profile</h6>
            <p class="card-text">About me</p>
            <h5 class="card-title">Follow me</h5>
            <div>
              <a href="https://github.com/Gencreezo" class="fab fa-github text-light d-inline" target="_blank" style="text-decoration: none;"></a>
              <a href="#" class="fab fa-linkedin" target="_blank" style="text-decoration: none;"></a>
              <a href="#" class="fab fa-twitter" target="_blank" style="text-decoration: none;"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <script>
        init();
        animate();
      </script>
    </div>
</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
<script src="scripts/dataGetter.js"></script>

<link rel="stylesheet" href="../styles/styles.css">

</html>
