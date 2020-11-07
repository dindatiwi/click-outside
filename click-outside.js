const cardButtons = document.querySelectorAll('.card button')
const modalInner = document.querySelector('.modal-inner')
const modalOuter = document.querySelector('.modal-outer')

function clickHandlerClick(event){
    const button = event.currentTarget
    const card = button.closest('.card')
    const imgSrc = card.querySelector('img').src
    const desc = card.dataset.description
    const name = card.querySelector('h2')
    modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt="${name}" width="600" height="600">
    <p>${desc}</p>
    `
    modalOuter.classList.add('open')
}

function closeModal(){
    modalOuter.classList.remove('open')
}
cardButtons.forEach(button => button.addEventListener('click', clickHandlerClick))

modalOuter.addEventListener('click', function(event){
    const isOutside = !event.target.closest('.modal-inner')
    if(isOutside){
        closeModal()
    }
})

window.addEventListener('keydown', function(event){
    const isOutside = !event.target.closest('.modal-inner')
    if(isOutside){
        closeModal()
    }
})