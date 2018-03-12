/* jshint esversion: 6 */

let counter = 0;


$(document).ready(readyNow);

function readyNow () {
  engageClickHandlers();
}

function engageClickHandlers () {
  $('#generateButton').on('click', generateDiv);
  $('#targetDiv').on('click', '.swapButton', swapClicked);
  $('#targetDiv').on('click', '.deleteButton', deleteClicked);

}

function generateDiv () {
  counter++;
  console.log("generate clicked");
  let swapButton = '<button class="swapButton">Swap</button>';
  let deleteButton = '<button class="deleteButton">Delete</button>';
  $('#targetDiv').append('<div class="red"><p>'+ counter +
  '</p>'+ swapButton + deleteButton + '</div>');
}


function swapClicked () {
  ($(this).parent().toggleClass('highlight'));
}

function deleteClicked () {
  ($(this).parent().remove());

}
