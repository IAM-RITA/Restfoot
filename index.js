const cartS = document.querySelector('.cart-scroll');
const cat1 = document.querySelector('.cat1');
const cat2 = document.querySelector('.cat2');
const cat3 = document.querySelector('.cat3');
const cat4 = document.querySelector('.cat4');
const views = document.querySelectorAll('.view');
const carts = document.querySelectorAll('.cart');
const decs = document.querySelectorAll('.dec');
const incs = document.querySelectorAll('.inc');
let count = 1;

document.querySelector('.small')

const close = () => {
  document.querySelector('.mobile-list').style.maxHeight = "0px";
}

document.querySelector('.navbtn').onclick = e => {
  ls = document.querySelectorAll('.lines');
  for(l of ls) {
    l.classList.toggle('change');
    l.classList.contains('change') ? document.querySelector('.mobile-list').style.maxHeight = "220px" : document.querySelector('.mobile-list').style.maxHeight = "0px";
  }
}

const padding = () => {
  document.querySelector('.cart-scroll').childElementCount > 0 ? document.querySelector('.cart-scroll').classList.add('padding') : document.querySelector('.cart-scroll').classList.remove('padding');
}

var foods = JSON.parse(localStorage.getItem('foods', foods)) || [];

const filled = () => {
  document.querySelector('.foodcart').firstElementChild.innerText = localStorage.getItem('fill');
}

const addfood = (title, img, category, order, price) => {
  foods.push({title, img, category, order, price});
  
  localStorage.setItem('foods', JSON.stringify(foods));
  
  return {title, img, category, order, price};
}

const createCart = ({title, img, category, order, price}) => {
  const cartShell = document.createElement('div');
  const col1 = document.createElement('div');
  const h3 = document.createElement('h3');
  const imgc = document.createElement('img')
  const col2 = document.createElement('div');
  const table = document.createElement('table');
  const tr1 = document.createElement('tr');
  const tr2 = document.createElement('tr');
  const tr3 = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');
  const td5 = document.createElement('td');
  const td6 = document.createElement('td');
  const btnWrapper = document.createElement('div');
  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');
  //
  cartShell.classList.add('cartshell');
  col1.classList.add('cols-2');
  col2.classList.add('cols-2');
  btnWrapper.classList.add('btn-wrapper');
  btn1.classList.add('order');
  btn2.classList.add('delete');
  //
  h3.innerText = title;
  imgc.src = img;
  td2.innerText = category;
  `${td1.innerText = " Category "}` + td2;
  td4.innerText = order;
  `${td3.innerText = " Order "}` + td4;
  td6.innerText = price;
  `${td5.innerText = " Total Price "}` + td6;
  btn1.innerText = " Order Now ";
  btn2.innerText = " Delete ";
  //
  btnWrapper.append(btn1, btn2);
  tr1.append(td1, td2);
  tr2.append(td3, td4);
  tr3.append(td5, td6);
  table.append(tr1, tr2, tr3);
  col2.append(table, btnWrapper);
  col1.append(h3, imgc)
  cartShell.append(col1, col2);
  cartS.appendChild(cartShell);
  //
  const deletebtns = document.querySelectorAll('.delete');
  for(deletebtn of deletebtns) {
    deletebtn.onclick = e => {
      e.preventDefault(); 
      p = e.currentTarget;
      e.currentTarget.style.animation = "clicked .2s ease-in-out 1";
      name = e.currentTarget.style.animationName === "clicked";
      e.currentTarget.addEventListener('animationend', slide);
      function slide() {
//        p.parentElement.parentElement.parentElement.style.transform = "scale(1) translateX(60em)";
          p.parentElement.parentElement.parentElement.style.cssText = "transform: scale(1) translateX(50em);";
        p.parentElement.parentElement.parentElement.addEventListener('transitionend', remove);
        function remove() {
          
          p.parentElement.parentElement.parentElement.remove();
          x = document.querySelector('.foodcart').firstElementChild.innerText = document.querySelector('.cart-scroll').childElementCount;
          localStorage.setItem('fill', JSON.stringify(x)); // This is for the cart number
          x === 0 ? document.querySelector('.foodcart').firstElementChild.innerText = "" : x;
      
          y = document.querySelector('.a5').parentElement.nextElementSibling.firstElementChild === null;
          y === true ? document.querySelector('.a5').nextElementSibling.innerText = " You haven't added something " : document.querySelector('.a5').nextElementSibling.innerText = " Food Cart List ";
          padding();
        }
      };
      a = e.currentTarget.parentElement.parentElement.parentElement.firstChild.firstElementChild.innerText;
      b = e.currentTarget.parentElement.parentElement.parentElement.firstChild.firstElementChild.nextElementSibling.src;
      c = e.currentTarget.parentElement.parentElement.parentElement.children[1].firstElementChild.firstElementChild.children[1].innerText;
      d = e.currentTarget.parentElement.parentElement.parentElement.children[1].firstElementChild.children[1].children[1].innerText;
      e = e.currentTarget.parentElement.parentElement.parentElement.children[1].firstElementChild.children[2].children[1].innerText;
      
      foods = foods.filter(
        function(food) {
          return food.title !== a || food.img !== b || food.category !== c || food.order !== d || food.price !== e;
      });
      
      localStorage.setItem('foods', JSON.stringify(foods));
     
     }
  }
}

