const navbar = document.querySelector(".navbar");
const navbarOffSet =  navbar.offsetTop;
const sections = document.querySelectorAll("section");
const nabBarLinks = document.querySelectorAll(".navbar-link");

const progress = document.querySelector(".progress-bar-wrapper");
const percent = document.querySelectorAll(".progress-bar ")

const progreebarPersent = [10,40,50]





window.addEventListener("scroll", () => {
    // window.pageYOffset -> distance of page from top
    // navbar.offsetTop -> distance o nabar from the top
    // classList -> classes that the element contains
    // .ad add class to the classList
    // window.innerHeight  - > hiegth of the content
    if (window.pageYOffset >=navbarOffSet) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }

    sections.forEach((section , i)=>{
        if(window.pageYOffset>= section.offsetTop){
            nabBarLinks.forEach(link =>{
                link.classList.remove("change")
            })
            nabBarLinks[i].classList.add("change")
        }
    });

    if(window.pageYOffset+window.innerHeight >= progress.offsetTop){
        document.querySelectorAll(".progress-bar ").forEach((per , i)=>{
    per.style.width = `${progreebarPersent[i]}`
})

    }
});


// window.addEventListener("resize" , ()=>{
//     window.location.reload
// })