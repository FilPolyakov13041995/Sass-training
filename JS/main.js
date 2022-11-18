const iconActive = document.querySelector('.fa-toggle-off');
const body = document.querySelector('body');
const photoOne = document.querySelector('.portfolio__flex-item-image');
const photoTwo = document.querySelector('.portfolio__flex-item-imageTwo');




iconActive.addEventListener('click', () => {
    iconActive.classList.toggle('fa-toggle-on');
    body.classList.toggle('night-theme');


    if(!photoOne.classList.contains('hide')) {
        photoOne.classList.add('hide');
        photoTwo.classList.remove('hide');
    } else {
        photoOne.classList.remove('hide');
        photoTwo.classList.add('hide');
    }


    
    
});