document.querySelector('.foodcart').onclick= e => {
  ef = e.currentTarget;
  e.currentTarget.classList.toggle('a4');
  
  if(ef.classList.contains('a4')) {
    document.querySelector('.cart-wrapper').classList.add('slide');
  } else {
    document.querySelector('.cart-wrapper').classList.add('vanish');
    document.querySelector('.cart-wrapper').addEventListener('animationend', slide);
    function slide() {
      document.querySelector('.cart-wrapper').classList.remove('slide');
      document.querySelector('.cart-wrapper').classList.remove('vanish');
      setTimeout(() => document.querySelector('.cart-wrapper').removeEventListener('animationend', slide), 50);
    }
  }
  
  
  x = document.querySelector('.a5').parentElement.nextElementSibling.firstElementChild === null;
  x === true ? document.querySelector('.a5').nextElementSibling.innerText = " You haven't added something " : document.querySelector('.a5').nextElementSibling.innerText = " Food Cart List ";
}

document.querySelector('.a5').onclick = e => {
  ex = e.currentTarget;
  e.currentTarget.style.animation = " clicked .2s ease-in-out";
  ex.addEventListener('animationend', slide);
  function slide() {
    ex.style.animation = "";
    document.querySelector('.cart-wrapper').classList.add('vanish');
    document.querySelector('.cart-wrapper').addEventListener('animationend', slide2);
    function slide2(){
      ex.removeEventListener('animationend', slide);
      document.querySelector('.foodcart').classList.remove('a4');
      document.querySelector('.cart-wrapper').removeEventListener('animationend', slide2);
      setTimeout(() => document.querySelector('.cart-wrapper').classList.remove('slide') & document.querySelector('.cart-wrapper').classList.remove('vanish'), 150)
    }
  }
}

for(cart of carts) {
  cart.onclick = e => {
    e.currentTarget.style.animation = "clicked .1s ease-in-out 1";
    setTimeout(() => cart.style.animation = "", 50);
    title = document.querySelector('.food-modal2').children[2].firstElementChild.innerText;
    img = document.querySelector('.food-modal2').children[0].firstElementChild.src;
    category = document.querySelector('.food-modal2').children[0].firstElementChild.nextElementSibling.innerText;
    order = document.querySelector('.food-modal2').children[2].firstElementChild.nextElementSibling.nextElementSibling.children[2].innerText;
    price = document.querySelector('.food-modal2').children[2].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.children[1].innerText;
    
    var newfood = addfood(title, img, category, order, price);
    
    createCart(newfood);
    
    fill = document.querySelector('.foodcart').firstElementChild.innerText = document.querySelector('.cart-scroll').childElementCount;
    localStorage.setItem('fill', JSON.stringify(fill));
    x = document.querySelector('.a5').parentElement.nextElementSibling.firstElementChild === null;
    x === true ? document.querySelector('.a5').nextElementSibling.innerText = " You haven't added something " : document.querySelector('.a5').nextElementSibling.innerText = " Food Cart List ";
    padding();
  }
}

