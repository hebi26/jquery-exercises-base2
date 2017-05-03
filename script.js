$(function(){

//--------------EXO 1----------------------//

  $("#btn").click(function(){
    alert("On vous ferait vraiment faire n\'importe quoi !");
  });

//---------------EXO 2----------------------//


$(".tigre").dblclick(function(){
  $(".tigre").css("width", "1735px");
});

//---------------EXO 3-----------------------//

$("#exo3").hover(function(){
  $("#exo3").css({
    "background-color" : "#63A8BC",
    "color" : "#fff",
    "width" : "450px",
    "height" : "370px",
    "font-size" : "20px"
    });
  });

//-----------------EXO 4---------------------------------------//

// $("#btn1").click(function(){
//   $("#exo4").css({"color" : "green", "border-color" : "green"});
// });
// $("#btn2").click(function(){
//   $("#exo4").css({"color" : "blue", "border-color" : "blue"});
// });
// $("#btn3").click(function(){
//   $("#exo4").css({"color" : "red", "border-color" : "red"});
// });


$(".bt4").click(function(){
var color = $(this).css("background-color");
  $("#exo4").css({"color": color, "border-color": color});
  });

//-----------------EXO 5----------------------------//

  $("input").focus(function(){
    $(this).css({"border" : "1px solid green"});
  });
  $("input").focusout(function(){
    $(this).css({"border" : "1px solid red"});
  });

//------------------EXO 6----------------------//

  // $("#btn4").mouseenter(function(){
  //   $("#exo6").css({"color" : "green"});
  // });
  // $("#btn4").mouseleave(function(){
  //   $("#exo6").css({"color" : "black"});
  // });
  //
  //
  // $("#btn5").mouseenter(function(){
  //   $("#exo6").css({"color" : "blue"});
  // });
  // $("#btn5").mouseleave(function(){
  //   $("#exo6").css({"color" : "black"});
  // });
  //
  //
  // $("#btn6").mouseenter(function(){
  //   $("#exo6").css({"color" : "red"});
  // });
  // $("#btn6").mouseleave(function(){
  //   $("#exo6").css({"color" : "black"});
  // });

var colorinit = $("#exo6").css("color");
$(".bt6").mouseenter(function(){
  var colorf = $(this).css("background-color");

  $("#exo6").css("color", colorf);
  });

$(".bt6").mouseleave(function(){
  $("#exo6").css("color", colorinit);
  });

});
