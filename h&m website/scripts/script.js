// JavaScript Document
console.log("hi");

var rec1 = document.querySelector("#rec1")
var rec2 = document.querySelector("#rec2")
var rec3 = document.querySelector("#rec3")

var knop1 = document.querySelector("#select1")
var knop2 = document.querySelector("#select2")
var knop3 = document.querySelector("#select3")
var knop4 = document.querySelector("#select4")
var knop5 = document.querySelector("#select5")

var mknop1 = document.querySelector("#mknop1")
var mknop2 = document.querySelector("#mknop2")
var mknop3 = document.querySelector("#mknop3")
var mknop4 = document.querySelector("#mknop4")



var recslide1 = document.querySelector("#stshirt")
var recslide2 = document.querySelector("#snieuw")
var recslide3 = document.querySelector("#soverhemd")

var collage1 = document.querySelector("#sgslide1")
var collage2 = document.querySelector("#sgslide2")
var collage3 = document.querySelector("#sgslide3")
var collage4 = document.querySelector("#sgslide4")
var collage5 = document.querySelector("#sgslide5")

var merk1 = document.querySelector("#merk1")
var merk2 = document.querySelector("#merk2")
var merk3 = document.querySelector("#merk3")
var merk4 = document.querySelector("#merk4")

var shop = document.querySelector("#shop")
var ddshop = document.querySelector("#shop section")
var shopopen = 'nee'

var corp = document.querySelector("#corp")
var ddcorp = document.querySelector("#corp section")
var corpopen = 'nee'

var help = document.querySelector("#help")
var ddhelp = document.querySelector("#help section")
var helpopen = 'nee'


var spooky = document.querySelector(".spooky")
var dropdwn1 = document.querySelector(".spooky ul")

var open1 = 'nee'








rec1.addEventListener("click", function(){
    recslide1.scrollIntoView({ block: "center", inline: "start"});

    rec1.classList.remove('unclicked');
    rec1.classList.add('clicked');

    rec2.classList.add('unclicked');
    rec2.classList.remove('clicked');
    rec3.classList.add('unclicked');
    rec3.classList.remove('clicked');
})
    
rec2.addEventListener("click", function(){
    recslide2.scrollIntoView({ block: "center", inline: "start" });
    
    rec2.classList.remove('unclicked');
    rec2.classList.add('clicked');
    
    rec1.classList.add('unclicked');
    rec1.classList.remove('clicked');
    rec3.classList.add('unclicked');
    rec3.classList.remove('clicked');
})
    
rec3.addEventListener("click", function(){
    recslide3.scrollIntoView({ block: "center", inline: "start" });

    rec3.classList.remove('unclicked');
    rec3.classList.add('clicked');
    
    rec1.classList.add('unclicked');
    rec1.classList.remove('clicked');
    rec2.classList.add('unclicked');
    rec2.classList.remove('clicked');
})

recslide1.addEventListener("scroll", (event) =>{
    
    rec1.classList.add('unclicked');
    rec1.classList.remove('clicked');
    rec2.classList.remove('unclicked');
    rec2.classList.add('clicked');


})


knop1.addEventListener("click", function(){
    collage1.scrollIntoView({ block: "center" });

    knop1.classList.remove('unclicked');
    knop1.classList.add('clicked');
    
    knop2.classList.add('unclicked');
    knop2.classList.remove('clicked');
    knop3.classList.add('unclicked');
    knop3.classList.remove('clicked');
    knop4.classList.add('unclicked');
    knop4.classList.remove('clicked');
    knop5.classList.add('unclicked');
    knop5.classList.remove('clicked');
})

knop2.addEventListener("click", function(){
    collage2.scrollIntoView({ block: "center" });

    knop2.classList.remove('unclicked');
    knop2.classList.add('clicked');
    
    knop1.classList.add('unclicked');
    knop1.classList.remove('clicked');
    knop3.classList.add('unclicked');
    knop3.classList.remove('clicked');
    knop4.classList.add('unclicked');
    knop4.classList.remove('clicked');
    knop5.classList.add('unclicked');
    knop5.classList.remove('clicked');

})

