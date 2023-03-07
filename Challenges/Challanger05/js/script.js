

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
              break3
  
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
  
   
/*-----------------------Footer----------------------*/

body.addEventListener('mousewheel', function () {
  m()
})

function m() {
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

