<?php include 'header.php'; ?>

<div class="container">
  <div class="card bg-dark text-light">
    <div class="card-body">
      <h2 class="card-title">Leave a comment</h2>
        <div class="form-group">
          <label for="usernameInput" class="text-white">Name:</label>
          <input type="input" class="form-control bg-secondary text-white" id="usernameInput" placeholder="Name">
          <div class="invalid-feedback">min. 3 characters.</div>
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="form-group">
          <label for="commentText" class="text-white">Comment:</label>
          <textarea class="form-control bg-secondary text-white" id="commentText" rows="5" placeholder="A wonderful comment..."></textarea>
          <div class="invalid-feedback">min. 20 characters.</div>
          <div class="valid-feedback">Looks good!</div>
        </div>
        <button class="btn btn-primary float-right" onclick="submitComment();" id="commit">
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" id="loadingPanel" style="display: none;"></span>
          Submit
        </button>
    </div>
  </div>
</div>
<div class="container" id="comment-container">

</div>
    <div class="container mt-3" id="pagination">
      <nav>
        <ul class="pagination justify-content-center" id="paginationUl">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <script src="../scripts/comments.js" type="text/javascript">
            createPagination();
          </script>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

<script src="../scripts/comments.js"></script>
