var ScoreCount = 0;

function Scoring() {
    document.getElementById("Score").innerHTML = ScoreCount;
}

function Hint1() {
    document.getElementById("Explain01").innerHTML = "group of programs that run on electronic devices.";
}

function ExplainWrong1() {
    document.getElementById("Explain01").innerHTML = "The correct answer is C. Application Software are a group of programs that run on electronic devices. These programs are designed for the user to carry out different tasks.";

    document.getElementById("btn-changeRed1").className = "btn btn-danger";
    document.getElementById("btn-changeRed01").className = "btn btn-danger";
    document.getElementById("btn-changeRed001").className = "btn btn-danger";
    document.getElementById("btn-changeGreen1").className = "btn btn-success";


    document.getElementById("ChoiceGreen1").style.color = "green";

    document.getElementById("ChoiceRed1").style.color = "red";
    document.getElementById("ChoiceRed01").style.color = "red";
    document.getElementById("ChoiceRed001").style.color = "red";

    document.getElementById("btn-changeRed1").disabled = true;
    document.getElementById("btn-changeRed01").disabled = true;
    document.getElementById("btn-changeRed001").disabled = true;
    document.getElementById("btn-changeGreen1").disabled = true;
    document.getElementById("Hint01").disabled = true;
}

function ExplainCorrect1() {
    ScoreCount++;
    Scoring();

    document.getElementById("Explain01").innerHTML = "Correct! Application Software are a group of programs that run on electronic devices. These programs are designed for the user to carry out different tasks.";

    document.getElementById("btn-changeRed1").className = "btn btn-danger";
    document.getElementById("btn-changeRed01").className = "btn btn-danger"; 
    document.getElementById("btn-changeRed001").className = "btn btn-danger";
    document.getElementById("btn-changeGreen1").className = "btn btn-success";


    document.getElementById("ChoiceGreen1").style.color = "green";

    document.getElementById("ChoiceRed1").style.color = "red";
    document.getElementById("ChoiceRed01").style.color = "red";
    document.getElementById("ChoiceRed001").style.color = "red";

    document.getElementById("btn-changeRed1").disabled = true;
    document.getElementById("btn-changeRed01").disabled = true;
    document.getElementById("btn-changeRed001").disabled = true;
    document.getElementById("btn-changeGreen1").disabled = true;
    document.getElementById("Hint01").disabled = true;

    
}





function Hint2() {
    document.getElementById("Explain02").innerHTML = "a place where a person or organization";
}

function ExplainWrong2() {
    document.getElementById("Explain02").innerHTML = "Correct answer is B. Address a place where a person or organization may be communicated with.";

    document.getElementById("btn-changeRed2").className = "btn btn-danger";
    document.getElementById("btn-changeRed02").className = "btn btn-danger";
    document.getElementById("btn-changeRed002").className = "btn btn-danger";
    document.getElementById("btn-changeGreen2").className = "btn btn-success";


    document.getElementById("ChoiceGreen2").style.color = "green";

    document.getElementById("ChoiceRed2").style.color = "red";
    document.getElementById("ChoiceRed02").style.color = "red";
    document.getElementById("ChoiceRed002").style.color = "red";

    document.getElementById("btn-changeRed2").disabled = true;
    document.getElementById("btn-changeRed02").disabled = true;
    document.getElementById("btn-changeRed002").disabled = true;
    document.getElementById("btn-changeGreen2").disabled = true;
    document.getElementById("Hint02").disabled = true;
}

function ExplainCorrect2() {
    ScoreCount++;
    Scoring();
    
    document.getElementById("Explain02").innerHTML = "Yes! Address a place where a person or organization may be communicated with.";

    document.getElementById("btn-changeRed2").className = "btn btn-danger";
    document.getElementById("btn-changeRed02").className = "btn btn-danger";
    document.getElementById("btn-changeRed002").className = "btn btn-danger";
    document.getElementById("btn-changeGreen2").className = "btn btn-success";


    document.getElementById("ChoiceGreen2").style.color = "green";

    document.getElementById("ChoiceRed2").style.color = "red";
    document.getElementById("ChoiceRed02").style.color = "red";
    document.getElementById("ChoiceRed002").style.color = "red";

    document.getElementById("btn-changeRed2").disabled = true;
    document.getElementById("btn-changeRed02").disabled = true;
    document.getElementById("btn-changeRed002").disabled = true;
    document.getElementById("btn-changeGreen2").disabled = true;
    document.getElementById("Hint02").disabled = true;
}





