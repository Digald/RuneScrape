$(document).ready(function() {
  $(".save-article").on("click", function(e) {
    e.preventDefault();
    var articleId = $(this)
      .parents(".new-article")
      .data("id");
    $.ajax({
      method: "POST",
      data: {
        id: articleId
      },
      url: "/save"
    });
  });
});
