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
      console.log(response);
      cardImage = response[0].img;
      console.log(cardImage);
      cardName = response[0].name;
      console.log(cardName);

      $("#movies-view").append(cardName);

      if(cardImage)
      {
      $("#title-view").prepend('<img src="https://art.hearthstonejson.com/v1/render/latest/enUS/512x/' + response[0].cardId + '.png">')
      }


      cardType = response[0].type;
      console.log(cardType);
      cardFaction = response[0].faction;
      console.log(cardFaction);
      cardRarity = response[0].rarity;
      console.log(cardRarity);
      playerClass = response[0].playerClass;
      console.log(playerClass);
      artistName = response[0].artist;
      console.log(artistName);

      //  $("#card-image").attr(src, response.image);
      $("#card-name").html(response.name);
      $("#card-type").text(response.type);
      $("#card-faction").text(response.faction);
      $("#card-rarity").text(response.rarity);
      $("#player-class").text(response.playerClass);
      $("#artist-name").text(response.artist);
    })
})