foods.forEach(createCart)
foods.forEach(filled);

window.onload = e => {
  menuPage = document.baseURI === 'https://jinshin19.github.io/Restofood/menus.html';
  contactPage = document.baseURI === 'https://jinshin19.github.io/Restofood/contact.html';
  menuBracket = document.baseURI === 'http://127.0.0.1:49197/menus.html';
  contactBracket= document.baseURI === 'http://127.0.0.1:49197/menus.html';
  device1 = matchMedia('(max-width: 320px)').matches && matchMedia('(max-height: 658px)').matches;
  
  menuPage === true || menuBracket === true ? menu() : false ;
  device();
  
  if(window.matchMedia('(max-width: 320px)').matches && window.matchMedia('(max-height: 480px)').matches) {
    
    if(menuPage === true || menuBracket === true) {
      
      window.matchMedia('(orientation: portrait)').onchange = e => {
        document.querySelector('.cbtn').previousElementSibling.style.marginTop = "50px";
      }
      window.matchMedia('(orientation: landscape)').onchange = e => {
        document.querySelector('.food-modal2').style.display = "block";
      }
      
    }
    if(contactPage === true || contactBracket === true) {
      
      window.matchMedia('(orientation: portrait)').onchange = e => {
        document.querySelector('.contact-wrapper').style.height = "100vh";
      }
      window.matchMedia('(orientation: landscape)').onchange = e => {
        document.querySelector('.contact-wrapper').style.height = "auto";
      }
      
    }
    
  } else if(window.matchMedia('(max-width: 480px)').matches && window.matchMedia('(max-height: 320px)').matches) {
    
    if(menuPage === true || menuBracket === true) {
      window.matchMedia('(orientation: landscape)').onchange = e => {
        document.querySelector('.food-modal2').style.display = "block";
      }
      window.matchMedia('(orientation: portrait)').onchange = e => {
        document.querySelector('.cbtn').previousElementSibling.style.marginTop = "50px";
      }
      
    }
  }
  if(device1 === true) {
    
    if(menuPage === true || menuBracket === true) {
      window.matchMedia('(orientation: portrait)').onchange = e => {
        document.querySelector('.cbtn').previousElementSibling.style.marginTop = "50px";
      }
    }
  } else if(matchMedia('(max-width: 658px)').matches && matchMedia('(max-height: 320px)').matches) {
    
    if(menuPage === true || menuBracket === true) {
      window.matchMedia('(orientation: landscape)').onchange = e => {
        e.target.matches ? false : document.querySelector('.cbtn').previousElementSibling.style.marginTop = "50px";
      }
    }
    
  }

}


