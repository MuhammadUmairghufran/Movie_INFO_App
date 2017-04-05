//  Document Ready --//
$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
         searchText = ($('#searchText').val());
         console.log(searchText);
  e.preventDefault();
});

});
function getMovies(searchText){

   console.log(searchText);

}


axios.get('www.omdbapi.com/
?s'+searchText)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
