// main page: slider pic dynamically "not working yet"
// var pageClient = [
//   {
//     href: 'https://www.smartweb.ge/',
//     img: 'media/img/smartweb.png',
//     name: 'SmartWeb'
//   },
//   {
//     href: 'https://www.coca-cola.com/',
//     img: 'media/img/cola.png',
//     name: 'Coca-Cola'
//   },
//   {
//     href: 'https://www.nike.com/',
//     img: 'media/img/nike.png',
//     name: 'Nike'
//   },
//   {
//     href: 'https://www.smartweb.ge/',
//     img: 'media/img/smartweb.png',
//     name: 'SmartWeb'
//   },
//   {
//     href: 'https://www.coca-cola.com/',
//     img: 'media/img/cola.png',
//     name: 'Coca-Cola'
//   },
//   {
//     href: 'https://www.nike.com/',
//     img: 'media/img/nike.png',
//     name: 'Nike'
//   },
// ]
//   for(let i = 0; i < pageClient.length; i++ ){
//     var li = `<li>` +
//                 `<a href="${pageClient[i].href}" target="_blank"><img class="lazy" src="media/img/cover.jpeg" data-src="${pageClient[i].img}" alt="Logo"></a>` +
//                 `<span class="line"></span>` +
//                 ` <a href="${pageClient[i].href}" target="_blank">${pageClient[i].name}</a>` +
//                 `</li>`;
//                 document.getElementById('clientsUl').appendChild(li);
//   }


// start jquery
$(document).ready(function(){

 $('.pageNumber').on('click', function(){
   $('.pageNumber').removeClass('active');
   $(this).addClass('active');
 })

 $('.nextPage').on('click', function(){
   $('.allProducts').slice(0).hide();
   $('.allProducts').slice(0, 9).show();
   if( $('.active').next().hasClass('pageNumber')){
    $('.active').next($('.pageNumber')).addClass('active')
    $('.active').prev().removeClass('active')
   }
   
})
$('.prevPage').on('click', function(){
  if( $('.active').prev().hasClass('pageNumber')){
    $('.active').prev().addClass('active')
    $('.active').next().removeClass('active')
  }
})


var product = [
  {
    class: 'facing',
    img: 'media/img/webocementi.png',
    description: 'მოსაპირკეთებელი მასალა'
  },
  {
    class: 'facing',
    img: 'media/img/webocementi.png',
    description: 'მოსაპირკეთებელი მასალა'
  },
  {
    class: 'facing',
    img: 'media/img/webocementi.png',
    description: 'მოსაპირკეთებელი მასალა'
  },
  {
    class: 'facing',
    img: 'media/img/webocementi.png',
    description: 'მოსაპირკეთებელი მასალა'
  },
  {
    class: 'facing',
    img: 'media/img/webocementi.png',
    description: 'მოსაპირკეთებელი მასალა'
  },
  {
    class: 'facing',
    img: 'media/img/webocementi.png',
    description: 'მოსაპირკეთებელი მასალა'
  },
  {
    class: 'facing',
    img: 'media/img/webocementi.png',
    description: 'მოსაპირკეთებელი მასალა'
  },
  {
    class: 'facing',
    img: 'media/img/webocementi.png',
    description: 'მოსაპირკეთებელი მასალა'
  },
  {
    class: 'facing',
    img: 'media/img/webocementi.png',
    description: 'მოსაპირკეთებელი მასალა'
  },
  {
    class: 'building',
    img: 'media/img/Image 10.png',
    description: 'სამშენებლო მასალები'
  },
  {
    class: 'building',
    img: 'media/img/Image 10.png',
    description: 'სამშენებლო მასალები'
  },
  {
    class: 'building',
    img: 'media/img/Image 10.png',
    description: 'სამშენებლო მასალები'
  },
  {
    class: 'building',
    img: 'media/img/Image 10.png',
    description: 'სამშენებლო მასალები'
  },
  {
    class: 'building',
    img: 'media/img/Image 10.png',
    description: 'სამშენებლო მასალები'
  },
  {
    class: 'building',
    img: 'media/img/Image 10.png',
    description: 'სამშენებლო მასალები'
  },
  {
    class: 'building',
    img: 'media/img/Image 10.png',
    description: 'სამშენებლო მასალები'
  },
  {
    class: 'building',
    img: 'media/img/Image 10.png',
    description: 'სამშენებლო მასალები'
  },
  {
    class: 'building',
    img: 'media/img/Image 10.png',
    description: 'სამშენებლო მასალები'
  },
  {
    class: 'newYearLamp',
    img: 'media/img/newyearlamp.jpg',
    description: 'საახაწლო ნათურები'
  },
  {
    class: 'newYearLamp',
    img: 'media/img/newyearlamp.jpg',
    description: 'საახაწლო ნათურები'
  },
  {
    class: 'newYearLamp',
    img: 'media/img/newyearlamp.jpg',
    description: 'საახაწლო ნათურები'
  },
  {
    class: 'newYearLamp',
    img: 'media/img/newyearlamp.jpg',
    description: 'საახაწლო ნათურები'
  },
  {
    class: 'newYearLamp',
    img: 'media/img/newyearlamp.jpg',
    description: 'საახაწლო ნათურები'
  },
  {
    class: 'newYearLamp',
    img: 'media/img/newyearlamp.jpg',
    description: 'საახაწლო ნათურები'
  },
  {
    class: 'newYearLamp',
    img: 'media/img/newyearlamp.jpg',
    description: 'საახაწლო ნათურები'
  },
  {
    class: 'newYearLamp',
    img: 'media/img/newyearlamp.jpg',
    description: 'საახაწლო ნათურები'
  },
  {
    class: 'newYearLamp',
    img: 'media/img/newyearlamp.jpg',
    description: 'საახაწლო ნათურები'
  },
]

for(let i = 0; i < product.length; i++){
  var aLink  = `<a class="allProducts ${product[i].class}" href="inproduct.html">` +
                  `<div>` + 
                    ` <img src="${product[i].img}" alt="">` +
                    ` <span class="line"></span>` +
                    `<h4>${product[i].description}</h4>` +
                  `</div>` +
                ` </a>`;
                $('#product').append(aLink);
}

$('.optionFacing').on('click', function(){
  $('.product p').removeClass('selected');
  $(this).children().addClass('selected');
  $('.facing').css('display', 'flex');
  $('.building').css('display', 'none');
  $('.newYearLamp').css('display', 'none');
})
$('.optionBuilding').on('click', function(){
  $('.product p').removeClass('selected');
  $(this).children().addClass('selected');
  $('.facing').css('display', 'none');
  $('.building').css('display', 'flex');
  $('.newYearLamp').css('display', 'none');
})
$('.optionNewYearLamp').on('click', function(){
  $('.product p').removeClass('selected');
  $(this).children().addClass('selected');
  $('.facing').css('display', 'none');
  $('.building').css('display', 'none');
  $('.newYearLamp').css('display', 'flex');
})





});




