$("#find-Card").on("click", function (event) {

  event.preventDefault();
  var Card = $("#Card-input").val();
  var queryURL = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/" + Card;
  $.ajax({
    type: "GET",
    url: queryURL,
    headers: {
      "X-RapidAPI-Key": "18b735587amsh7315eaf4c142799p15afbbjsn27f60752768d",
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com"
    }
  })


    .then(function (response) {

      var findCard = null;
      for (i=0; i<response.length; i++)
      {
        if(response[i].collectible == true) {
        findCard =  response[i].cardId;
        break;
        }
      }
      
    

      console.log(response);
  
      $("#title-view").prepend('<img src="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/' + findCard   + '.png">')
      
    })
})