$(document).ready(function() {
  // modal functionality
  $(".showModal").click(function() {
    $(".modal").addClass("is-active");
  });

  $(".modal-close").click(function() {
    $(".modal").removeClass("is-active");
  });

  $(".unsave-article").on("click", function(e) {
    e.preventDefault();
    var articleId = $(this)
      .parents(".new-article")
      .data("id");
    $.ajax({
      method: "POST",
      data: {
        id: articleId
      },
      url: "/unsave"
    });
    $(this)
      .parents(".new-article")
      .remove();
  });

  $("#submit-comment").on("click", function(e) {
    e.preventDefault();
    var articleId = $(this)
      .parents(".field")
      .data("id");
    var userComment = $('#user-comment').val();
    $.ajax({
        method: 'POST',
        data: {
            id: articleId,
            note: userComment
        },
        url: '/addcomment'
    }).done(function(data){
        $('.comment-section ul').append(`<li>${userComment}</li>`);
    });
    $('#user-comment').val('');
  });
});
