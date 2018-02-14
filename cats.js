document.addEventListener("DOMContentLoaded", function() {

  var summoner = document.querySelector('.summon-cats');
  var div1 = document.querySelector('#cat1');

  summoner.addEventListener('click', function(e){

    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(responseData) {
        console.log(responseData);
        var img = document.createElement('img');
        img.src = responseData.cats[0].photo;
        img.alt = ('Photo of ' + responseData.cats[0].name);
        div1.append(img);
    })
  })



});


// Creates a new <img> tag
// Sets the src attribute of the <img> to the cat's photo
// Sets the alt attribute of the <img> to "Photo of (insert cat name here)"
// Inserts that <img> into one of the empty .cat-box divs
