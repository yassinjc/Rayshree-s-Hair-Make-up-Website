// Code voor de foto-slider //

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 100,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Code om een schaduw achter de navigatiebalk in te laten komen tijdens het scrollen //

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 400) {
    $('.navbar-background').fadeIn();
  } else {
    $('.navbar-background').fadeOut();
  }
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 200) {
    $('.portfolio-navbg').fadeIn();
  } else {
    $('.portfolio-navbg').fadeOut();
  }
});

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.contact-navbg').fadeIn();
  } else {
    $('.contact-navbg').fadeOut();
  }
});


// Code voor het filtersysteem in de portfolio //

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// Code voor modal images voor de foto's in het portfolio //

var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}