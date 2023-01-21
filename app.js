const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}
hideTabContent()

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}
showTabContent()


let c=0
function autoSlider(){
    setInterval(()=>{
        if (c===4){c=0}
        hideTabContent()
        showTabContent(c)
        c++

    },1500)
}
autoSlider()


tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
                c=i
            }
        })
    }
}




const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

modal.onclick = (event) => event.target === modal ? closeModal() : false
window.onkeydown = (event) => event.code === 'Backspace' ? closeModal() : false

window.addEventListener('scroll', event => {
    if (scrollY + innerHeight === document.body.scrollHeight) {
        openModal()
    }
})







