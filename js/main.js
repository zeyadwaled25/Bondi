function handleMenuClick(event) {
  let menuItems = document.querySelectorAll('.list-of-work li');
  menuItems.forEach(item => {
    item.classList.remove('btn-danger');
  });
  
  event.target.classList.add('btn-danger');
}

let menuItems = document.querySelectorAll('.list-of-work li');
menuItems.forEach(item => {
  item.addEventListener('click', handleMenuClick);
});