function player1() {
    let positionX = prompt("Nhập x:");
    let positionY = prompt("Nhập x:");
    data = "";
    board[positionX][positionY] = "x";
    for (let i = 0;i <5; i++){
        data += "<br>";
        for (let j = 0; j <5;j++){
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    b.innerHTML =  "<hr>" +data;

}
function player2() {
    let positionX = prompt("Nhập x:");
    let positionY = prompt("Nhập x:");
    data = "";
    board[positionX][positionY] = "O";
    for (let i = 0;i <5; i++){
        data += "<br>";
        for (let j = 0; j <5;j++){
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    b.innerHTML =  "<hr>" +data;

}