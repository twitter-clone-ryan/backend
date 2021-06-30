let timer;

$("#searchBox").keydown((event) => {
  clearTimeout(timer);
  const textbox = $(event.target);
  let value = textbox.val();
  const searchType = textbox.data().search;

  timer = setTimeout(() => {
    value = textbox.val().trim();

    if (value == "") {
      $(".resultsContainer").html("");
    } else {
      search(value, searchType);
    }
  }, 1000);
});

function search(searchTerm, searchType) {
  const url = searchType == "users" ? "/api/users" : "/api/posts";

  $.get(url, { search: searchTerm }, (results) => {
    console.log(results);
  });
}