"use strict";
function lotto6aus49() {
    let aus49 = [];
     while (aus49.length < 6) {
    let number1 = Math.floor(Math.random() * 49) + 1;
    if (aus49.indexOf(number1) === -1) {
        aus49.push(number1);  
    }
}
     aus49 = aus49.sort(function (a, b) {return a - b;  });
     //console.log(aus49);
    
    let aus49Zusatz = [];
    while (aus49Zusatz.length < 1) {
    let number2 = Math.floor(Math.random() * 10);
    if (aus49Zusatz.indexOf(number2) === -1) {
        aus49Zusatz.push(number2);  
    }
}
     //console.log(aus49Zusatz);
     let lottostring = aus49.join(', ');
     let Lotto6aus49 = document.getElementById('Lotto6aus49');
     Lotto6aus49.textContent = "Lotto 6 aus 49: "+lottostring;
     let lottostringzusatz = aus49Zusatz.join(', ');
     let Lotto6aus49Zusatz = document.getElementById('Lotto6aus49Zusatz');
     Lotto6aus49Zusatz.textContent = "Zusatzzahl: "+lottostringzusatz;
    
     let outputElement1 = document.getElementById('Euro');
     outputElement1.innerHTML = '';
     let outputElement2 = document.getElementById('EuroZusatz');
     outputElement2.innerHTML = '';
    }

function eurojackpot() {
    let aus50 = [];
     while (aus50.length < 5) {
    let number3 = Math.floor(Math.random() * 50) + 1;
    if (aus50.indexOf(number3) === -1) {
        aus50.push(number3);  
    }
}
     aus50 = aus50.sort(function (a, b) {return a - b;  });
    
    let aus50Zusatz = [];
    while (aus50Zusatz.length < 2) {
    let number4 = Math.floor(Math.random() * 12)+1;
    if (aus50Zusatz.indexOf(number4) === -1) {
        aus50Zusatz.push(number4);  
    }
}
     aus50Zusatz = aus50Zusatz.sort(function (a, b) {return a - b;  });
     let eurostring = aus50.join(', ');
     let Euro = document.getElementById('Euro');
     Euro.textContent = "Eurojackpot: "+eurostring;
     let eurostringzusatz = aus50Zusatz.join(', ');
     let EuroZusatz = document.getElementById('EuroZusatz');
     EuroZusatz.textContent = "Zusatzzahlen: "+eurostringzusatz;
     
     let outputElement3 = document.getElementById('Lotto6aus49');
     outputElement3.innerHTML = '';
     let outputElement4 = document.getElementById('Lotto6aus49Zusatz');
     outputElement4.innerHTML = '';
    }


