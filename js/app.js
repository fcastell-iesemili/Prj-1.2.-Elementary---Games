let v_game_name = document.getElementById("game_name");

let v_game_pegi = document.getElementById("game_pegi");

let v_game_developer = document.getElementById("game_developer");


//FUNCTION TO ADD NEW GAME
//----------------------------------------------------------------------

function Add_New_Game() {

  //----------

  let v_genre_select = document.getElementById("game_gnre").selectedIndex;
  let v_game_genre = document.getElementsByTagName("option")[v_genre_select].value;

  //----------

  //----------

  let v_game_relese = document.getElementById("game_release").value;

  let NewDate = new Date(v_game_relese);

  let Year = NewDate.getFullYear();
  let Month = NewDate.getMonth();
  let Day = NewDate.getDate();

  let Time = Day + "/" + Month + "/" + Year;

  let v_game_release_time = Time;

  //----------

  for (let i = 0; i < 1; i++) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");

    let text1 = document.createTextNode("#");
    let text2 = document.createTextNode(v_game_name.value);
    let text3 = document.createTextNode(v_game_developer.value);
    let text4 = document.createTextNode(v_game_release_time);
    let text5 = document.createTextNode(v_game_pegi.value);
    let text6 = document.createTextNode(v_game_genre);

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);
    td6.appendChild(text6);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    table_games.appendChild(tr);
  }
}

//----------------------------------------------------------------------

//VALIDATE NAME
//-----------------------------------------------------------------------------------------------------------

function Validate_Name_Game() {

  let v_game_name_v = document.getElementById("game_name").value;


  if (v_game_name_v.length == 0) {
    alert("No has escrito nada en el nombre del juego");

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

  let v_game_pegi_age = document.getElementById("game_pegi").value;


  if (v_game_pegi_age.length == 0 || v_game_pegi_age >= 19) {
    alert("Revisa el campo PEGI ");

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

  let v_game_developer_v = document.getElementById("game_developer").value;


  if (v_game_developer_v.length == 0) {
    alert("No has escrito nada en el campo 'Desenvolupador' ");

    document.getElementById("game_developer").focus();

    return callback(false);
  } else {
    return true;
  }
}

//-----------------------------------------------------------------------------------------------------------

//FUNCTION VALIDATION
//-----------------------------------------------------------------------------------------------------------

function Function_Games() {
  Validate_Name_Game();
  Validate_Pegi();
  Validate_Developer();
  Add_New_Game();
}

//-----------------------------------------------------------------------------------------------------------