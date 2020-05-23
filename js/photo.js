var i=0;
var imagesorder = ["../img/lakes1-870x400.jpg",
"../img/Master.jpg",
"../img/hqdefault.jpg",
"../img/Hindu-temple-in-Abu-Dhabi-UAE-to-be-designed-along-lines-of-Akshardham-866x487.jpg",
 "../img/543083671308780951.jpg"];

function image_slide()
{
   // var x = document.getElementById('image');
    i = (i + 1)%5;
    document.getElementById("image_slide").src = imagesorder[i];
}