
/*
var p = document.querySelector('#posicao');

posicoes = p.getBoundingClientRect();

console.log(posicoes);

*/

body.addEventListener('mousewheel', function() {
    scrollTop()

})

ll.addEventListener('click', function() {
    toTop()

})

function toTop() {
    if (window.scrollY >= 700) {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        }) 
            
    }
          
}

function scrollTop(goTop) {
if (window.scrollY > 700) {

    document.querySelector('#l').style.bottom = 0
    document.querySelector('#l').style.transition = 'all 1s'
    document.querySelector('#l').style.transform = 'translateY(0%)'

   

} else if (window.scrollY < 700) {
    
    document.querySelector('#l').style.transition = 'all 1s'
    document.querySelector('#l').style.transform = 'translateY(100%)'
}

setTimeout(() => {
    goTop
},1);

}

