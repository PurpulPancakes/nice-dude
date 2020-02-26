"use strict";

function swapStyleSheet(sheet){
    document.getElementById("theme").setAttribute("href", sheet);
    /*document.getElementById("background").innerHTML = '<img id="backImg" src="ceo_temp.jpg" alt="Todd" />';
    document.getElementById("buttons").innerHTML = "<button onclick='swapStyleSheetSans('themeAbout1.css')'>Theme 1</button><button onclick='swapStyleSheet('themeAbout2.css')'>Theme 2</button><button onclick='swapStyleSheet('themeAbout3.css')'>Theme 3</button><button onclick='swapStyleSheet('themeAbout4.css')'>Theme 4</button>";
    document.getElementById("about").innerHTML = "<p>Aloha, and welcome to Nice Dude, a beach-friendly company since 1820.<br><br>Here at Nice Dude, we love surfing, and decided to support our radical wave-riding friends with <del>overpriced</del> <strong>affordable</strong> subscriptions. For just a few dollars a month, you can get exclusive mystery items that will have you set for a gnarly time in the water.<br><br>Our goal since the start has been the evolution of the surfing community. Our founder, Tobias Howard, was a young Englishman who discovered surfing when he stumbled across Hawaiian surfers on his vacation to their territory. Their absolutely mental skills convinced Tobias to invest in their livelihood, and since then we have been dedicated to providing supplies for up-and-coming grommets, using <del>unfairly expensive</del> random boxes full of <del>cheaply made</del> equipment that will make you as stylish as Duke Kahanamoku himself.<br><br>What are you waiting for? It's time to bail your average surf shop and join the world's #1 <del>and only</del> surfing lootbox service! Be the kahuna of your local beach!</p>";
    document.getElementById("title").innerHTML = "ABOUT";
    document.getElementById("header").innerHTML = "<section id='stuffInside'><a><img src='logo.png' alt='Logo'/></a><a href=''><h2>Test1</h2></a><a href=''><h2>Test2</h2></a><a href=''><h2>Test3</h2></a><a href=''><h2>Test4</h2></a></section>";*/
}

function swapStyleSheetSans(sheet){
    document.getElementById('theme').setAttribute('href', sheet);
}

function swapStyleSheetSansChange(){
    document.getElementById("background").innerHTML = '<img id="backImg" src="sansdance.gif" alt="Todd" />';
    document.getElementById("buttons").innerHTML = "<button onclick='swapStyleSheetSans('themeAbout1.css')'>FIGHT</button><button onclick='swapStyleSheet('themeAbout2.css')'>ACT</button><button onclick='swapStyleSheet('themeAbout3.css')'>ITEM</button><button onclick='swapStyleSheet('themeAbout4.css')'>SPARE</button>";
    document.getElementById("about").innerHTML = "<p>* You feel like you're going to have a sansational time.</p>";
    document.getElementById("title").innerHTML = "";
    document.getElementById("stuffInside").innerHTML = '<a href="index.html"><h2>Home</h2></a></a><a href="box.html"><h2>Boxes</h2></a><a href="about.html"><h2>About</h2></a><a href="faq.html"><h2>FAQ</h2></a><a href="sitepage.html"><h2>Site Map</h2></a><audio id = "music" src="megalovania.mp3" autoplay loop></audio>';
}

function fix(){
    document.getElementById("background").innerHTML = '<img id="backImg" src="ceo_temp.jpg" alt="Todd" />';
    document.getElementById("buttons").innerHTML = "<button onclick='swapStyleSheetSans('themeAbout1.css')'>Theme 1</button><button onclick='swapStyleSheet('themeAbout2.css')'>Theme 2</button><button onclick='swapStyleSheet('themeAbout3.css')'>Theme 3</button><button onclick='swapStyleSheet('themeAbout4.css')'>Theme 4</button>";
    document.getElementById("about").innerHTML = "<p>Aloha, and welcome to Nice Dude, a beach-friendly company since 1820.<br><br>Here at Nice Dude, we love surfing, and decided to support our radical wave-riding friends with <del>overpriced</del> <strong>affordable</strong> subscriptions. For just a few dollars a month, you can get exclusive mystery items that will have you set for a gnarly time in the water.<br><br>Our goal since the start has been the evolution of the surfing community. Our founder, Tobias Howard, was a young Englishman who discovered surfing when he stumbled across Hawaiian surfers on his vacation to their territory. Their absolutely mental skills convinced Tobias to invest in their livelihood, and since then we have been dedicated to providing supplies for up-and-coming grommets, using <del>unfairly expensive</del> random boxes full of <del>cheaply made</del> equipment that will make you as stylish as Duke Kahanamoku himself.<br><br>What are you waiting for? It's time to bail your average surf shop and join the world's #1 <del>and only</del> surfing lootbox service! Be the kahuna of your local beach!</p>";
    document.getElementById("title").innerHTML = "ABOUT";
    document.getElementById("header").innerHTML = "<section id='stuffInside'><a><img src='logo.png' alt='Logo'/></a><a href=''><h2>Test1</h2></a><a href=''><h2>Test2</h2></a><a href=''><h2>Test3</h2></a><a href=''><h2>Test4</h2></a></section>";
}