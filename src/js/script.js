
$ = require("jquery");

function init(){
  console.log("JQUery log");
  
  var logprova = "Log di prova";

  console.log(logprova);

  $('body').css("background-color", "black");
  

}

$(document).ready(init);