function Hint3() {
    document.getElementById("Explain03").innerHTML = "often used as a support language for software developers";
}

function ExplainWrong3() {
    document.getElementById("Explain03").innerHTML = "No! It's C. Python is often used as a support language for software developers, for build control and management, testing, and in many other ways.";

    document.getElementById("btn-changeRed3").className = "btn btn-danger";
    document.getElementById("btn-changeRed03").className = "btn btn-danger";
    document.getElementById("btn-changeRed003").className = "btn btn-danger";
    document.getElementById("btn-changeGreen3").className = "btn btn-success";


    document.getElementById("ChoiceGreen3").style.color = "green";

    document.getElementById("ChoiceRed3").style.color = "red";
    document.getElementById("ChoiceRed03").style.color = "red";
    document.getElementById("ChoiceRed003").style.color = "red";

    document.getElementById("btn-changeRed3").disabled = true;
    document.getElementById("btn-changeRed03").disabled = true;
    document.getElementById("btn-changeRed003").disabled = true;
    document.getElementById("btn-changeGreen3").disabled = true;
    document.getElementById("Hint03").disabled = true;
}

function ExplainCorrect3() {
    ScoreCount++;
    Scoring();

    document.getElementById("Explain03").innerHTML = "Nice one! Python is often used as a support language for software developers, for build control and management, testing, and in many other ways.";

    document.getElementById("btn-changeRed3").className = "btn btn-danger";
    document.getElementById("btn-changeRed03").className = "btn btn-danger";
    document.getElementById("btn-changeRed003").className = "btn btn-danger";
    document.getElementById("btn-changeGreen3").className = "btn btn-success";


    document.getElementById("ChoiceGreen3").style.color = "green";

    document.getElementById("ChoiceRed3").style.color = "red";
    document.getElementById("ChoiceRed03").style.color = "red";
    document.getElementById("ChoiceRed003").style.color = "red";

    document.getElementById("btn-changeRed3").disabled = true;
    document.getElementById("btn-changeRed03").disabled = true;
    document.getElementById("btn-changeRed003").disabled = true;
    document.getElementById("btn-changeGreen3").disabled = true;
    document.getElementById("Hint03").disabled = true;
}





function Hint4() {
    document.getElementById("Explain04").innerHTML = "a stylesheet language used to add layout and visual effects to HTML elements.";
}

function ExplainWrong4() {
    document.getElementById("Explain04").innerHTML = "It's B! Cascading Style Sheets it's a stylesheet language used to add layout and visual effects to HTML elements. CSS is used specifically for markup languages, in this case HTML.";

    document.getElementById("btn-changeRed4").className = "btn btn-danger";
    document.getElementById("btn-changeRed04").className = "btn btn-danger";
    document.getElementById("btn-changeRed004").className = "btn btn-danger";
    document.getElementById("btn-changeGreen4").className = "btn btn-success";


    document.getElementById("ChoiceGreen4").style.color = "green";

    document.getElementById("ChoiceRed4").style.color = "red";
    document.getElementById("ChoiceRed04").style.color = "red";
    document.getElementById("ChoiceRed004").style.color = "red";

    document.getElementById("btn-changeRed4").disabled = true;
    document.getElementById("btn-changeRed04").disabled = true;
    document.getElementById("btn-changeRed004").disabled = true;
    document.getElementById("btn-changeGreen4").disabled = true;
    document.getElementById("Hint04").disabled = true;
}

function ExplainCorrect4() {
    ScoreCount++;
    Scoring();

    document.getElementById("Explain04").innerHTML = "Yeah! Cascading Style Sheets it's a stylesheet language used to add layout and visual effects to HTML elements. CSS is used specifically for markup languages, in this case HTML.";

    document.getElementById("btn-changeRed4").className = "btn btn-danger";
    document.getElementById("btn-changeRed04").className = "btn btn-danger";
    document.getElementById("btn-changeRed004").className = "btn btn-danger";
    document.getElementById("btn-changeGreen4").className = "btn btn-success";


    document.getElementById("ChoiceGreen4").style.color = "green";

    document.getElementById("ChoiceRed4").style.color = "red";
    document.getElementById("ChoiceRed04").style.color = "red";
    document.getElementById("ChoiceRed004").style.color = "red";

    document.getElementById("btn-changeRed4").disabled = true;
    document.getElementById("btn-changeRed04").disabled = true;
    document.getElementById("btn-changeRed004").disabled = true;
    document.getElementById("btn-changeGreen4").disabled = true;
    document.getElementById("Hint04").disabled = true;
}





