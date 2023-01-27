const burger = document.querySelector('.menu-burger')
burger.addEventListener('click', e => {
  document.body.classList.toggle('menu-burger-open')
})
const menuFilter = document.querySelector('.goods-sort-menu')
const btnFilter = document.querySelector('.goods-sort-btn')
btnFilter.addEventListener('click', e => {
  menuFilter.classList.toggle('hidden')
  document.querySelector('.goods-delete').classList.toggle('delete')
})
menuFilter.addEventListener('click', e => {
  let textContent = document.querySelector('.goods-sort-input').textContent
  document.querySelector('.goods-sort-input').textContent = e.target.textContent
  e.target.textContent = textContent
}, false)
const goodsDelete = document.querySelector('.goods-delete')
const goodsCards = document.querySelector('.goods-cards.can-be-deleted')
goodsDelete.addEventListener('click', e => goodsCards.style.display = "none")