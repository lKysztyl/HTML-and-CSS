

const menuMobile = document.createElement('div');
menuMobile.classList.add('menu-mobile');
menuMobile.setAttribute('id', 'menuMobile');

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.classList.add('check');

const  menuMobile02 = menuMobile.firstChild;

menuMobile.insertBefore(checkbox, menuMobile02);

const menuBar =  document.createElement('div');

const bars = ['div', 'div', 'div']
bars.forEach(function () {
    const menuBar =  document.createElement('div');
    menuBar.classList.add('menu-bar');
    menuMobile.appendChild(menuBar);
});

const icon = menu.firstChild;

menuMobile.appendChild(menuBar);
menu.insertBefore(menuMobile, icon);

/*                           lateral-menu                        */

const lateralMenu = document.createElement('nav');
lateralMenu.classList.add('lateral-menu');
menuMobile.appendChild(lateralMenu);

for (let i = 0; i < 5 ; i++) {
    const a = document.createElement('a');
a.classList.add('lateral-menu-a');    
lateralMenu.appendChild(a);

const li = document.createElement('li');
li.classList.add('lateral-menu-li');
li.setAttribute('id', 'lateral-menu-li' + i);
a.appendChild(li);

}






/************************** Main Carrosel***********************/

function carrosel() {

  function r(min, max) {
      const one = 1
      const twentyFive = 10
        return Math.floor(Math.random() * (twentyFive - one + 1)) + one;
      }
      
      var r1 = r()
      var r2 = r()
      var r3 = r()
      var r4 = r()
      var r5 = r()
  
  
      
  
   while (r1 === r2 || r1 === r3 || r1 === r4 || r1 === r5) {
      r1 = r()
   }
  
   while (r2 === r3 || r2 === r4 || r2 === r5 || r2 === r1) {
      r2 = r()
   }
  
   while (r3 === r4 || r3 === r5 || r3 === r1 || r3 === r2) {
      r3 = r()
   }
  
   while (r4 === r5 || r4 === r1 || r4 === r2 || r4 === r3) {
      r4 = r()
   }
  
   while (r5 === r1 || r5 === r2 || r5 === r3 || r5 === r4) {
      r5 = r()
   }
  
  
        const year = true
        if (year == true) {
           sw1(), sw2(), sw3(), sw4(), sw5()
        }
  
   function sw1() {
      switch (r1) {
          case 1:
              img01.innerHTML = '<img src="../img/pizza/00012-288645902-pizza, only_pizza, realistic,.png">'
              break;
  
          case 2:
              img01.innerHTML = '<img src=".">'
              break;
              
          case 3:
              img01.innerHTML = '<img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80">'
              break;
      
          case 4:
              img01.innerHTML = '<img src="https://wallpaperboat.com/wp-content/uploads/2020/08/13/52628/pizza-28.jpg">'
              break;
      
          case 5:
              img01.innerHTML = '<img src="https://cdn.fansshare.com/photograph/italianpizza/tasty-pizza-wallpaper-hd-wallpapers-wallpaper-1750945969.jpg">'
              break;
  
          case 6:
              img01.innerHTML = '<img src="../img/hamburguer/pexels-photo-14710227.jpeg">'
              break;
  
          case 7:
              img01.innerHTML = '<img src="../img/hamburguer/pexels-photo-15141034.jpeg">'
              break;
  
          case 8:
              img01.innerHTML = '<img src="../img/hamburguer/pexels-photo-2983101.jpeg">'
              break;
  
          case 9:
              img01.innerHTML = '<img src="../img/hamburguer/pexels-photo-3738755.jpeg">'
              break;
  
          case 10:
              img01.innerHTML = '<img src="../img/hamburguer/pexels-photo-8305746.jpeg">'
              break;
     
  
      
          default:
              img01.innerHTML = 'Error: Unknown'
              break;
      }
  
    }
  
    function sw2() {
      switch (r2) {
          case 1:
              img02.innerHTML = '<img src="https://images4.alphacoders.com/276/276908.jpg">'
              break;
  
          case 2:
              img02.innerHTML = '<img src="https://images3.alphacoders.com/104/1041781.jpg">'
              break;
              
          case 3:
              img02.innerHTML = '<img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80">'
              break;
      
          case 4:
              img02.innerHTML = '<img src="https://wallpaperboat.com/wp-content/uploads/2020/08/13/52628/pizza-28.jpg">'
              break;
      
          case 5:
              img02.innerHTML = '<img src="https://cdn.fansshare.com/photograph/italianpizza/tasty-pizza-wallpaper-hd-wallpapers-wallpaper-1750945969.jpg">'
              break;
  
          case 6:
              img02.innerHTML = '<img src="../img/hamburguer/pexels-photo-14710227.jpeg">'
              break;
      
          case 7:
              img02.innerHTML = '<img src="../img/hamburguer/pexels-photo-15141034.jpeg">'
              break;
      
          case 8:
              img02.innerHTML = '<img src="../img/hamburguer/pexels-photo-2983101.jpeg">'
              break;
      
          case 9:
              img02.innerHTML = '<img src="../img/hamburguer/pexels-photo-3738755.jpeg">'
              break;
      
          case 10:
              img02.innerHTML = '<img src="../img/hamburguer/pexels-photo-8305746.jpeg">'
              break;
  
          default:
              img02.innerHTML = 'Error: Unknown'
              break;
      }
  
    }
  
    function sw3() {
      switch (r3) {
          case 1:
              img03.innerHTML = '<img src="https://images4.alphacoders.com/276/276908.jpg">'
              break;
  
          case 2:
              img03.innerHTML = '<img src="https://images3.alphacoders.com/104/1041781.jpg">'
              break;
              
          case 3:
              img03.innerHTML = '<img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80">'
              break;
      
          case 4:
              img03.innerHTML = '<img src="https://wallpaperboat.com/wp-content/uploads/2020/08/13/52628/pizza-28.jpg">'
              break;
      
          case 5:
              img03.innerHTML = '<img src="https://cdn.fansshare.com/photograph/italianpizza/tasty-pizza-wallpaper-hd-wallpapers-wallpaper-1750945969.jpg">'
              break;
  
          case 6:
              img03.innerHTML = '<img src="../img/hamburguer/pexels-photo-14710227.jpeg">'
              break;
      
          case 7:
              img03.innerHTML = '<img src="../img/hamburguer/pexels-photo-15141034.jpeg">'
              break;
      
          case 8:
              img03.innerHTML = '<img src="../img/hamburguer/pexels-photo-2983101.jpeg">'
              break;
      
          case 9:
              img03.innerHTML = '<img src="../img/hamburguer/pexels-photo-3738755.jpeg">'
              break;
      
          case 10:
              img03.innerHTML = '<img src="../img/hamburguer/pexels-photo-8305746.jpeg">'
              break;
  
          default:
              img03.innerHTML = 'Error: Unknown'
              break;
      }
  
    }
  
    function sw4() { 
      switch (r4) {
          case 1:
              img04.innerHTML = '<img src="https://images4.alphacoders.com/276/276908.jpg">'
              break;
  
          case 2:
              img04.innerHTML = '<img src="https://images3.alphacoders.com/104/1041781.jpg">'
              break;
              
          case 3:
              img04.innerHTML = '<img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80">'
              break;
      
          case 4:
              img04.innerHTML = '<img src="https://wallpaperboat.com/wp-content/uploads/2020/08/13/52628/pizza-28.jpg">'
              break;
      
          case 5:
              img04.innerHTML = '<img src="https://cdn.fansshare.com/photograph/italianpizza/tasty-pizza-wallpaper-hd-wallpapers-wallpaper-1750945969.jpg">'
              break;
  
          case 6:
              img04.innerHTML = '<img src="../img/hamburguer/pexels-photo-14710227.jpeg">'
              break;
      
          case 7:
              img04.innerHTML = '<img src="../img/hamburguer/pexels-photo-15141034.jpeg">'
              break;
      
          case 8:
              img04.innerHTML = '<img src="../img/hamburguer/pexels-photo-2983101.jpeg">'
              break;
      
          case 9:
              img04.innerHTML = '<img src="../img/hamburguer/pexels-photo-3738755.jpeg">'
              break;
      
          case 10:
              img04.innerHTML = '<img src="../img/hamburguer/pexels-photo-8305746.jpeg">'
              break;
      
          default:
              img04.innerHTML = '<img src="https://i.stack.imgur.com/GVDIS.png">'
              break;
      }
  
    }
  
    function sw5() {
      switch (r5) {
          case 1:
              img05.innerHTML = '<img src="https://images4.alphacoders.com/276/276908.jpg">'
              break;
  
          case 2:
              img05.innerHTML = '<img src="https://images3.alphacoders.com/104/1041781.jpg">'
              break;
              
          case 3:
              img05.innerHTML = '<img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80">'
              break;
      
          case 4:
              img05.innerHTML = '<img src="https://wallpaperboat.com/wp-content/uploads/2020/08/13/52628/pizza-28.jpg">'
              break;
      
          case 5:
              img05.innerHTML = '<img src="https://cdn.fansshare.com/photograph/italianpizza/tasty-pizza-wallpaper-hd-wallpapers-wallpaper-1750945969.jpg">'
              break;
  
          case 6:
              img05.innerHTML = '<img src="../img/hamburguer/pexels-photo-14710227.jpeg">'
              break;
      
          case 7:
              img05.innerHTML = '<img src="../img/hamburguer/pexels-photo-15141034.jpeg">'
              break;
      
          case 8:
              img05.innerHTML = '<img src="../img/hamburguer/pexels-photo-2983101.jpeg">'
              break;
      
          case 9:
              img05.innerHTML = '<img src="../img/hamburguer/pexels-photo-3738755.jpeg">'
               break;
      
          case 10:
              img05.innerHTML = '<img src="../img/hamburguer/pexels-photo-8305746.jpeg">'
              break;
      
          default:
              img05.innerHTML = 'Error: Unknown'
              break;
      }
  
    }
  
  
  
  
  
  
    }
  
    
