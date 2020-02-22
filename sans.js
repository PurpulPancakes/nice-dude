"use strict";
function swapStyleSheetSans(sheet){
    document.getElementById('theme').setAttribute('href', sheet);
    document.getElementById("background").innerHTML = '<img id="backImg" src="sansdance.gif" alt="Todd" />';
    document.getElementById("buttons").innerHTML = '<button type="button" onclick="swapStyleSheetSans("themeAbout1.css")">FIGHT</button><button type="button" name="" onclick="">ACT</button><button type="button" name="" onclick="">ITEM</button><button type="button" name="" onclick="">SPARE</button>';
}