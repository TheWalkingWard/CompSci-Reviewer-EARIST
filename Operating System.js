var ScoreCount = 0;

function Scoring() {
    document.getElementById("Score").innerHTML = ScoreCount;
}

function Hint1() {
    document.getElementById("Explain01").innerHTML = "fetched from the secondary memory and kept in the job queue by the job scheduler";
}

function ExplainWrong1() {
    document.getElementById("Explain01").innerHTML = "It's A! New State A program is fetched from the secondary memory and kept in the job queue by the job scheduler, this state is called a new state.";

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

    document.getElementById("Explain01").innerHTML = "Nice! New State A program is fetched from the secondary memory and kept in the job queue by the job scheduler, this state is called a new state.";

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
    document.getElementById("Explain02").innerHTML = "is reached when a process completes its execution";
}

function ExplainWrong2() {
    document.getElementById("Explain02").innerHTML = "It's C. Terminated State is reached when a process completes its execution or terminates by the operating system.";

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

    document.getElementById("Explain02").innerHTML = "Yes! Terminated State is reached when a process completes its execution or terminates by the operating system.";

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
    document.getElementById("Explain03").innerHTML = "manage information about a process";
}

function ExplainWrong3() {
    document.getElementById("Explain03").innerHTML = "It's A. PCB Process Control Block in OS (PCB) is a data structure used by the operating system to manage information about a process.";

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

    document.getElementById("Explain03").innerHTML = "Correct! PCB Process Control Block in OS (PCB) is a data structure used by the operating system to manage information about a process.";

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
    document.getElementById("Explain04").innerHTML = "broken down into two classes: System data, which makes up the operating system and its extensions.";
}

function ExplainWrong4() {
    document.getElementById("Explain04").innerHTML = "Should be A. Data is defined as programs or text and for this discussion is broken down into two classes: System data, which makes up the operating system and its extensions.";

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

    document.getElementById("Explain04").innerHTML = "Yes! Data is defined as programs or text and for this discussion is broken down into two classes: System data, which makes up the operating system and its extensions.";

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
    document.getElementById("Explain05").innerHTML = "addresses of data objects in the operating system kernel or in the address space of a user process";
}

function ExplainWrong5() {
    document.getElementById("Explain05").innerHTML = "It's B. Pointer are memory addresses of data objects in the operating system kernel or in the address space of a user process.";

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

    document.getElementById("Explain05").innerHTML = "Yup! Pointer are memory addresses of data objects in the operating system kernel or in the address space of a user process.";

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
    document.getElementById("Explain06").innerHTML = "waiting for some event";
}

function ExplainWrong6() {
    document.getElementById("Explain06").innerHTML = "Wrong, it's A. Blocked State is a process transitions to a blocked state when it is waiting for some event, such as a resource becoming available or the completion of an I/O operation.";

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

    document.getElementById("Explain06").innerHTML = "Nice! Blocked State is a process transitions to a blocked state when it is waiting for some event, such as a resource becoming available or the completion of an I/O operation.";

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
    document.getElementById("Explain07").innerHTML = "when a process completes its execution or terminates by the operating system";
}

function ExplainWrong7() {
    document.getElementById("Explain07").innerHTML = "No, it's A. Terminated State reached when a process completes its execution or terminates by the operating system. In this state, the process no longer uses any system resources, and its memory space is deallocated.";

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

    document.getElementById("Explain07").innerHTML = "Nice! Terminated State reached when a process completes its execution or terminates by the operating system. In this state, the process no longer uses any system resources, and its memory space is deallocated.";

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
    document.getElementById("Explain08").innerHTML = "type of error that forces a computer program to close";
}

function ExplainWrong8() {
    document.getElementById("Explain08").innerHTML = "Nope, it's D. Fatal is a type of error that forces a computer program to close or the entire operating system to shut down suddenly.";

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

    document.getElementById("Explain08").innerHTML = "Correct! Fatal is a type of error that forces a computer program to close or the entire operating system to shut down suddenly.";

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
    document.getElementById("Explain09").innerHTML = "responsible for the management of platform resources";
}

function ExplainWrong9() {
    document.getElementById("Explain09").innerHTML = "Nah, it's B. Service responsible for the management of platform resources, including the processor, memory, files, and input and output.";

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

    document.getElementById("Explain09").innerHTML = "Yes! Service responsible for the management of platform resources, including the processor, memory, files, and input and output.";

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
    document.getElementById("Explain010").innerHTML = "used to store and manipulate data";
}

function ExplainWrong10() {
    document.getElementById("Explain010").innerHTML = "Nuh uh! It's A! Register a type of computer memory built directly into the processor or CPU (Central Processing Unit) that is used to store and manipulate data during the execution of instructions. ";

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

    document.getElementById("Explain010").innerHTML = "Correct! Register a type of computer memory built directly into the processor or CPU (Central Processing Unit) that is used to store and manipulate data during the execution of instructions. ";

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