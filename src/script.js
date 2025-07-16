let btnMenu = document.querySelector('#ham-menu');
let menu = document.querySelector('#menu');
let span1 = document.querySelector('#span1');
let span2 = document.querySelector('#span2');
let span3 = document.querySelector('#span3');


function tog(){

        menu.classList.toggle('hidden');
        menu.classList.toggle('open-menu');
    menu.classList.toggle('flex');
    span1.classList.toggle('exit1');
     span2.classList.toggle('exit2');
 span3.classList.toggle('exit3');   
    menu.addEventListener("click",function(){


        menu.classList.toggle('hidden');
        menu.classList.toggle('flex');
    });

}

btnMenu.addEventListener('click',tog);