function slideInterval() {
    const date = new Date();
    const seconds = date.getSeconds();

    if (seconds >= 0 && seconds <= 9) {
        document.querySelector('#slide1').checked = true;
        bg_check();
    } else if (seconds >= 10 && seconds <= 19) {
        document.querySelector('#slide2').checked = true;
        bg_check();
    } else if (seconds >= 30 && seconds <= 39) {
        document.querySelector('#slide3').checked = true;
        bg_check();
    } else if (seconds >= 40 && seconds <= 49) {
        document.querySelector('#slide4').checked = true;
        bg_check();
    } else if (seconds >= 50 && seconds <= 59) {
        document.querySelector('#slide5').checked = true;
        bg_check();
    }
   
}

window.setInterval('slideInterval()', 10000);


function leftSlide() {
  const check01 = document.querySelector('#slide1')
  const check02 = document.querySelector('#slide2')
  const check03 = document.querySelector('#slide3')
  const check04 = document.querySelector('#slide4')
  const check05 = document.querySelector('#slide5')


  if (check01.checked === false && check02.checked === false && check03.checked === false && check04.checked === false && check05.checked === false) {
      check05.checked = true
    } else if (check05.checked === true) {
      check04.checked = true
      
    } else if (check04.checked === true) {
      check03.checked = true
    } else if (check03.checked === true) {
      check02.checked = true
    } else if (check02.checked === true) {
      check01.checked = true
    } else if (check01.checked === true) {
      check05.checked = true
    }

}
   
