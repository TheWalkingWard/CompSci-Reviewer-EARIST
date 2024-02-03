function Hint1() {
    document.getElementById("Explain01").innerHTML = "contiguous and adjacent memory locations";
}

function ExplainWrong1() {
    // document.getElementById("Explain01").innerHTML = "Wrong Answer showing";
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
    // document.getElementById("Explain01").innerHTML = "Sample Correct Answer";
    
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