function Hint5() {
    document.getElementById("Explain05").innerHTML = "developed by Mark Elliot Zuckerberg.";
}

function ExplainWrong5() {
    document.getElementById("Explain05").innerHTML = "It's D! Facebook is developed by Mark Elliot Zuckerberg.";

    document.getElementById("btn-changeRed5").className = "btn btn-danger";
    document.getElementById("btn-changeRed05").className = "btn btn-danger";
    document.getElementById("btn-changeRed005").className = "btn btn-danger";
    document.getElementById("btn-changeGreen5").className = "btn btn-success";


    document.getElementById("ChoiceGreen5").style.color = "green";

    document.getElementById("ChoiceRed5").style.color = "red";
    document.getElementById("ChoiceRed05").style.color = "red";
    document.getElementById("ChoiceRed005").style.color = "red";

    document.getElementById("btn-changeRed5").disabled = true;
    document.getElementById("btn-changeRed05").disabled = true;
    document.getElementById("btn-changeRed005").disabled = true;
    document.getElementById("btn-changeGreen5").disabled = true;
    document.getElementById("Hint05").disabled = true;
}

function ExplainCorrect5() {
    ScoreCount++;
    Scoring();

    document.getElementById("Explain05").innerHTML = "Correct. Facebook is developed by Mark Elliot Zuckerberg.";

    document.getElementById("btn-changeRed5").className = "btn btn-danger";
    document.getElementById("btn-changeRed05").className = "btn btn-danger";
    document.getElementById("btn-changeRed005").className = "btn btn-danger";
    document.getElementById("btn-changeGreen5").className = "btn btn-success";


    document.getElementById("ChoiceGreen5").style.color = "green";

    document.getElementById("ChoiceRed5").style.color = "red";
    document.getElementById("ChoiceRed05").style.color = "red";
    document.getElementById("ChoiceRed005").style.color = "red";

    document.getElementById("btn-changeRed5").disabled = true;
    document.getElementById("btn-changeRed05").disabled = true;
    document.getElementById("btn-changeRed005").disabled = true;
    document.getElementById("btn-changeGreen5").disabled = true;
    document.getElementById("Hint05").disabled = true;
}





function Hint6() {
    document.getElementById("Explain06").innerHTML = "process of planning, designing, creating, testing, and deploying a software application";
}

function ExplainWrong6() {
    document.getElementById("Explain06").innerHTML = "It's A. App development software the process of planning, designing, creating, testing, and deploying a software application to perform various business operations.";

    document.getElementById("btn-changeRed6").className = "btn btn-danger";
    document.getElementById("btn-changeRed06").className = "btn btn-danger";
    document.getElementById("btn-changeRed006").className = "btn btn-danger";
    document.getElementById("btn-changeGreen6").className = "btn btn-success";


    document.getElementById("ChoiceGreen6").style.color = "green";

    document.getElementById("ChoiceRed6").style.color = "red";
    document.getElementById("ChoiceRed06").style.color = "red";
    document.getElementById("ChoiceRed006").style.color = "red";

    document.getElementById("btn-changeRed6").disabled = true;
    document.getElementById("btn-changeRed06").disabled = true;
    document.getElementById("btn-changeRed006").disabled = true;
    document.getElementById("btn-changeGreen6").disabled = true;
    document.getElementById("Hint06").disabled = true;
}

function ExplainCorrect6() {
    ScoreCount++;
    Scoring();

    document.getElementById("Explain06").innerHTML = "Yes! App development software the process of planning, designing, creating, testing, and deploying a software application to perform various business operations.";

    document.getElementById("btn-changeRed6").className = "btn btn-danger";
    document.getElementById("btn-changeRed06").className = "btn btn-danger";
    document.getElementById("btn-changeRed006").className = "btn btn-danger";
    document.getElementById("btn-changeGreen6").className = "btn btn-success";


    document.getElementById("ChoiceGreen6").style.color = "green";

    document.getElementById("ChoiceRed6").style.color = "red";
    document.getElementById("ChoiceRed06").style.color = "red";
    document.getElementById("ChoiceRed006").style.color = "red";

    document.getElementById("btn-changeRed6").disabled = true;
    document.getElementById("btn-changeRed06").disabled = true;
    document.getElementById("btn-changeRed006").disabled = true;
    document.getElementById("btn-changeGreen6").disabled = true;
    document.getElementById("Hint06").disabled = true;
}





