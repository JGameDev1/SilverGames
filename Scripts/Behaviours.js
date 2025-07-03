var fatherImgBlobi=document.getElementById("blobiIMG");
var blobiImgs=["Images/BlobiIdle.png","Images/BlobiIdle2.png","Images/BlobiIdle.png","Images/BlobiIdle3.png","Images/BlobiIdle4.png","Images/BlobiIdle3.png"];
let blobiImgIndex=0;
var fatherImgCat=document.getElementById("catIMG");
var catImgs=["Images/Gato.png","Images/Gato2.png","Images/Gato3.png","Images/Gato4.png","Images/Gato3.png","Images/Gato2.png"];
let catImgIndex=0;

function changeImageOfBlobiBlob()
{blobiImgIndex=(blobiImgIndex+1)%blobiImgs.length;
fatherImgBlobi.src=blobiImgs[blobiImgIndex];}

setInterval(() => {changeImageOfBlobiBlob();}, 750);

function changeImageOfCatImg()
{catImgIndex=(catImgIndex+1)%catImgs.length;
fatherImgCat.src=catImgs[catImgIndex];}

setInterval(() => {changeImageOfCatImg();}, 250);