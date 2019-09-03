(function ($, window, document, undefined) {
  'use strict';

  for (var i = 0; i < 50; i++) {
    var divsize = ((Math.random() * 100) + 35).toFixed();

    var dd = (Math.random() * (10 - 1)).toFixed() * .10;


    var div = $('<div data-depth="'+dd+'"/>').css({
      'width': divsize + 'px',
      'height': divsize + 'px'
    });

    var img = $('<div/>').css({
      'background-image': 'url(assets/images/' + (Math.random() * (13 - 2)).toFixed() + '.svg)',
      "transform": "rotate("+ (Math.random() * (180 - 1)).toFixed() +"deg)",
      "filter": "blur("+ (Math.random() * (divsize/3 - 5)).toFixed() +"px)"
    });

    img.appendTo(div);
    div.appendTo("#confetti_wrapper");
  }
  var scene = document.getElementById('confetti_wrapper');
  var parallaxInstance = new Parallax(scene);

  function place(){
    $("#confetti_wrapper").children().each(function(e, o){
      var divsize = $(this).height();
      var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
      var posy = (Math.random() * ($(document).height() - divsize)).toFixed();
      $(this).css({
        'position': 'absolute',
        'left': posx + 'px',
        'top': posy + 'px'
      });
    })
  }

  place();

  $(window).resize(function(){
    place();
  });




})(jQuery, window, document);