function Hint7() {
    document.getElementById("Explain07").innerHTML = "mobile handset";
}

function ExplainWrong7() {
    document.getElementById("Explain07").innerHTML = "No, it's A. Tapping in a mobile handset, an app is executed by tapping.";

    document.getElementById("btn-changeRed7").className = "btn btn-danger";
    document.getElementById("btn-changeRed07").className = "btn btn-danger";
    document.getElementById("btn-changeRed007").className = "btn btn-danger";
    document.getElementById("btn-changeGreen7").className = "btn btn-success";


    document.getElementById("ChoiceGreen7").style.color = "green";

    document.getElementById("ChoiceRed7").style.color = "red";
    document.getElementById("ChoiceRed07").style.color = "red";
    document.getElementById("ChoiceRed007").style.color = "red";

    document.getElementById("btn-changeRed7").disabled = true;
    document.getElementById("btn-changeRed07").disabled = true;
    document.getElementById("btn-changeRed007").disabled = true;
    document.getElementById("btn-changeGreen7").disabled = true;
    document.getElementById("Hint07").disabled = true;
}

function ExplainCorrect7() {
    ScoreCount++;
    Scoring();

    document.getElementById("Explain07").innerHTML = "Nice! Tapping in a mobile handset, an app is executed by tapping.";

    document.getElementById("btn-changeRed7").className = "btn btn-danger";
    document.getElementById("btn-changeRed07").className = "btn btn-danger";
    document.getElementById("btn-changeRed007").className = "btn btn-danger";
    document.getElementById("btn-changeGreen7").className = "btn btn-success";


    document.getElementById("ChoiceGreen7").style.color = "green";

    document.getElementById("ChoiceRed7").style.color = "red";
    document.getElementById("ChoiceRed07").style.color = "red";
    document.getElementById("ChoiceRed007").style.color = "red";

    document.getElementById("btn-changeRed7").disabled = true;
    document.getElementById("btn-changeRed07").disabled = true;
    document.getElementById("btn-changeRed007").disabled = true;
    document.getElementById("btn-changeGreen7").disabled = true;
    document.getElementById("Hint07").disabled = true;
}





function Hint8() {
    document.getElementById("Explain08").innerHTML = "native app and hence";
}

function ExplainWrong8() {
    document.getElementById("Explain08").innerHTML = "It's D! Calculator is a native app and hence, it can be used offline.";

    document.getElementById("btn-changeRed8").className = "btn btn-danger";
    document.getElementById("btn-changeRed08").className = "btn btn-danger";
    document.getElementById("btn-changeRed008").className = "btn btn-danger";
    document.getElementById("btn-changeGreen8").className = "btn btn-success";


    document.getElementById("ChoiceGreen8").style.color = "green";

    document.getElementById("ChoiceRed8").style.color = "red";
    document.getElementById("ChoiceRed08").style.color = "red";
    document.getElementById("ChoiceRed008").style.color = "red";

    document.getElementById("btn-changeRed8").disabled = true;
    document.getElementById("btn-changeRed08").disabled = true;
    document.getElementById("btn-changeRed008").disabled = true;
    document.getElementById("btn-changeGreen8").disabled = true;
    document.getElementById("Hint08").disabled = true;
}

function ExplainCorrect8() {
    ScoreCount++;
    Scoring();

    document.getElementById("Explain08").innerHTML = "Yep. Calculator is a native app and hence, it can be used offline.";

    document.getElementById("btn-changeRed8").className = "btn btn-danger";
    document.getElementById("btn-changeRed08").className = "btn btn-danger";
    document.getElementById("btn-changeRed008").className = "btn btn-danger";
    document.getElementById("btn-changeGreen8").className = "btn btn-success";


    document.getElementById("ChoiceGreen8").style.color = "green";

    document.getElementById("ChoiceRed8").style.color = "red";
    document.getElementById("ChoiceRed08").style.color = "red";
    document.getElementById("ChoiceRed008").style.color = "red";

    document.getElementById("btn-changeRed8").disabled = true;
    document.getElementById("btn-changeRed08").disabled = true;
    document.getElementById("btn-changeRed008").disabled = true;
    document.getElementById("btn-changeGreen8").disabled = true;
    document.getElementById("Hint08").disabled = true;
}





