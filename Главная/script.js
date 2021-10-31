const openPopUp = document.getElementById('open__pop_up');
const closePopUp = document.getElementById('pop__up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(p){
   p.preventDefault();
   popUp.classList.add('active');
})
closePopUp.addEventListener('click', () => {
   popUp.classList.remove('active');
})