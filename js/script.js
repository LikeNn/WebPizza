menu.onclick=function myFunction() {
    var x = document.getElementById('myTopnav');

    if(x.className === 'topnav') {
        x.className += ' responsive';
    }
    else {
        x.className = 'topnav';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider', {
      loop: true,
      autoplay: true,
      interval: 7000,
    });
  });
  

 