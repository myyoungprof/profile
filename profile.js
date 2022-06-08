const works = [
    {
        id: "1",
        name: "Shonde Hope",
        job: "Web developer/Blogger",
        img: "./hoas.jpg",
        info: "Shonde hope olawale is a 300l student of the university of portharcourt, a blogger and also a fontend developer, he has been a great writer and has work for different company like Opera News and Scooper News, he is the person behind this great work"
    },
    { 
        id: "2",
        name: "Blessed Shonde",
        job: "Reseacher in lab/ Teacher",
        img: "./big bro.jpg",
        info: "Shonde Blessed is a first class student of the university of ibadan,from the deparnment of industral chmistry, he is a great reseracher in science he has been into greeat reserch for over 4 years now"
    },

    {
        id: "3",
        name: "Shonde Grace",
        job: "Caterer/Marketer/Promoter",
        img: "./nike.jpg",
        info: "Shonde Grace is a chef with over 3 year of experince, she is currently a student of the university of portharcourt, an ex student of portharcourt polo tech",
    },

    {
        id: "4",
        name: "Daniel Denebari",
        job: "FX trader/ medical student",
        img: "./daniel.jpg",
        info: "Daniel Denebari is a 400l student of the university of portharcourt, he is a popular forex trader in the university of portharcourt, he has many student and he is a member of SCM (student christain movernment fellowship, and he is their prayer sec",
    },

    {
        id: "5",
        name: "Sharon cute",
        job: "Affiliate Marketer/Singer",
        img: "./secondImage.jpg",
        info: "Sharon Cute is a foreign language student of the university of portharcourt, she is very good in speaking language like french very well as a result of were she was born, she was born in Gomber easter part of African, she is a afiliate makerter",
    },
]


const name = document.getElementById("name");
const job = document.getElementById("job");
const img = document.getElementById("img");
const info = document.getElementById("info");


const left = document.getElementById("left");
const right = document.getElementById("right");
const random = document.getElementById("random");

let currentItem = 0;

window.addEventListener ( "DOMContentLoaded", function(){
showPerson()
});

function showPerson(){
const book = works[currentItem];
img.src = book.img;
name.textContent = book.name;
job.textContent = book.job;
info.textContent = book.info;
}

left.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = works.length - 1;
    }
    showPerson();
});

right.addEventListener("click", function(){
    currentItem++;
    if(currentItem > works.length - 1){
        currentItem = 0;
    }
    showPerson();
});

random.addEventListener("click", function(){
    currentItem = Math.floor(Math.random()*works.length);
    showPerson()

});


