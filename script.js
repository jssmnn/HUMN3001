
let sky = document.getElementById("sky");
let ground = document.getElementById("ground");
let vineLarge = document.getElementById("vineFront");
let text = document.getElementById("text");
let clouds = document.getElementById("clouds");
let moon2 = document.getElementById("moon2");


window.addEventListener('scroll', function () {
    var value = window.scrollY;
    sky.style.top = -value * 0.2 + 'px';
    vineLarge.style.top = value * 1 + 'px';
    ground.style.top = value * 0.02 + 'px';
    clouds.style.left = value * -0.5 + 'px';
    moon2.style.top = value * -0.5 + 'px';

})
