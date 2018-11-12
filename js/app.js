/*Cat Clicker Project
  07/22/18


/*

// */
let catImg = document.getElementsByClassName('cat');
let countClicks = document.querySelector('.clicks');
let clicked = 0;
let catsName = document.querySelector('.catName');
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

/*The View:Display the cat name and image*/

for (let i = 0; i < cats.attributes.length; i++) {
    let catNameList = document.getElementById('catsNameList');
    let names = cats.attributes[i].name;
    let imgInput = cats.attributes[i].imgSrc;
    let list = document.createElement('li');
    list.textContent = names;
    catNameList.appendChild(list);
    list.addEventListener('click', ((cat) => {
        return () => {
            catsName.innerHTML = ` <p class="catsImgName">${cat}</p>
            <img class="cat" src="${imgInput}">`;

            /*Counter: Count the number of clicks given in the picture*/

            const catImages = [...catImg];
            for (let img of catImg) {
                img.addEventListener("click", () => {
                    clicked += 1;
                    countClicks.innerText = "You clicked the cat " + clicked;
                    console.log('you clicked it');
                });
            }

        };
    })(names));

};