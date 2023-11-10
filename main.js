function myFunction() {
  let button = document.getElementById("myPopup");
  button.classList.toggle("show");
};



let mybutton = document.getElementById ('mybutton');
mybutton.addEventListener ('click' , function(){
mybutton.style.backgroundColor = 'hsl(214, 17%, 51%)';
});


const svgElement = document.getElementById("share");
svgElement.addEventListener("click", function(){
svgElement.querySelector('path').setAttribute('fill' , 'white');
});

