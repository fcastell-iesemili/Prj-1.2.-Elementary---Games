//VARIABLES GENERALS USER
//----------------------------------------------------------------------

let v_game_name = document.getElementById("game_name");
let v_game_release = document.getElementById("game_release");
let v_game_pegi = document.getElementById("game_pegi");
let v_game_developer = document.getElementById("game_developer");

//----------

let v_genre_select = document.getElementById("game_gnre").selectedIndex;
let v_game_genre = (document.getElementsByTagName("option")[v_genre_select].value);

//----------
//----------

let NewDate = new Date(v_game_release);

let Year = NewDate.getFullYear();
let Month = NewDate.getMonth();
let Day = NewDate.getDate();

var Time = Day + "/" + Month + "/" + Year;

let v_game_release_time = Time;

//----------

//----------------------------------------------------------------------

//FUNCTION TO ADD NEW GAME

function Add_New_Game() {

    let table = document.createElement('table');

    for (let i = 0; i < 1; i++) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');

        let text1 = document.createTextNode('#');
        let text2 = document.createTextNode('v_game_name');
        let text3 = document.createTextNode('v_game_release');
        let text4 = document.createTextNode('v_game_pegi');
        let text5 = document.createTextNode('v_game_developer');
        let text6 = document.createTextNode('v_game_genre');

        td1.appendChild("#");
        td2.appendChild(v_game_name);
        td3.appendChild(v_game_developer);
        td4.appendChild(v_game_release_time);
        td5.appendChild(v_game_pegi);
        td6.appendChild(v_game_genre);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);

        table.appendChild(tr);

        table_games.appendChild(table);
    }
}


// Checks data from the form fields
//-----------------------------------------------------------------------------------------------------------


//VALIDATE NAME
//-----------------------------------------------------------------------------------------------------------

function Validate_Name_Game() {

    if (v_game_name.length == 0) {

        alert("No has escrito nada en el nombre del juego")

        document.getElementById("game_name").focus();

        return callback(false);

    }
    else {
        return true;
    }
}

//-----------------------------------------------------------------------------------------------------------


//VALIDATE +18 (PEGI)
//-----------------------------------------------------------------------------------------------------------
function Validate_Pegi() {

    if (v_game_pegi.length == 0 || v_game_pegi <= 18) {

        alert("Revisa el campo PEGI ")

        document.getElementById("game_pegi").focus();

        return callback(false);

    }
    else {
        return true;
    }
}

//-----------------------------------------------------------------------------------------------------------


//VALIDATE DESENVOLOPER
//-----------------------------------------------------------------------------------------------------------

function Validate_Developer() {

    if (v_game_developer.length == 0) {

        alert("No has escrito nada en el campo 'Desenvolupador' ")

        document.getElementById("game_developer").focus();

        return callback(false);

    }
    else {
        return true;
    }
}

//-----------------------------------------------------------------------------------------------------------


//FUNCTION VALIDATION
//-----------------------------------------------------------------------------------------------------------

function All_Functions() {

    Validate_Name_Game(); Validate_Pegi(); Validate_Developer(); Add_New_Game();
}

//-----------------------------------------------------------------------------------------------------------