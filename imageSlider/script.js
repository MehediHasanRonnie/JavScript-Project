var photos = ["images/3.jpg","images/2.jpg","images/1.jpg","images/4.jpg"];
var imgTag = document.querySelector("img");

var count = 0;
// creating next function for onclick to the next elements
function next(){
    count++;
    if(count >= photos.length){
        count=0;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }  
}
// creating previous function to get previous photos
function prev(){
    count--;
    if(count < 0){
        count=photos.length - 1;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
  
}
