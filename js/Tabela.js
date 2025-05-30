

class gra {
    constructor (nazwa, platofrma, rank, wydawca, gatunek) {
        this.nazwa = nazwa;   
        this.platofrma = platofrma;
        this.rank = rank;
        this.wydawca = wydawca;
        this.gatunek = gatunek;
    }
}


function gry(nazwa, platofrma, rank, wydawca, gatunek) {
    this.nazwa = nazwa;   
    this.platofrma = platofrma;
    this.rank = rank;
    this.wydawca = wydawca;
    this.gatunek = gatunek;
}
var Tabela = new Array();
Tabela[0] = new gra('PLATFORMA', 'NAZWA', 'RANKING', 'PRODUCENT', 'GATUNEK');
Tabela[1] = new gry('PC', 'Wiedźmin 3', '1', 'CD Projekt Red', 'RPG');
Tabela[2] = new gry('PS4', 'God of War 4', '2', 'Sony Ent.', 'RPG');
Tabela[3] = new gry('Nintendo', 'Metro Redux', '3', '4A Games', 'Akcji');
Tabela[4] = new gry('PS3', 'Rayman 3', '4', 'Ubisoft', 'Dla Dzieci');
Tabela[5] = new gry('PC', 'Outlast 2', '5', 'Red Barrels', 'Horror');
Tabela[6] = new gry('Nintendo', 'Zelda', '6', 'Nintendo', 'RPG');
Tabela[7] = new gry('PC', 'Days Gone', '7', 'Bend Studio', 'Przygodowe');
Tabela[8] = new gry('PS3', 'COD:MW3', '8', 'Infinity Ward', 'Akcji');
Tabela[9] = new gry('PS4', 'Dark Souls 3', '9', 'FromSoftware', 'RPG');
Tabela[10] = new gry('Xbox', 'Watch Dogs 2', '10', 'Ubisoft', 'Akcji');

function wyswietlTabele(Tab) {
    
    var txt = '';

  
    for (var x = 0; x < Tab.length; x++) {
        txt += '<tr>';
        txt += '<td>' + Tab[x].rank + '</td>';
        txt += '<td>' + Tab[x].nazwa + '</td>';
        txt += '<td>' + Tab[x].platofrma + '</td>';
        txt += '<td>' + Tab[x].wydawca + '</td>';
        txt += '<td>' + Tab[x].gatunek + '</td>';
        txt += '</tr>';
    }

   
    var trescTab = document.getElementById("gra");
   
    trescTab.innerHTML = txt;
}