function rightSlide() {
    const check01 = document.querySelector('#slide1')
    const check02 = document.querySelector('#slide2')
    const check03 = document.querySelector('#slide3')
    const check04 = document.querySelector('#slide4')
    const check05 = document.querySelector('#slide5')

  console.log(check01.checked, check02.checked, check03.checked, check04.checked, check05.checked)

  if (check01.checked === false && check02.checked === false && check03.checked === false && check04.checked === false && check05.checked === false) {
    check02.checked = true
   
  } else if (check02.checked === true) {
    check03.checked = true
  } else if (check03.checked === true) {
    check04.checked = true
   
  } else if (check04.checked === true) {
    check05.checked = true
   
  } else if (check05.checked === true) {
    check01.checked = true
   
  } else if (check01.checked === true) {
    check02.checked = true
  }


   
  
    
}

function bg_check() {
  slide1.checked? labelToSlide01.style.backgroundColor = 'var(--cor01)': labelToSlide01.style.backgroundColor = '';

  slide2.checked? labelToSlide02.style.backgroundColor = 'var(--cor01)': labelToSlide02.style.backgroundColor = '';

  slide3.checked? labelToSlide03.style.backgroundColor = 'var(--cor01)': labelToSlide03.style.backgroundColor = '';

  slide4.checked? labelToSlide04.style.backgroundColor = 'var(--cor01)': labelToSlide04.style.backgroundColor = '';

  slide5.checked? labelToSlide05.style.backgroundColor = 'var(--cor01)': labelToSlide05.style.backgroundColor = '';

}

bg_leftArrow.addEventListener('click', function() {
    leftSlide(), bg_check();
});

bg_rightArrow.addEventListener('click',function() {
    rightSlide(), bg_check();
});




/*--------------------------Main Combo Food-----------------------*/

const boxLeft = document.querySelector('.box-left');


const boxRight = document.querySelector('.box-right');

boxLeft.animate([{transform: 'rotate(0deg)'}, {transform: 'rotate(360deg)'}, {top: '87%'}], {duration: 2000, easing: 'linear', iterations: 1 });

boxRight.animate([{transform: 'rotate(0deg)'}, {transform: 'rotate(360deg)'}, {top: '87%'}], {duration: 2000, easing: 'linear', iterations: 1 });


