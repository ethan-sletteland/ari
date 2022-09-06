import { Nav } from "./Nav";

const navData = [
    {
        "year": "2022",
        "arts": [
            {"text": "qwerty 2022", "image": "img.jpg"},
            {"text": "bwerty 2022", "image": "img.jpg"},
            {"text": "twerty 2022", "image": "img.jpg"},
        ],
    },
    {
        "year": "2021",
        "arts": [
            {"text": "qwerty 2021", "image": "img.jpg"},
            {"text": "bwerty 2021", "image": "img.jpg"},
            {"text": "twerty 2021", "image": "img.jpg"},
        ],
    },
    {
        "year": "2020",
        "arts": [
            {"text": "qwerty 2020", "image": "img.jpg"},
            {"text": "bwerty 2020", "image": "img.jpg"},
            {"text": "twerty 2020", "image": "img.jpg"},
        ],
    },
]

window.nav = new Nav(navData)

const navs = document.getElementsByClassName('mobile-nav')

for (let i=0; i < navs.length; i++) {
    navs[i].onclick = function(){
        nav.toggle()
    }
}