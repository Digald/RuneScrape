$(document).ready(function() {
  // modal functionality
  $(".showModal").on("click", function(e) {
    e.preventDefault();
    // $(".modal").addClass("is-active");
    $(this)
      .parents(".new-article")
      .next(".modal")
      .addClass("is-active");
  });

  $(".modal-close").on("click", function(e) {
    e.preventDefault();
    // $(".modal").removeClass("is-active");
    $(this)
      .parents(".modal")
      .removeClass("is-active");
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

  $(".submit-comment").on("click", function(e) {
    e.preventDefault();
    var articleId = $(this).data("id");
    var userComment = $(this)
      .parents(".box")
      .find(".user-comment")
      .val();
    $.ajax({
      method: "POST",
      data: {
        id: articleId,
        note: userComment
      },
      url: "/addcomment"
    });
    $(this)
      .parents(".box")
      .find(".comment-list")
      .append(`<li>${userComment}</li>`);
    $(this)
      .parents(".box")
      .find(".user-comment")
      .val("");
  });
});