function Hint9() {
    document.getElementById("Explain09").innerHTML = "the process of planning, designing, creating, testing, and deploying a software application ";
}

function ExplainWrong9() {
    document.getElementById("Explain09").innerHTML = "It's A! Application the process of planning, designing, creating, testing, and deploying a software application to perform various business operations.";

    document.getElementById("btn-changeRed9").className = "btn btn-danger";
    document.getElementById("btn-changeRed09").className = "btn btn-danger";
    document.getElementById("btn-changeRed009").className = "btn btn-danger";
    document.getElementById("btn-changeGreen9").className = "btn btn-success";


    document.getElementById("ChoiceGreen9").style.color = "green";

    document.getElementById("ChoiceRed9").style.color = "red";
    document.getElementById("ChoiceRed09").style.color = "red";
    document.getElementById("ChoiceRed009").style.color = "red";

    document.getElementById("btn-changeRed9").disabled = true;
    document.getElementById("btn-changeRed09").disabled = true;
    document.getElementById("btn-changeRed009").disabled = true;
    document.getElementById("btn-changeGreen9").disabled = true;
    document.getElementById("Hint09").disabled = true;
}

function ExplainCorrect9() {
    ScoreCount++;
    Scoring();

    document.getElementById("Explain09").innerHTML = "Yay! Application the process of planning, designing, creating, testing, and deploying a software application to perform various business operations.";

    document.getElementById("btn-changeRed9").className = "btn btn-danger";
    document.getElementById("btn-changeRed09").className = "btn btn-danger";
    document.getElementById("btn-changeRed009").className = "btn btn-danger";
    document.getElementById("btn-changeGreen9").className = "btn btn-success";


    document.getElementById("ChoiceGreen9").style.color = "green";

    document.getElementById("ChoiceRed9").style.color = "red";
    document.getElementById("ChoiceRed09").style.color = "red";
    document.getElementById("ChoiceRed009").style.color = "red";

    document.getElementById("btn-changeRed9").disabled = true;
    document.getElementById("btn-changeRed09").disabled = true;
    document.getElementById("btn-changeRed009").disabled = true;
    document.getElementById("btn-changeGreen9").disabled = true;
    document.getElementById("Hint09").disabled = true;
}





function Hint10() {
    document.getElementById("Explain010").innerHTML = "official online store";
}

function ExplainWrong10() {
    document.getElementById("Explain010").innerHTML = "It's A. Google play Store is the official online store for digital media distributed by Google.";

    document.getElementById("btn-changeRed10").className = "btn btn-danger";
    document.getElementById("btn-changeRed010").className = "btn btn-danger";
    document.getElementById("btn-changeRed0010").className = "btn btn-danger";
    document.getElementById("btn-changeGreen10").className = "btn btn-success";


    document.getElementById("ChoiceGreen10").style.color = "green";

    document.getElementById("ChoiceRed10").style.color = "red";
    document.getElementById("ChoiceRed010").style.color = "red";
    document.getElementById("ChoiceRed0010").style.color = "red";

    document.getElementById("btn-changeRed10").disabled = true;
    document.getElementById("btn-changeRed010").disabled = true;
    document.getElementById("btn-changeRed0010").disabled = true;
    document.getElementById("btn-changeGreen10").disabled = true;
    document.getElementById("Hint010").disabled = true;
}

function ExplainCorrect10() {
    ScoreCount++;
    Scoring();

    document.getElementById("Explain010").innerHTML = "Yay! Google play Store is the official online store for digital media distributed by Google.";

    document.getElementById("btn-changeRed10").className = "btn btn-danger";
    document.getElementById("btn-changeRed010").className = "btn btn-danger";
    document.getElementById("btn-changeRed0010").className = "btn btn-danger";
    document.getElementById("btn-changeGreen10").className = "btn btn-success";


    document.getElementById("ChoiceGreen10").style.color = "green";

    document.getElementById("ChoiceRed10").style.color = "red";
    document.getElementById("ChoiceRed010").style.color = "red";
    document.getElementById("ChoiceRed0010").style.color = "red";

    document.getElementById("btn-changeRed10").disabled = true;
    document.getElementById("btn-changeRed010").disabled = true;
    document.getElementById("btn-changeRed0010").disabled = true;
    document.getElementById("btn-changeGreen10").disabled = true;
    document.getElementById("Hint010").disabled = true;
}