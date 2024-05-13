let tris = 
[ "", "", "",    //0, 1, 2,
  "", "", "",    //3, 4, 5,
  "", "", "" ]   //6, 7, 8

let colors = ["rgb(248 113 113)", "rgb(251 146 60)", "rgb(250 204 21)", "rgb(163 230 53)", "rgb(45 212 191)", "rgb(34 211 238)"]

let player = "O";
let game = true;

function winner() {
    document.getElementById("player").innerHTML = player + " ha vinto la partita!";

    let index = Math.floor(Math.random() * colors.length)
    document.getElementById("player").style.color = colors[index]
    game = false;
}

function nextPlayer() {
    if(!game) return
    if(player == "X") {
        player = "O";
        document.getElementById("player").innerHTML = "Turno di: " + player;
    }
    else if (player == "O") {
        player = "X";
        document.getElementById("player").innerHTML = "Turno di: " + player;
    }
}
nextPlayer()

function resetGame() {
    game = true;
    nextPlayer()
    document.getElementById("player").style.color = "black";
    tris.forEach((el, i, arr) => {
        arr[i] = "";
    })
    let thElements = document.getElementById("table").getElementsByTagName("th");
    for (i = 0; thElements.length; i++){
        thElements[i].innerText = " "
    }
}

function checkGame() {
    if( (tris[0] == "X" && tris[1] == "X" && tris[2] == "X") || (tris[0] == "O" && tris[1] == "O" && tris[2] == "O")) { //first row
        return winner();
    }

    if( (tris[0] == "X" && tris[3] == "X" && tris[6] == "X") || (tris[0] == "O" && tris[3] == "O" && tris[6] == "O")) { //first col
        return winner();
    }

    if( (tris[3] == "X" && tris[4] == "X" && tris[5] == "X") || (tris[3] == "O" && tris[4] == "O" && tris[5] == "O")) { //second row
        return winner();
    } 

    if( (tris[1] == "X" && tris[4] == "X" && tris[7] == "X") || (tris[1] == "O" && tris[4] == "O" && tris[7] == "O")) { //second col
        return winner();
    }

    if( (tris[6] == "X" && tris[7] == "X" && tris[8] == "X") || (tris[6] == "O" && tris[7] == "O" && tris[8] == "O")) { //third row
        return winner();
    }

    if( (tris[2] == "X" && tris[5] == "X" && tris[8] == "X") || (tris[2] == "O" && tris[7] == "O" && tris[8] == "O")) { //third col
        return winner();
    }

    if( (tris[6] == "X" && tris[4] == "X" && tris[2] == "X") || (tris[6] == "O" && tris[4] && tris[2] == "O")) { // diagonal /
        return winner();
    }

    if( (tris[0] == "X" && tris[4] == "X" && tris[8] == "X") || (tris[0] == "O" && tris[4] == "O" && tris[8] == "O")) { // diagonal \
        return winner();
    }
}

function trisMove(cas) {

    if(!game) {
        document.getElementById("errors").innerHTML = "Partita terminata!"
        return setTimeout(() => {
            document.getElementById("errors").innerHTML = ""
        }, 5500);
    }

    if (tris[cas-1] == "") {
        tris[cas-1] = player;
        document.getElementById(cas).innerHTML = player ;

    } else {
        document.getElementById("errors").innerHTML = "Casella già occupata!"
        return setTimeout(() => {
            document.getElementById("errors").innerHTML = ""
        }, 3500);
    }

    checkGame()
    nextPlayer()
}