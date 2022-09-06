const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

//open modal
const aboutMeButton = document.getElementById('about-me-button')

aboutMeButton.addEventListener('click', () =>{
    document.querySelector('.bg-modal').style.display = 'flex'
})

document.querySelector('.close').addEventListener('click', () =>{
    document.querySelector('.bg-modal').style.display = 'none'
})

