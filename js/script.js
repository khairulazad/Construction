
let mytoggle = document.querySelector(".fa-navicon");
let hideul = document.querySelector("#sh_ul");
console.log(hideul)
console.log(mytoggle)

mytoggle.addEventListener('click', function(){
  hideul.classList.toggle("activeUl")
  
})





// $(".customIcon").click(function(){
//     $("#sh_ul").slideToggle();

// });

