let myIndex = 0;
carousel();
console.log({ products })
function carousel() {
  let i;
  let x = document.getElementsByClassName("slide4");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 7000);    
}