knop3.addEventListener("click", function(){
    collage3.scrollIntoView({ block: "center" });

    knop3.classList.remove('unclicked');
    knop3.classList.add('clicked');
    
    knop1.classList.add('unclicked');
    knop1.classList.remove('clicked');
    knop2.classList.add('unclicked');
    knop2.classList.remove('clicked');
    knop4.classList.add('unclicked');
    knop4.classList.remove('clicked');
    knop5.classList.add('unclicked');
    knop5.classList.remove('clicked');
})

knop4.addEventListener("click", function(){
    collage4.scrollIntoView({ block: "center" });

    knop4.classList.remove('unclicked');
    knop4.classList.add('clicked');
    
    knop1.classList.add('unclicked');
    knop1.classList.remove('clicked');
    knop2.classList.add('unclicked');
    knop2.classList.remove('clicked');
    knop3.classList.add('unclicked');
    knop3.classList.remove('clicked');
    knop5.classList.add('unclicked');
    knop5.classList.remove('clicked');
})

knop5.addEventListener("click", function(){
    collage5.scrollIntoView({ block: "center" });

    knop5.classList.remove('unclicked');
    knop5.classList.add('clicked');
    
    knop2.classList.add('unclicked');
    knop2.classList.remove('clicked');
    knop3.classList.add('unclicked');
    knop3.classList.remove('clicked');
    knop4.classList.add('unclicked');
    knop4.classList.remove('clicked');
    knop1.classList.add('unclicked');
    knop1.classList.remove('clicked');
})




mknop1.addEventListener("click", function(){
    merk1.scrollIntoView({ block: "center", inline: "start" });

    mknop1.classList.remove('unclicked');
    mknop1.classList.add('clicked');
    
    mknop2.classList.add('unclicked');
    mknop2.classList.remove('clicked');
    mknop3.classList.add('unclicked');
    mknop3.classList.remove('clicked');
    mknop4.classList.add('unclicked');
    mknop4.classList.remove('clicked');
})

mknop2.addEventListener("click", function(){
    merk2.scrollIntoView({ block: "center", inline: "start" });

    mknop2.classList.remove('unclicked');
    mknop2.classList.add('clicked');
    
    mknop1.classList.add('unclicked');
    mknop1.classList.remove('clicked');
    mknop3.classList.add('unclicked');
    mknop3.classList.remove('clicked');
    mknop4.classList.add('unclicked');
    mknop4.classList.remove('clicked');
})

mknop3.addEventListener("click", function(){
    merk3.scrollIntoView({ block: "center", inline: "start" });

    mknop3.classList.remove('unclicked');
    mknop3.classList.add('clicked');
    
    mknop1.classList.add('unclicked');
    mknop1.classList.remove('clicked');
    mknop2.classList.add('unclicked');
    mknop2.classList.remove('clicked');
    mknop4.classList.add('unclicked');
    mknop4.classList.remove('clicked');
})

mknop4.addEventListener("click", function(){
    merk4.scrollIntoView({ block: "center", inline: "start" });

    mknop4.classList.remove('unclicked');
    mknop4.classList.add('clicked');
    
    mknop1.classList.add('unclicked');
    mknop1.classList.remove('clicked');
    mknop2.classList.add('unclicked');
    mknop2.classList.remove('clicked');
    mknop3.classList.add('unclicked');
    mknop3.classList.remove('clicked');
})
    




spooky.addEventListener("click", function(){

    if(open1=='ja'){
        dropdwn1.classList.remove('open');
        open1 = 'nee'
    }
    else{
        dropdwn1.classList.add('open');
        open1 = 'ja'
    }

})


shop.addEventListener("click", function(){

    if(shopopen=='ja'){
        ddshop.classList.remove('open');
        shopopen = 'nee'
    }
    else{
        ddshop.classList.add('open');
        shopopen = 'ja'
    }

})


corp.addEventListener("click", function(){

    if(corpopen=='ja'){
        ddcorp.classList.remove('open');
        corpopen = 'nee'
    }
    else{
        ddcorp.classList.add('open');
        corpopen = 'ja'
    }

})



help.addEventListener("click", function(){

    if(helpopen=='ja'){
        ddhelp.classList.remove('open');
        helpopen = 'nee'
    }
    else{
        ddhelp.classList.add('open');
        helpopen = 'ja'
    }

})