const reviews = [
    {
        id : 1,
        img : "https://res.cloudinary.com/nseabasi/image/upload/v1597681093/ndise_nse_necdz2.jpg",
        author: "Jude Okpoyo",
        job: "Product Designer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eius inventore fuga adipisci tempore, quae corrupti? Perspiciatis vel molestiae repudiandae."
    },
    {
        id : 2,
        img : "https://res.cloudinary.com/nseabasi/image/upload/v1601838420/person3_dadetz.jpg",
        author: "AbasiAkara Obio",
        job: "Software Engineer",
        info: "impedit. Cum non eum sunt est eligendi, tempora incidunt voluptate sit ex veniam ad veritatis fuga beatae? Est, omnis.."
    },
    {
        id : 3,
        img : "https://res.cloudinary.com/nseabasi/image/upload/v1601838412/person2_swbmhc.jpg",
        author: "Obong Ofon y'Owo",
        job: "Software Engineer",
        info: "And I realised that I needed to give 20 hours out of 24 to learning this. Look at it this way, how would you master without practice, truth be told, it could be pretty tough. What's your excuse? Humans are built to overcome very challenge"
    },
    {
        id : 4,
        img : "https://res.cloudinary.com/nseabasi/image/upload/v1601837601/person1_cymvx5.jpg",
        author: "Etoro Obong Mfon",
        job: "Software Engineer",
        info: "My friend also has a story to tell. No one had sleeping. You must wake and ensure you give it the time and work it needs. Success story is, no hardwork goes unrewarded."
    }
]

const img = document.querySelector("#person")
const author = document.querySelector("#author")
const job = document.querySelector("#job")
const info = document.querySelector("#info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

const randomBtn = document.querySelector(".random-btn")

let currentItem = 0

window.addEventListener("DOMContentLoaded", ()=>{
    showItem()
})

function showItem (){
  const item = reviews[currentItem]
  img.src = item.img
  author.innerHTML = item.author
  job.innerHTML = item.job
  info.innerHTML = item.info

}

nextBtn.addEventListener("click", ()=>{
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showItem()
})

prevBtn.addEventListener("click", ()=>{
    currentItem--
    if( currentItem < 0){
        currentItem = reviews.length - 1
    }
    showItem()
})

randomBtn.addEventListener('click', ()=>{
    currentItem = Math.floor(Math.random() * reviews.length)
    showItem()
})