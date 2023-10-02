# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>

  ### Auteur:
  Mara de Bruijn

  #### Je startniveau:
  Ik begin met blauw, maar doe hierbij ook mee met rood wanneer ik kan.

  #### Je focus:
  surface plane
 
</details>





## Je website

<details open>

  ### Je opdracht:
  https://www2.hm.com/nl_nl/index.html

  #### Screenshot(s) van de pagina (small screen): 
  H&M home pagina (de website is geupdate, dus ik heb een aantal foto's gebruikt die je niet in de screenshots terug ziet)
  <img src="readme-images/ss1.png" width="375px" alt="de home-pagina van de H&M met alle verschillende sections">
  <img src="readme-images/ss2.png" width="375px" alt="">
  <img src="readme-images/ss3.png" width="375px" alt="">
  <img src="readme-images/ss4.png" width="375px" alt="">
  <img src="readme-images/ss5.png" width="375px" alt="">

  
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>

  ### Bevindingen
  Lijst met bevindingen die in de test naar voren kwamen:
  
  - Veel gebruik gemaakt van div

  - Geen h1

  - Geen alt text

  - Alle fotos hadden verwarrende namen, zoals asdkh6ad99.jpg

  - Een aantal links zien er niet uit als links, maar als normale tekst

  - Wel werkt de focus state en screenreader goed


</details>



## Breakdownschets (week 1)

<details>

  ### de hele pagina: 
  <img src="readme-images/bdschets1.png" width="375px" alt="breakdown van de hele pagina">

  ### dynamisch deel: 
  <img src="readme-images/bdschets2.png" width="375px" alt="breakdown van een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>

  ### Stand van zaken
  Op dit moment ben ik vooral bezig met alle content van de website over te zetten naar de mijne. De header heb ik al bovenaan staan, en hij gaat ook mee wanneer je scrollt.


  ### Vragen voor tijdens de meeting
  - is er iets waar je beter in het begin al rekening mee kunt houden?
  - mogen classes, of moet alles met nth of type?


  ### Verslag van meeting

  - goed opletten waar ik classes gebruik
  - verder zo door gaan

</details>





## Voortgang 2 (week 3)

<details>

  ### Stand van zaken
  Op dit moment ben ik bezig met de horizontale secties scrollable te maken, en dan ook de knopjes mee te laten bewegen.


  ### Vragen voor tijdens de meeting
  - hoe laat ik de pagina alleen horizontaal scrollen, en niet verticaal?
  - is de manier waarop ik sections gebruik oke?
  


  ### Verslag van meeting

  - horiztontaal scrollen blijkt erg lastig, ik moet nog thuis verder kijken
  - sections zijn oke

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>

  ### Bevindingen
  Lijst met verbeteringen en dingen waar nog aan gewerkt kan worden:
  
  - geen divjes

  - alle foto's hebben nu alt tekst

  - de bestanden hebben logischere namen, en zijn makkelijker te onthouden

  - list content zit in een list

  - audio speelt niet van zichzelf af, moet getriggered worden

  - de focus state gaat niet over buttons heen, maar dat kan een probleem van de laptop zelf zijn

  - nog geen h1, die moet bij het eerste plaatje komen

</details>





## Voortgang 3 (week 4)

<details>

  ### Stand van zaken
  Mijn website is bijna af. Ik ben op dit moment eigenlijk vooral bezig met puntjes op de i te zetten.


  ### Vragen voor tijdens de meeting
  - is er iets waar ik dringend aandacht aan moet besteden?
  - is deze pagina genoeg, of moet ik ook nog een tweede toevoegen?

  ### Verslag van meeting

  - deze pagina is genoeg
  - vooral nog bezig met de extra's van de surface plane

</details>





## Eindgesprek (week 5)

<details>

  ### Je uitkomst - karakteristiek screenshots:

  de surface plane elementen die ik heb gebruikt:
  - animatie (wishlist)
  - audio (wishlist)
  - dom-manipulatie (classes verwijderen en toevoegen, tekst aanpassen met java (dat laatste is ook mijn easteregg!!))
  - advanced positioning (met z-index gewerkt, en position: absolute bij de header)
  - scroll animatie (scroll-behaviour: smooth bij alle horizontale scroll-mogelijkheden)
  
  - micro-interactie (bij het uitklappen van het 'spooky' dropdown menu, veranderd het plusje in een minnetje. Ook wanneer je over een navigatie bolletje hovered, wordt de border rood. Als je hierop klikt, wordt deze helemaal rood)

  <img src="readme-images/eind1.png" width="375px" alt="mijn eindoplevering voor FED">
  <img src="readme-images/eind2.png" width="375px" alt="">
  <img src="readme-images/eind3.png" width="375px" alt="">
  <img src="readme-images/eind4.png" width="375px" alt="">
  <img src="readme-images/eind5.png" width="375px" alt="">


  ### Dit ging goed/Heb ik geleerd: 
  Iets waar ik echt trots op ben is het feit dat wanneer je op en rond knopje klikt, de pagina ook echt door-scrollt tot je bij het gewenste plaatje bent. Ook ben ik erg blij met mijn grids. Voor deze opdracht wist ik niet eens dat display: grid; een optie was, dus ik vind dat ik het prima gedaan heb.  

  <img src="readme-images/slay.png" width="375px" alt="mijn grid en knopjes om te scrollen">


  ### Dit was lastig/Is niet gelukt:
  Het lukte mij helaas niet omervoor te zorgen dat wanneer de gebruiker handmatig scrollt, de bolletjes ook meebewegen en rood worden op de juiste slide.

  <img src="readme-images/foutss.png" width="375px" alt="foto war je kunt zien dat de knopjes niet overeen komen met de scrollbar">
</details>





## Bronnenlijst

<details open>

  1. https://www.w3schools.com/css/css3_animations.asp
  2. https://linuxhint.com/rotate-animation-css/
  3. https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element
  4. https://codepen.io/sosuke/pen/Pjoqqp
  5. Evi Wammes (klasgenoot)
  6. Marten Moolenaar (docent)
  7. alle opdrachten uit de les
  8. https://cssgridgarden.com/#nl
  9. https://www.w3schools.com/html/html_favicon.asp
  10. https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

</details>