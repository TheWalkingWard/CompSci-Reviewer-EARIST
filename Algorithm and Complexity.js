function Hint1() {
    document.getElementById("Explain01").innerHTML = "Example Hint";
}

function ExplainWrong1() {
    document.getElementById("Explain01").innerHTML = "Wrong Answer showing";
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
    document.getElementById("Explain01").innerHTML = "Sample Correct Answer";
    
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
    document.getElementById("Explain02").innerHTML = "Hint 2";
}

function ExplainWrong2() {
    document.getElementById("Explain02").innerHTML = "Wrong Ans 2";
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
    document.getElementById("Explain02").innerHTML = "Correct Ans 2";
    
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