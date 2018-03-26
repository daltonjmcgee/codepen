function searchWikipedia(){
  document.getElementById("search_results").innerHTML = "";
  var searchInput = document.getElementsByName("search_input")[0].value;
    $.getJSON(("https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&prop=info&inprop=url&origin=*&srsearch="+searchInput),function(data){
      console.log(data);
      data.query.search.forEach(function(val){
        var url = encodeURIComponent(val.title)
        document.getElementById("search_results").insertAdjacentHTML("beforeEnd",
        `<a target="_blank" href="https://wikipedia.org/wiki/${url}"><div class="result">
          <h3>${val.title}</h3>
          <p>${val.snippet}...</p>
          </div></a>`)
     })
    })
}
