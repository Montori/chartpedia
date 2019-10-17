<?php include 'header.php'; ?>

<script type="text/javascript" src="../scripts/cpuScript.js"></script>
<script type="text/javascript" src="../scripts/graphDetector.js"></script>

<body>
<script type="text/javascript" src="https://threejs.org/build/three.js"></script>
<div class="container-fluid" id='content-container'>
  <div class="row">
    <div class="col-sm-3">
      <div class="container">
        <div class="card bg-dark text-light">
          <div class="card-body">
            <h2 class="card-title">Filter</h2>
            <form>
              <label for="daterangeInput">Date</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                </div>
                <input class="form-control disable" id="date" name="date" placeholder="MM-DD" type="text" value="10-18"/>
              </div>
              <script>
                  $(document).ready(function(){
                    var date_input=$('input[name="date"]'); //our date input has the name "date"
                    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
                    var options={
                      format: 'mm-dd',
                      container: container,
                      todayHighlight: true,
                      autoclose: true,
                    };
                    date_input.datepicker(options);
                  })
                  .on('show', function() {
                      // remove the year from the date title before the datepicker show
                      var dateText  = $(".datepicker-days .datepicker-switch").text();
                      var dateTitle = dateText.replace(/[0-9]/g, '');
                      $(".datepicker-days .datepicker-switch").text(dateTitle);
                  });
              </script>
              <div class=" float-right">
                <button class="btn btn-primary" id="btnC" type="button">Submit</button>
              </div>
              <script>jQuery(function(){jQuery('.btn').click();});</script>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-9" id="charts">
      <div class="card bg-dark text-light">
        <div class="card-body">
          <h2 class="card-title">CPU-Temperature</h2>
          <div id="cpu-chart"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</body>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/css/bootstrap-datepicker3.css"/>

<link rel="stylesheet" href="../styles/styles.css">


</html>
