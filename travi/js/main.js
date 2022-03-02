document.addEventListener('DOMContentLoaded', () => {

  const navigation = () => {
    const open = document.querySelector('.header__hamburger')
    const nav = document.querySelector('.nav')
    const close = document.querySelector('.nav__close')
    open.addEventListener('click', () => {
      nav.classList.add('nav_active')
    })
    close.addEventListener('click', () => {
      nav.classList.remove('nav_active')
    })
  }
  navigation()

})