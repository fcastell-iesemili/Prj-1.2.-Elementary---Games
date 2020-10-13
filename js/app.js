import { Validate_Name_Game, Validate_Pegi, Validate_Developer } from "./Validate.js";
import { Add_New_Game } from "./New_Game.js";


const saved_games = [["Star Wars Jedi Fallen Order", "Five Start Studio", "12/12/2019", "16", "action"],
["Terminator", "Marvel Studio", "12/12/2019", "16", "action"],
["Halo", "Pixel Studio", "12/12/2019", "16", "action"],
]

let i;

for (i = 0; i < saved_games.length; i++) {

  const var_game_name = saved_games[i][0];
  const var_game_developer = saved_games[i][1];
  const var_game_release = saved_games[i][2];
  const var_game_pegi = saved_games[i][3];
  const var_game_genre = saved_games[i][4];

  for (let i = 0; i < 1; i++) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");

    let text1 = document.createTextNode("#");
    let text2 = document.createTextNode(var_game_name);
    let text3 = document.createTextNode(var_game_developer);
    let text4 = document.createTextNode(var_game_release);
    let text5 = document.createTextNode(var_game_pegi);
    let text6 = document.createTextNode(var_game_genre);

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


document.getElementById("btn-addGame").addEventListener("click", function () {
  Validate_Name_Game();
  Validate_Pegi();
  Validate_Developer();
  Add_New_Game();
});