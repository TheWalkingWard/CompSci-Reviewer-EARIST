function Hint1() {
    document.getElementById("Explain01").innerHTML = "Dragon Baller yun men";
}

function ExplainWrong1() {
    document.getElementById("Explain01").innerHTML = "A. Si JahredMario yon engot";
    document.getElementById("btn-changeRed1").className = "btn btn-danger";
    document.getElementById("btn-changeRed01").className = "btn btn-danger";
    document.getElementById("btn-changeRed001").className = "btn btn-danger";
    document.getElementById("btn-changeGreen1").className = "btn btn-success";

    document.getElementById("btn-changeRed1").disabled = true;
    document.getElementById("btn-changeRed01").disabled = true;
    document.getElementById("btn-changeRed001").disabled = true;
    document.getElementById("btn-changeGreen1").disabled = true;
    document.getElementById("Hint01").disabled = true;
}

function ExplainCorrect1() {
    document.getElementById("Explain01").innerHTML = "Nice! Si Jahred si Kakarot!";
    
    document.getElementById("btn-changeGreen1").className = "btn btn-success";
    document.getElementById("btn-changeRed1").className = "btn btn-danger";
    document.getElementById("btn-changeRed01").className = "btn btn-danger";
    document.getElementById("btn-changeRed001").className = "btn btn-danger";

    document.getElementById("btn-changeRed1").disabled = true;
    document.getElementById("btn-changeRed01").disabled = true;
    document.getElementById("btn-changeRed001").disabled = true;
    document.getElementById("btn-changeGreen1").disabled = true;
    document.getElementById("Hint01").disabled = true;
}



function Hint2() {
    document.getElementById("Explain02").innerHTML = "Close ni Baccay yun";
}

function ExplainWrong2() {
    document.getElementById("Explain02").innerHTML = "D. Si Usog pa rin nukaba";
    document.getElementById("btn-changeRed2").className = "btn btn-danger";
    document.getElementById("btn-changeRed02").className = "btn btn-danger";
    document.getElementById("btn-changeRed002").className = "btn btn-danger";
    document.getElementById("btn-changeGreen2").className = "btn btn-success";

    document.getElementById("btn-changeRed2").disabled = true;
    document.getElementById("btn-changeRed02").disabled = true;
    document.getElementById("btn-changeRed002").disabled = true;
    document.getElementById("btn-changeGreen2").disabled = true;
    document.getElementById("Hint02").disabled = true;
}

function ExplainCorrect2() {
    document.getElementById("Explain02").innerHTML = "Nice! Si Usog nga!";
    
    document.getElementById("btn-changeGreen2").className = "btn btn-success";
    document.getElementById("btn-changeRed2").className = "btn btn-danger";
    document.getElementById("btn-changeRed02").className = "btn btn-danger";
    document.getElementById("btn-changeRed002").className = "btn btn-danger";

    document.getElementById("btn-changeRed2").disabled = true;
    document.getElementById("btn-changeRed02").disabled = true;
    document.getElementById("btn-changeRed002").disabled = true;
    document.getElementById("btn-changeGreen2").disabled = true;
    document.getElementById("Hint02").disabled = true;
}