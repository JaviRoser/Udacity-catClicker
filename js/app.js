/*Cat Clicker Project
  07/22/18


*/


/*

Button to clear
grid of squares

*/
let catImg= document.getElementsByClassName('cat');
let countClicks=document.querySelector('.clicks');
let clicked=0;
let catsName=document.querySelector('.catName');
let cats={
  names:["javi1", "javi2"]


};

// for (name of cats.names ){

// catsName.innerText=cats.names[name];

// +=1;

// }


// console.log(cats[0].names);



let catImages=[...catImg];


for(let img of catImg){
  img.addEventListener("click",  ()=> {
   clicked+=1;
   // if (catImg)
  countClicks.innerText="You clicked the cat "+clicked;
 
});



}


// function makeGrid() {
//   const inputHeight = $('#inputHeight').val();
//   const inputWidth = $('#inputWidth').val();

//   for (let rows = 1; rows <= inputHeight; ++rows) {
//     $('#pixelCanvas').append($('<tr></tr>'));
//     for (let columns = 1; columns <= inputWidth; ++columns) {
//       $('tr').last().append($('<td></td>'));
//     }
//   }
// }








/*To choose color to fill quares*/

