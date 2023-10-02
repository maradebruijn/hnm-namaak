// JavaScript Document
console.log("hi");


// variabelen voor al mijn rode navigatie knopjes

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

// variabelen voor al mijn verschillende slides waar je doorheen kunt scrollen

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

// variabelen voor mijn dropdown menus

var shop = document.querySelector("#shop article")
var ddshop = document.querySelector("#shop section")
var shopopen = 'nee'

var corp = document.querySelector("#corp article")
var ddcorp = document.querySelector("#corp section")
var corpopen = 'nee'

var help = document.querySelector("#help article")
var ddhelp = document.querySelector("#help section")
var helpopen = 'nee'

var spooky = document.querySelector(".spooky")
var dropdwn1 = document.querySelector(".spooky ul")
var open1 = 'nee'


// variabelen voor het korte soundeffect

var hart = document.querySelector("#heart")
var ting = new Audio("decidemp3-14575.mp3")
var danced = 'nee'

// variabel om de tekst aan te kunnen passen
var bron = document.querySelector('#bron')

//https://www.shecodes.io/athena/10151-how-to-change-text-when-clicking-in-javascript#:~:text=To%20change%20text%20when%20clicking%20in%20JavaScript%2C%20you%20can%20use,content%20using%20the%20textContent%20property.&text=%2F%2F%20HTML%20%3Cp%20id%3D%22,%2F%2F%20JavaScript%20const%20changeText%20%3D%20document.




// deze functies zorgen ervoor dat wanneer je op een rood naviagtie bolletje klikt, je naar een bepaalde slide
// wordt doorgestuurd. deze slide wordt zo naar het midden van jouw scherm gebracht


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
    


// deze functies zorgen ervoor dat de dropdown menus openen en sluiten wanneer je klikt

spooky.addEventListener("click", function(){

    if(open1=='ja'){
        dropdwn1.classList.remove('open');
        spooky.classList.remove('min');
        open1 = 'nee'
    }
    else{
        dropdwn1.classList.add('open');
        spooky.classList.add('min');
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


//deze functie zorgt ervoor dat er een kleine animatie afspeelt wanneer je op het hartje klikt

hart.addEventListener("click", function(){

    ting.play();

    if(danced=='nee'){
        hart.classList.add('dance');
        hart.classList.remove('rdance');
        danced = 'ja'
    }
    else{
        hart.classList.add('rdance');
        hart.classList.remove('dance');
        danced='nee'
    }
})


//dit zorgt ervoor dat de tekst helemaal onderaan de site wordt aangepast. dit is mijn easter egg :)

bron.addEventListener("click", function(){

    bron.textContent= "De inhoud van deze website is auteursrechtelijk beschermd en eigendom van H & M Hennes & Mauritz AB & Mara de Bruijn."

})