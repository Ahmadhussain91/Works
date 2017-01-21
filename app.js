$(document).ready(function(){
    $("#food").click(function(){
        $(".drink").hide(2000);
        $(".food").show(2000);
    });
    $("#drink").click(function(){
        $(".food").hide(2000);
        $(".drink").show(2000);
    });
    $("#all").click(function(){
        $(".drink").show(2000);
        $(".food").show(2000);
    });
});

 $("#clk").click(function(){
        $("#p1").css("color", "skyblue").slideUp(2000).slideDown(2000);
    });

$( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );

$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );

$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

$('.parallax-window').parallax({imageSrc: 'images/parlx.jpg'});

$( function() {
    $( "#resizable" ).resizable({
      handles: "se"
    });
  } );

$( function() {
    var availableTags = [
      "Pizza",
      "Burger",
      "Wonton",
      "Fries",
      "Parmegiana",
      
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

('#par_').parallax("40%",0.4);

$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});