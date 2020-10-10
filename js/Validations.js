export function Validations() {

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


        if (v_game_pegi_age.length == 0 || v_game_pegi_age >= 19 || v_game_pegi_age == 0 || v_game_pegi_age == 1 || v_game_pegi_age == 2 || v_game_pegi_age == 4 || v_game_pegi_age == 5 || v_game_pegi_age == 6 || v_game_pegi_age == 8 || v_game_pegi_age == 9 || v_game_pegi_age == 10 || v_game_pegi_age == 11 || v_game_pegi_age == 13 || v_game_pegi_age == 14 || v_game_pegi_age == 15 || v_game_pegi_age == 17) {
            alert("Revisa el campo PEGI");

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
}