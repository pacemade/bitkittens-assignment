document.addEventListener("DOMContentLoaded", function() {

  var summoner = document.querySelector('.summon-cats');
  var div1 = document.querySelector('#cat1');
  var catBoxes = document.querySelectorAll('.cat-box')

  summoner.addEventListener('click', function(e){

    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(responseData) {
        console.log(responseData);
        catBoxes.forEach(function(catbox){
          catbox.innerHTML = '';
        })


        for (var i = 0; i < responseData.cats.length; i++) {
          var kittyPic = document.createElement('img');
          kittyPic.src = responseData.cats[i].photo;
          kittyPic.alt = ('Photo of ' + responseData.cats[i].name);
          console.log(kittyPic);
          catBoxes[i].append(kittyPic);
        }




        // div1.append(kittyPic);
    })
  })



});


// Creates a new <img> tag
// Sets the src attribute of the <img> to the cat's photo
// Sets the alt attribute of the <img> to "Photo of (insert cat name here)"
// Inserts that <img> into one of the empty .cat-box divs