var timerx2 = setInterval(() => {

    // Se o top for maior que 450px reduz a scala das boxs
    if (boxLeft.getBoundingClientRect().top >= 450 && boxRight.getBoundingClientRect().top >= 450) {
        boxLeft.style.top = 705 + 'px';
        boxRight.style.top = 705 + 'px';
        boxLeft.style.transform = 'scale(0.5)';
        boxRight.style.transform = 'scale(0.5)';
     // mude isso! está ficando fora da tela por causa do 705px
    };

    

    const arrowLeft = document.querySelector('.arrow-left');

    const arrowRight = document.querySelector('.arrow-right');

    arrowLeft.style.opacity = 100;

    arrowRight.style.opacity = 100;

    boxLeft.style.rotate = '135deg';


    // Animação das boxs

    boxLeft.animate([{left: '38%'}],{duration: 1000, easing: 'linear' , iterations: 1});

    boxRight.animate([{left: '57%'}],{duration: 1000, easing: 'linear' , iterations: 1});

   
    const text = ' Combo Food of the Daily';
    const listText = [];

    text.split('').forEach((add) => listText.push(add));

    const boxCenter = document.createElement('div');
    boxCenter.className = 'box-center';

    const subDivCF = document.createElement('div');
    subDivCF.className = 'sub-div-cf';

    const comboFood = document.querySelector('.combo-food');

    boxCenter.appendChild(subDivCF);
    comboFood.appendChild(boxCenter);

    let count = 0;
    let id = 0;

    let countTimer = setInterval(() => {
        if (count < 23 ) {
            count++;
            subDivCF.innerHTML += listText[count];
            return;
        }
        clearInterval(id);
    }, 50);

    id = setInterval(countTimer);

// limpa o timer do próprio bloco.
   clearInterval(timerx2);

}, 1900);




const timerX3 = setInterval(() => {
    const boxCenter =  document.querySelector('.box-center');
    const boxRight = document.querySelector('.box-right');

    const comboFood = document.querySelector('.combo-food');
    comboFood.insertBefore(boxCenter, boxRight);
    
    const boxBefore = document.createElement('div');
    boxBefore.className = 'sub-box-before';

    const boxLeftCenter = document.createElement('div');
    boxLeftCenter.className = 'box-left-center';

    const boxRightCenter = document.createElement('div');
    boxRightCenter.className = 'box-right-center';

    comboFood.appendChild(boxLeftCenter);

    comboFood.insertBefore(boxLeftCenter, boxCenter);

    comboFood.appendChild(boxRightCenter);

    comboFood.insertBefore(boxRightCenter, boxRight);


    // Animação das linhas entre as Boxs.

    let time = 0;
    let id = 0;

    let timerX5 = setInterval(() => {
        let screenWidth = window.innerWidth;
        let newScreenWidth = screenWidth / 3.5;

        const boxLeftCenter = document.querySelector('.box-left-center');

        if (time <= newScreenWidth) {
            time++;
            boxLeftCenter.style.width = time + 'px';
            boxRightCenter.style.width = time + 'px';
            return;
        };
        boxCenter.innerHTML = newScreenWidth

        clearInterval(id)
    }, 1);

    id = timerX5;

    clearInterval(timerX3);


// Set para animar as boxs até o final da linha

let countTimerX6 = 0
let countTimerX6v2 = 0
    let timerX6 = setInterval(() => {
        let screenWidth = window.innerWidth;
        let newScreenWidth = screenWidth / 4;
        let newScreenWidthX2 = screenWidth / 3.2;

        let local = document.querySelector('.box-center');
        let positionBoxCenter = local.getBoundingClientRect().left

        if (countTimerX6 <= newScreenWidth) {
            countTimerX6+= 3;
            boxRight.style.left = positionBoxCenter + countTimerX6 + 'px';
            console.log(local.getBoundingClientRect())
            return;
        };

        if (countTimerX6v2 <= newScreenWidthX2) {
            countTimerX6v2+= 3;
            boxLeft.style.left = positionBoxCenter - countTimerX6v2 + 'px';
            return;
        }

        clearInterval(timerX6)
    }, 1);


    clearInterval(timerX3);
}, 2800);


/*-----------------------Footer----------------------*/

body.addEventListener('mousewheel', function () {
    backTop();
})

function backTop() {
    if (window.scrollY > 500) {
    document.querySelector('#backTop').style.bottom = 0
    document.querySelector('#backTop').style.transform = 'translateY(0%)'
    document.querySelector('#backTop').style.transition = 'all 1s'
    } else if (window.scrollY < 500) {
    document.querySelector('#backTop').style.transform = 'translateY(100%)'
    }

}

btnNerfThis.addEventListener('click', function () {
  scroll_top()
})

function scroll_top() {
window.scroll({
    top: 0,
    behavior: 'smooth'
  })
}

