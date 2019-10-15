<?php include 'header.php'; ?>

<body>
<div class="container-fluid" id='content-container'>
  <div class="row">
    <div class="col-sm-3">
      <div class="container">
        <div class="card bg-dark text-light">
          <div class="card-body">
            <h2 class="card-title">Filter</h2>
            <form>
              <label for="daterangeInput">Period</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                </div>
                <input class="form-control disable" id="date" name="date" placeholder="YYYY-MM-DD" type="text" value="2016-05-29"/>
              </div>
              <script>
                  $(document).ready(function(){
                    var date_input=$('input[name="date"]'); //our date input has the name "date"
                    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
                    var options={
                      format: 'yyyy-mm-dd',
                      container: container,
                      todayHighlight: true,
                      autoclose: true,
                    };
                    date_input.datepicker(options);
                  })
              </script>
              <div class="radio-btns">
                <div class="custom-control custom-radio custom-control-inline radio-buttons" id="radioInOut">
                  <input type="radio" id="radioInside" name="radioInlineInOut" class="custom-control-input" checked="checked" value="TOAS">
                  <label class="custom-control-label" for="radioInside">Inside</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="radioOutside" name="radioInlineInOut" class="custom-control-input" value="ÕUES">
                  <label class="custom-control-label" for="radioOutside">Outside</label>
                </div>
              </div>
              <div>
                <div class="custom-control custom-radio custom-control-inline radio-buttons">
                  <input type="radio" id="radioWest" name="radioInlineWE" class="custom-control-input" checked="checked" value="west">
                  <label class="custom-control-label" for="radioWest">West</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="radioEast" name="radioInlineWE" class="custom-control-input" value="east">
                  <label class="custom-control-label" for="radioEast">East</label>
                </div>
              </div>
              <div class=" float-sm-right">
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
          <h2 class="card-title">Temperature</h2>
          <div id="temp-chart"></div>
        </div>
      </div>
      <div class="card bg-dark text-light">
        <div class="card-body">
          <h2 class="card-title">Humidity</h2>
          <div id="hum-chart"></div>
        </div>
      </div>
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
