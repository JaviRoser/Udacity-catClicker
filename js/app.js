/*Cat Clicker Project
  07/22/18

 */
let catsName = document.querySelector('.catName');
let catImg = document.getElementsByClassName('cat');
let countClicks = document.querySelector('.clicks');
let clicked = 0;
let catImages = [...catImg];

// let imgSrcHTML = document.querySelector('.cat');
let cats = {
    attributes: [{
            name: 'Lion',
            imgSrc: "img/c1.jpg",
            imgAttr: "sitting cat looking to the left"
        },
        {
            name: "Puma",
            imgSrc: "img/c2.jpg",
            imgAttr: "sitting cat looking to the left"
        },


        {
            name: "Tiger",
            imgSrc: "img/c3.jpg",
            imgAttr: "sitting cat looking to the left"
        },


        {
            name: "Cheetah",
            imgSrc: "img/c4.jpg",
            imgAttr: "sitting cat looking to the left"
        },
        {
            name: "Panther",
            imgSrc: "img/c5.jpg",
            imgAttr: "sitting cat looking to the left"
        }
    ]

};

<<<<<<< HEAD

||||||| merged common ancestors




=======
>>>>>>> imgChange
for (let i = 0; i < cats.attributes.length; i++) {
    let catNameList = document.getElementById('catsNameList');
    let names = cats.attributes[i].name;
    let imgInput = cats.attributes[i].imgSrc;
    let list = document.createElement('li');

    // let imgInput=` < src=${img} alt="${attr}">`;
    list.textContent = names;
    catNameList.appendChild(list);
    list.addEventListener('click', ((cat) => {
        return () => {
<<<<<<< HEAD
            catsName.innerText = `${cat}`;
            catsName.innerHTML = `<img class="cat" src="${imgInput}"`;
            // console.log(`${cat}`);
            // console.log(catsName.innerHTML = `<img class="cat" src="${imgInput}"`);
        }

||||||| merged common ancestors
            catsName.innerHTML = `<img class="cat" src="${imgInput}"`;
            catsName.innerText = `${cat}`;
            console.log(catsName.innerHTML = `<img class="cat" src="${imgInput}"`);


        };

=======
            catsName.innerHTML = ` <p class="catsImgName">${cat}</p>
            <img class="cat" src="${imgInput}">`;
        };
>>>>>>> imgChange
    })(names));
<<<<<<< HEAD

||||||| merged common ancestors


=======
>>>>>>> imgChange
};

// let catImages = [...catImg];

<<<<<<< HEAD
// for (let img of catImg) {
//     img.addEventListener("click", () => {
//         clicked += 1;
//         // if (catImg)
//         countClicks.innerText = "You clicked the cat " + clicked;
//     });
// }
||||||| merged common ancestors
let catImages = [...catImg];


for (let img of catImg) {
    img.addEventListener("click", () => {
        clicked += 1;
        // if (catImg)
        countClicks.innerText = "You clicked the cat " + clicked;
    });
}
=======


for (let img of catImg) {
    img.addEventListener("click", () => {
        clicked += 1;
        // if (catImg)
        countClicks.innerText = "You clicked the cat " + clicked;
    });
}
>>>>>>> imgChange