const menu = e => {
cat1.onclick = e => {
  cat2.style.animation = "";
  cat3.style.animation = "";
  e.currentTarget.style.animation = "clicked .15s ease-in-out 1";
  //
  ta = document.querySelector('.cat2').classList.contains('a');
  tc = document.querySelector('.two-person').classList.contains('b');
  tt = getComputedStyle(document.querySelector('.two-person')).transform;
  fa = document.querySelector('.cat3').classList.contains('a');
  fc = document.querySelector('.family-meal').classList.contains('b');
  ft = getComputedStyle(document.querySelector('.family-meal')).transform;
  //
  ta || tc || fa || fc || ft === "none" || tt === "none" ? 
    document.querySelector('.cat2').classList.remove('a') ||
    document.querySelector('.cat3').classList.remove('a') ||
    document.querySelector('.two-person').classList.remove('b') ||
    document.querySelector('.family-meal').classList.remove('b') ||
    document.querySelector('.single-person').classList.add('b') ||
    document.querySelector('.cat1').classList.add('a')
  : false;
  //
} // 

cat2.onclick = e => {
  cat1.style.animation = "";
  cat3.style.animation = "";
  e.currentTarget.style.animation = "clicked .15s ease-in-out 1";
  //
  sa = document.querySelector('.cat1').classList.contains('a');
  sc = document.querySelector('.single-person').classList.contains('b');
  st = getComputedStyle(document.querySelector('.single-person')).transform;
  fa = document.querySelector('.cat3').classList.contains('a');
  fc = document.querySelector('.family-meal').classList.contains('b');
  ft = getComputedStyle(document.querySelector('.family-meal')).transform;
  //
  sa || sc || fa || fc || ft === "none" || st === "none" ? 
    document.querySelector('.cat1').classList.remove('a') ||
    document.querySelector('.cat3').classList.remove('a') ||
    document.querySelector('.single-person').classList.remove('b') ||
    document.querySelector('.family-meal').classList.remove('b') ||
    document.querySelector('.two-person').classList.add('b') ||
    document.querySelector('.cat2').classList.add('a')
  : false;
  //
} //

cat3.onclick = e => {
  cat1.style.animation = "";
  cat2.style.animation = "";
  e.currentTarget.style.animation = "clicked .15s ease-in-out 1";
  //
  sa = document.querySelector('.cat1').classList.contains('a');
  sc = document.querySelector('.single-person').classList.contains('b');
  st = getComputedStyle(document.querySelector('.single-person')).transform;
  ta = document.querySelector('.cat2').classList.contains('a');
  tc = document.querySelector('.two-person').classList.contains('b');
  tt = getComputedStyle(document.querySelector('.two-person')).transform;
  //
  sa || sc || ta || tc || tt === "none" || st === "none" ? 
    document.querySelector('.cat1').classList.remove('a') ||
    document.querySelector('.cat2').classList.remove('a') ||
    document.querySelector('.single-person').classList.remove('b') ||
    document.querySelector('.two-person').classList.remove('b') ||
    document.querySelector('.family-meal').classList.add('b') ||
    document.querySelector('.cat3').classList.add('a')
  : false;
  //
} //

for(view of views) {
  view.onclick = e => {
    e.currentTarget.style.animation = "clicked .1s ease-in-out 1";
    document.querySelector('.food-modal').classList.add('omodal');
    document.querySelector('.cbtn').style.animation = "";
    document.querySelector('.food-modal2').children[0].firstElementChild.src = e.currentTarget.parentElement.children[1].src; // Img
    document.querySelector('.food-modal2').children[2].firstElementChild.innerText = e.currentTarget.parentElement.children[3].innerText; // Title
    document.querySelector('.food-modal2').children[2].children[1].children[0].children[0].children[1].innerText = e.currentTarget.parentElement.children[4].children[2].children[0].innerText; // Value 1
    document.querySelector('.food-modal2').children[2].children[1].children[0].children[1].firstElementChild.innerText = e.currentTarget.parentElement.children[4].children[0].children[0].innerText; // label-1
    document.querySelector('.food-modal2').children[2].children[1].children[0].children[1].children[1].innerText = e.currentTarget.parentElement.children[4].children[0].children[1].textContent; // Value 2
    document.querySelector('.food-modal2').children[2].children[1].children[0].children[2].firstElementChild.innerText = e.currentTarget.parentElement.children[4].children[1].children[0].textContent; // label-2
    document.querySelector('.food-modal2').children[2].children[1].children[0].children[2].children[1].innerText = e.currentTarget.previousElementSibling.children[1].children[1].innerText;
    document.querySelector('.food-modal2').children[2].children[3].children[0].children[0].children[1].innerText = document.querySelector('.food-modal2').children[2].children[1].firstElementChild.firstElementChild.children[1].innerText;
    document.querySelector('.food-modal2').children[2].children[2].children[2].innerText = "1";
    document.querySelector('.food-modal2').children[2].children[1].children[0].children[1].children[1].innerText > 1 ? 
    document.querySelector('.food-modal2').children[2].children[1].children[0].children[1].children[2].innerText = "pcs" : document.querySelector('.food-modal2').children[2].children[1].children[0].children[1].children[2].innerText = "pc";
    document.querySelector('.food-modal2').children[2].children[1].children[0].children[2].children[1].innerText > 1 ?
    document.querySelector('.food-modal2').children[2].children[1].children[0].children[2].children[2].innerText = "pcs" : document.querySelector('.food-modal2').children[2].children[1].children[0].children[2].children[2].innerText = "pc";
    document.querySelector('.food-modal2').firstElementChild.firstElementChild.nextElementSibling.innerText = e.currentTarget.parentElement.parentElement.firstElementChild.innerText; // Category
  }
}

for(dec of decs) {
  dec.onclick = e => {
    if(document.querySelector('.food-modal2').children[2].children[2].children[2].innerText > 1) {
      e.currentTarget.style.animation = "clicked .1s ease-in-out 1";
      setTimeout(() => dec.style.animation = "", 50);
      count--;
      document.querySelector('.food-modal2').children[2].children[2].children[2].innerText = count;
      document.querySelector('.food-modal2').children[2].children[3].firstElementChild.firstElementChild.children[1].innerText * document.querySelector('.food-modal2').children[2].children[2].children[2].innerText;
      x = document.querySelector('.food-modal2').children[2].children[1].firstElementChild.firstElementChild.children[1].innerText * document.querySelector('.food-modal2').children[2].children[2].children[2].innerText;
      document.querySelector('.food-modal2').children[2].children[3].firstElementChild.firstElementChild.children[1].innerText = x;
    } else {
      return false;
    }
  }
}

for(inc of incs) {
  inc.onclick = e => {
    e.currentTarget.style.animation = "clicked .1s ease-in-out 1";
    setTimeout(() => inc.style.animation = "", 50);
    count++;
    document.querySelector('.food-modal2').children[2].children[2].children[2].innerText = count;
    x = document.querySelector('.food-modal2').children[2].children[1].firstElementChild.firstElementChild.children[1].innerText * document.querySelector('.food-modal2').children[2].children[2].children[2].innerText;
    document.querySelector('.food-modal2').children[2].children[3].firstElementChild.firstElementChild.children[1].innerText = x;
  }
}

document.querySelector('.cbtn').onclick = e => {
  count = 1;
  x = e.currentTarget;
  e.currentTarget.style.animation = "clicked .15s ease-in-out 1";
  x.addEventListener('animationend', animate);
  function animate() {
    document.querySelector('.food-modal').classList.add('cmodal');
    setTimeout(() => x.removeEventListener('animationend', animate) & document.querySelector('.food-modal').classList.remove('omodal') & document.querySelector('.food-modal').classList.remove('cmodal'), 500);
  }
  for(view of views) {
    view.style.animation = "";
  }
} //
}

