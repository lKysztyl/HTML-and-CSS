


icroMenu.addEventListener('touchend', function () {
    document.querySelector('#bar001').style.transform = 'rotate(45deg)', 'translate(-5px, -5px)'
    
})


icroMenu.addEventListener('touchend', function () {



     document.querySelector('#bar001').style.position = 'absolute'
     document.querySelector('#bar003').style.position = 'absolute'

     document.querySelector('#bar001').style.top = '-0.2%'
     document.querySelector('#bar003').style.top = '3.3%'

     document.querySelector('#bar001').style.left = '4.2%'
     document.querySelector('#bar003').style.left = '4.5%'

     document.querySelector('#bar001').style.rotate = '-45deg'
     document.querySelector('#bar002').style.display = 'none'
     document.querySelector('#bar003').style.rotate = '45deg'

     document.querySelector('#bar001').style.transform = 'translate(-50%)'
     document.querySelector('#bar003').style.transform = 'translate(-50%)'

     document.querySelector('#bar001').style.transition = 'all 1s'
     document.querySelector('#bar003').style.transition = 'all 1s'
     
})