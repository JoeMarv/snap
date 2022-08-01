const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector('.close-btn')
const expands = document.querySelectorAll('.menu-expand')

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('open')
})

closeBtn.addEventListener('click', function() {
    menu.classList.toggle('open')
})

expands.forEach(function(expand) {
    expand.addEventListener('click', function(e) {
        const main = e.currentTarget.parentElement

        main.classList.toggle('down')
    })
}) 