/*Cat Clicker Project
  07/22/18


*/


/*

Button to clear
grid of squares

*/
let imgClicked= document.querySelector('img');
let countClicks=document.querySelector('.clicks');
let clicked=0;

imgClicked.addEventListener("click", function () {
  clicked+=clicked;
  countClicks.innerText="You clicked the cat "+clicked;

});


function makeGrid() {
  const inputHeight = $('#inputHeight').val();
  const inputWidth = $('#inputWidth').val();

  for (let rows = 1; rows <= inputHeight; ++rows) {
    $('#pixelCanvas').append($('<tr></tr>'));
    for (let columns = 1; columns <= inputWidth; ++columns) {
      $('tr').last().append($('<td></td>'));
    }
  }
}








/*To choose color to fill quares*/

