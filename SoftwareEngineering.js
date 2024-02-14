var ScoreCount = 0;

function Scoring() {
    document.getElementById("Score").innerHTML = ScoreCount;
}

function Hint1() {
    document.getElementById("Explain01").innerHTML = "collection of programmes";
}

function ExplainWrong1() {
    document.getElementById("Explain01").innerHTML = "Wrong, it's A! Software is a collection of programmes; it also includes documentation and data setup to enable the programmes to function. Microsoft windows, excel, word, powerpoint, etc. are a few examples of software.";

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

    document.getElementById("Explain01").innerHTML = "Yes! Software is a collection of programmes; it also includes documentation and data setup to enable the programmes to function. Microsoft windows, excel, word, powerpoint, etc. are a few examples of software.";

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
    document.getElementById("Explain02").innerHTML = "application of engineering principles to the design";
}

function ExplainWrong2() {
    document.getElementById("Explain02").innerHTML = "Wrong it's C Software engineering is the application of engineering principles to the design, development, and support of software and it helps to solve the challenges of low-quality software projects.";

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

    document.getElementById("Explain02").innerHTML = "Correct answer C. Software engineering is the application of engineering principles to the design, development, and support of software and it helps to solve the challenges of low-quality software projects.";

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
    document.getElementById("Explain03").innerHTML = "Software Process Program at Carnegie Mellon University’s Institute (SEI) in the 1980s, and served as its director from 1986 through the early 1990s. ";
}

function ExplainWrong3() {
    document.getElementById("Explain03").innerHTML = "Wrong it's B. Watts S. Humphrey created the Software Process Program at Carnegie Mellon University’s Institute (SEI) in the 1980s, and served as its director from 1986 through the early 1990s. This program was designed to help participants understand and manage the software developement process.";

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

    document.getElementById("Explain03").innerHTML = "Correct answer B. Watts S. Humphrey created the Software Process Program at Carnegie Mellon University’s Institute (SEI) in the 1980s, and served as its director from 1986 through the early 1990s. This program was designed to help participants understand and manage the software developement process.";

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
    document.getElementById("Explain04").innerHTML = "practice of breaking down a software system into smaller, independent, and interchangeable modules or components.";
}

function ExplainWrong4() {
    document.getElementById("Explain04").innerHTML = "Wrong it's C. Modularity refers to the practice of breaking down a software system into smaller, independent, and interchangeable modules or components. Each module is designed to perform a specific function and can be developed, tested, and maintained separately. Modularity contributes to various aspects of software development.";

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

    document.getElementById("Explain04").innerHTML = "Correct answer C. Modularity refers to the practice of breaking down a software system into smaller, independent, and interchangeable modules or components. Each module is designed to perform a specific function and can be developed, tested, and maintained separately. Modularity contributes to various aspects of software development.";

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
    document.getElementById("Explain05").innerHTML = "external independent library that can range in size from a single file to numerous files.";
}

function ExplainWrong5() {
    document.getElementById("Explain05").innerHTML = "Wrong answer it's D. A software dependency is an external independent library that can range in size from a single file to numerous files and directories arranged into packages to accomplish a specified purpose and is an attribute and not an engineering activity for process.";

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

    document.getElementById("Explain05").innerHTML = "Correct answer D. A software dependency is an external independent library that can range in size from a single file to numerous files and directories arranged into packages to accomplish a specified purpose and is an attribute and not an engineering activity for process.";

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
    document.getElementById("Explain06").innerHTML = "style of project management that emphasizes incremental progress.";
}

function ExplainWrong6() {
    document.getElementById("Explain06").innerHTML = "Wrong answer it's A. Agile scrum methodology is a style of project management that emphasizes incremental progress. Each iteration is divided into two to four-week sprints, with the goal of completing the most important features first and delivering a possibly deliverable product at the end of each sprint.";

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

    document.getElementById("Explain06").innerHTML = "Correct answer A. Agile scrum methodology is a style of project management that emphasizes incremental progress. Each iteration is divided into two to four-week sprints, with the goal of completing the most important features first and delivering a possibly deliverable product at the end of each sprint.";

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
    document.getElementById("Explain07").innerHTML = "describes a broad set of labor-saving tools used in software development.";
}

function ExplainWrong7() {
    document.getElementById("Explain07").innerHTML = "Wrong it's A. Computer-Aided Software Engineering describes a broad set of labor-saving tools used in software development. They create a framework for managing projects and are intended to help users stay organized and improve productivity.";

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

    document.getElementById("Explain07").innerHTML = "Correct answer A. Computer-Aided Software Engineering describes a broad set of labor-saving tools used in software development. They create a framework for managing projects and are intended to help users stay organized and improve productivity.";

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
    document.getElementById("Explain08").innerHTML = "used to uncover difficult.";
}

function ExplainWrong8() {
    document.getElementById("Explain08").innerHTML = "Wrong it's B. Reverse engineering is used to uncover difficult, unknown, and hidden information about a software system.";

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

    document.getElementById("Explain08").innerHTML = "Correct answer B. Reverse engineering is used to uncover difficult, unknown, and hidden information about a software system.";

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
    document.getElementById("Explain09").innerHTML = "method for designing, developing, and testing high-quality software.";
}

function ExplainWrong9() {
    document.getElementById("Explain09").innerHTML = "Wrong it's C. Software Development Life Cycle (SDLC) is a method for designing, developing, and testing high-quality software. The software developed to meet or exceed customer expectations must have an SDLC designed to complete the software on time and on budget.";

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

    document.getElementById("Explain09").innerHTML = "Correct answer C. Software Development Life Cycle (SDLC) is a method for designing, developing, and testing high-quality software. The software developed to meet or exceed customer expectations must have an SDLC designed to complete the software on time and on budget.";

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
    document.getElementById("Explain010").innerHTML = "a software process model that combines prototyping’s iterative characteristic with the linear sequential model’s regulated and systematic elements.";
}

function ExplainWrong10() {
    document.getElementById("Explain010").innerHTML = "Wrong answer it's A. Spiral model by Boehm, is a software process model that combines prototyping’s iterative characteristic with the linear sequential model’s regulated and systematic elements. It implements the capability of quick production of new software versions.";

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

    document.getElementById("Explain010").innerHTML = "Correct answer A. Spiral model by Boehm, is a software process model that combines prototyping’s iterative characteristic with the linear sequential model’s regulated and systematic elements. It implements the capability of quick production of new software versions.A. Spiral model by Boehm, is a software process model that combines prototyping’s iterative characteristic with the linear sequential model’s regulated and systematic elements. It implements the capability of quick production of new software versions.";

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