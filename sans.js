"use strict";
function swapStyleSheetSans(sheet){
    document.getElementById('theme').setAttribute('href', sheet);
    document.getElementById("background").innerHTML = '<img id="backImg" src="sansdance.gif" alt="Todd" />';
    document.getElementById("buttons").innerHTML = '<button type="button" onclick="swapStyleSheetSans("themeAbout1.css")">FIGHT</button><button type="button" name="" onclick="">ACT</button><button type="button" name="" onclick="">ITEM</button><button type="button" name="" onclick="">SPARE</button>';
    document.getElementById("about").innerHTML = "<p>* You feel like you're going to have a sansational time.</p>";
    document.getElementById("title").innerHTML = "";
    document.getElementById("header").innerHTML = "<section id='stuffInside'><a><img src='logo.png' alt='Logo'/></a><a href=''><h2>Test1</h2></a><a href=''><h2>Test2</h2></a><a href=''><h2>Test3</h2></a><a href=''><h2>Test4</h2></a></section><audio id = 'music' src='megalovania.mp3' autoplay loop></audio>";
}

function audio(){
    document.getElementById("music").setAttribute("src","megalovania.mp3")
}