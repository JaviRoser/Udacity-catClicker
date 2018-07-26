/*Cat Clicker Project
  07/22/18


/*

*/
let catImg = document.getElementsByClassName('cat');
let countClicks = document.querySelector('.clicks');
let clicked = 0;
let catsName = document.querySelector('.catName');
let cats = {
    names: ["Lion", "Puma", "Tiger", "Cheetah", "Panther"]
    // imgSrc=['c1.jpg','c2.jpg']

};






for (let i = 0; i < cats.names.length; i++) {
    let catNameList = document.getElementById('catsNameList');
    let names = cats.names[i];
    let list = document.createElement('li');
    list.textContent = names;

    catNameList.appendChild(list);

    list.addEventListener('click', ((cat) => {
        return () => {

            catsName.innerText = `${cat}`;


        };

    })(names));


}


let catImages = [...catImg];


for (let img of catImg) {
    img.addEventListener("click", () => {
        clicked += 1;
        // if (catImg)
        countClicks.innerText = "You clicked the cat " + clicked;
    });
}