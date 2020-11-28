// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require jquery_ujs
//= require jquery.validate
//= require bootstrap-sprockets
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "150px";
  document.getElementById("main").style.marginLeft = "150px";
  document.getElementById("main_content").style.marginLeft = "150px";

}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main_content").style.marginLeft = "0";
}

function ToggleText(elem){
  $('#'+elem.id+"p").toggle();
}

function SetFontSize(val){
  $("*").each(function(i,e){e.style.fontSize = val});
}

function SetTableStyle(sty)
{
    if(sty === 'Plain'){
      $("td").removeClass("bright");
      $("td").addClass("plain");
    }
    else {
      $("td").removeClass("plain");
      $("td").addClass("bright");
    }
}

function SetPageStyle(val){

  if(val === 'Normal'){
    $("*").each(function(i,e){e.style.background = "white"});
    $("*").each(function(i,e){e.style.color = "black"});
  }
  else{
    $("*").each(function(i,e){e.style.background = "black"});
    $("*").each(function(i,e){e.style.color = "white"});
  }



}

$(document).ready(function() {

  if(document.getElementById('welcome_id')){
    $('#np, #tp').hide();
  }

  $('[data-js-hide-link]').click(function(event){
    $(this).parents('li').hide();
    event.preventDefault();
  });
});