// ------------- lazy load ------------

document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
    }
  });

// main page slider
var goleft = document.getElementById('arrowLeft');
var goright = document.getElementById('arrowRight');
var width = 0;
function moveLeft() {
  if(width >= 0) {
    return  document.getElementsByClassName('clients-list')[0].style.left = '0px';
  } else {
    width += 140;
  }
  document.getElementsByClassName('clients-list')[0].style.left = width + 'px';
};

function moveRight(){
 if(width < -1350 ) {
   width = -1475;
 } else {
   width -= 140;
 }
 document.getElementsByClassName('clients-list')[0].style.left = width + 'px';
};








// contact page: check every input value 
  var inputName = document.getElementById('inputName');
  var inputEmail = document.getElementById('inputEmail');
  var inputSubject = document.getElementById('inputSubject');
  var inputMessage = document.getElementById('inputMessage');

  function checkName(){
    if(inputName.value.length <= 3 ){
      inputName.style.color = 'red';
    } else {
      inputName.style.color = 'green';
    }
  }
  function checkEmail(){
    if( !/...@.../.test(inputEmail.value)){
      inputEmail.style.color = 'red';
    } else {
      inputEmail.style.color = 'green';
    }
  }
  function checkSubject(){
    if(inputSubject.value.length < 5 || inputSubject.value.length > 50 ){
      inputSubject.style.color = 'red';
    } else {
      inputSubject.style.color = 'green';
    }
  }
  function checkMessage(){
    if(inputMessage.value.length < 10 || inputMessage.value.length > 500 ){
      inputMessage.style.color = 'red';
    } else {
      inputMessage.style.color = 'green';
    }
  }

  // contact page: check form by send button
  var submit = document.getElementById('submit');
  function checkFromBySend(){
    if( inputName.style.color == 'red' || inputEmail.style.color == 'red' || inputSubject.style.color == 'red' || inputMessage.style.color == 'red'){
      document.getElementsByClassName('success')[0].style.display = 'none';
      document.getElementsByClassName('unsuccess')[0].style.display = 'flex';
    }
    if( inputName.style.color == 'green' && inputEmail.style.color == 'green' && inputSubject.style.color == 'green' && inputMessage.style.color == 'green'){
      document.getElementsByClassName('unsuccess')[0].style.display = 'none';
      document.getElementsByClassName('success')[0].style.display = 'flex';
    }
  }
// contact page: delete all input text by X button when form will be sent
  function deleteForm(){
   document.getElementsByClassName('success')[0].style.display = 'none';
   document.getElementsByClassName('unsuccess')[0].style.display = 'none';
   inputName.value = '';
   inputEmail.value = '';
   inputNumber.value = '';
   inputSubject.value = '';
   inputMessage.value = '';
  };

 





  
  
  