const device = e => {
  menuPage = document.baseURI === 'https://jinshin19.github.io/Restofood/menus.html';
  contactPage = document.baseURI === 'https://jinshin19.github.io/Restofood/contact.html';
  menuBracket = document.baseURI === 'http://127.0.0.1:49197/menus.html';
  contactBracket= document.baseURI === 'http://127.0.0.1:49197/contact.html';
  
  width = matchMedia('(max-width: 320px)').matches;
  height = matchMedia('(max-height: 480px)').matches;
  width2 = matchMedia('(max-width: 480px)').matches;
  height2 = matchMedia('(max-height: 320px)').matches;
  device1 = matchMedia('(max-width: 320px)').matches && matchMedia('(max-height: 658px)').matches;
  
  if(width === true && height === true) {
    
    menuPage === true || menuBracket === true ?document.querySelector('.cbtn').previousElementSibling.style.marginTop = "50px" : false;
    
  } else {
    false;
  };
  if(width2 === true && height2 === true) {
    
    contactPage === true || contactBracket === true ? `${document.querySelector('.contact-wrapper').style.height = "auto"}` : false;
    
    menuPage === true || menuBracket === true ?
    `${document.querySelector('.food-modal2').style.display = "block"}` || `${document.querySelector('.cbtn').previousElementSibling.style.marginTop = "50px"}` : false;
  }
  if(device1 === true) {
    
    menuPage === true || menuBracket === true ? document.querySelector('.cbtn').previousElementSibling.style.marginTop = "50px" : false;
  
  }
}
