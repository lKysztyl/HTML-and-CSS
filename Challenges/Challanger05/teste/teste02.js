const boxWrapper = document.getElementById('box-wrapper');

const box = document.createElement('div');
box.innerHTML = 'div <br> 4';
box.style.backgroundColor = 'orange';
box.classList.add('box');
 
boxWrapper.append(box); 

for(let i = 5; i < 10; i++) {
  const box = document.createElement("div");
  box.innerHTML = 'div <br> ' + i;
  box.classList.add("box");  
  boxWrapper.append(box);
 }