let A = document.getElementById("Calculate");
let E = document.getElementById("Result");
let B = document.getElementById("Clear");
let C = document.getElementById("Back");
let Da;
let DAt;
let Ti;

// Extra Operator Function Variables
let D = document.getElementById("Extra_Oprater_Button");
let G = document.getElementById("Extra_Oprater");
let H = document.getElementById("temp");
let DeleteHistory = document.getElementById("button_1")
let historyPannel = document.getElementById('HistroyPanel');;

let a = document.getElementById("slider");
let b = document.getElementById("button");
let c = document.getElementById("blur");
let d = document.getElementById("9");
let f = document.getElementById("8");
let g = document.getElementById("7");
let h = document.getElementById("6");
let i = document.getElementById("5");
let j = document.getElementById("4");
let k = document.getElementById("3");
let l = document.getElementById("2");
let m = document.getElementById("1");
let n = document.getElementById("0");
let o = document.getElementById("/");
let p = document.getElementById("*");
let q = document.getElementById("+");
let r = document.getElementById("-");
let s = document.getElementById("Decimal");
let t = document.getElementById("(");
let u = document.getElementById(")");
let v = document.getElementById("squre");
let w = document.getElementById("hide");
let W = document.getElementById("hide1");
let W1 = document.getElementById("hide2");
let x = document.getElementById("root");

var click = 0;
let beforeEndBracket_String = [];
let history = JSON.parse(localStorage.getItem('calcHistory')) || [];  // Load history from storage or initialize an empty array
let TheDay;
let TheDate;
let TheTime;


let e = document.getElementById("Calculation");
let F = document.getElementById("Calculation1");

e.innerHTML = ``;
F.innerHTML = ``;

a.classList.add("smooth");

A.addEventListener("click", Calculate);
B.addEventListener("click", Clear);
C.addEventListener("click", Back);

D.addEventListener("click", Extra_Oprater_Button);

b.addEventListener("click", Slider);
c.addEventListener("click", Hide_Slider);
d.addEventListener("click", Nine);
f.addEventListener("click", Eight);
g.addEventListener("click", Seven);
h.addEventListener("click", Six);
i.addEventListener("click", Five);
j.addEventListener("click", Four);
k.addEventListener("click", Three);
l.addEventListener("click", Two);
m.addEventListener("click", One);
n.addEventListener("click", Zero);

o.addEventListener("click", Division);
p.addEventListener("click", Multiplication);
q.addEventListener("click", Plus);
r.addEventListener("click", Minus);
s.addEventListener("click", Decimal);
t.addEventListener("click", Start_bracket);
u.addEventListener("click", End_bracket);
v.addEventListener("click", Squre);
x.addEventListener("click", Root);

DeleteHistory.addEventListener("click", DeleteHistory_1);

////////////////////////////////////////////////////////////////////

//Day Date for history pannel
function getFormattedDay(){
    const now = new Date();
    //Array of days    
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    //Get the day of the week
    return  days[now.getDay()];
}

//Get current Date
function getFormattedDate(){
    let now = new Date();
    let Year = now.getFullYear();
    let Month = now.getMonth();
    let day = now.getDate();

    return `${day}/${Month+1}/${Year}`;
}

//Get the time//
function getFormattedTime(){
    let now = new Date();
    //the hours in 12-hour format
    let hours = now.getHours() % 12 || 12;

    //Add leading zero if hours is less then 10
    hours = hours < 10 ? '0' + hours : hours;

    //Get the minute
    let Minutes = now.getMinutes();
    Minutes = Minutes <10 ? '0' + Minutes : Minutes;

    //Get the seconds
    let seconds = now.getSeconds();
    seconds = seconds < 10 ? seconds : seconds;

    //Determine AM or PM
    let AmPm = hours >= 12 ? 'AM' : 'PM';

    return `${hours}:${Minutes}:${seconds} ${AmPm}`;
}

function updateClock(){
    TheDay = getFormattedDay();
    TheDate = getFormattedDate();
    TheTime = getFormattedTime();
}

setInterval(updateClock, 1000); //Update Every Second
updateClock();
 
function createHistoryPannel(){
    historyPannel.innerHTML = '';  // Clear the panel before appending all history items

    history.forEach(entry => {
        let newEntry = document.createElement('div');
        newEntry.className = "w-full text-black border-t-[1px] pr-5  sm:pr-8 border-black border-b-2 rounded-2xl text-xl font-normal";

        newEntry.innerHTML = `
                        <div class="flex pl-1 text-left justify-between">
                            <div class='pl-2'>
                                <p class="m-0">${entry.day}</p>
                                <p class="-mt-2 text-[13px]">${entry.date}</p>
                                <p class="-mt-2 text-[13px]">${entry.time}</p>
                            </div>
                            <div class="text-right">
                                <p class="p-1">${entry.expression}</p>
                                <p>${entry.result}</p>
                            </div>
                        </div>`
        
        // Append the new history entry to the history panel
        historyPannel.appendChild(newEntry);
    });
}

function Slider() {
    if (a.classList.contains("smooth")) {
        a.classList.replace("smooth", "slide");
        c.classList.replace("hidden", "block");
    }
}

function Hide_Slider() {
    if (a.classList.contains("slide")) {
        a.classList.replace("slide", "smooth");
        c.classList.replace("block", "hidden");
    }
}

function Nine() {
    if (e.innerHTML.endsWith(')')){
        F.innerHTML += '*' + d.value;
        e.innerHTML += d.value;
    }
    else{
        F.innerHTML += '9';
        e.innerHTML += d.value;
    }
}

function Eight() {
    if (e.innerHTML.endsWith(')')){
        F.innerHTML += '*' + f.value;
        e.innerHTML += f.value;
    }
    else{
        F.innerHTML += f.value;
        e.innerHTML += f.value;
    }
}

function Seven() {
    if (e.innerHTML.endsWith(')')){
    e.innerHTML += '*' + g.value;
    F.innerHTML += g.value;
    }
    else{
        e.innerHTML += g.value;
        F.innerHTML += g.value;  
    }
}

function Six() {
    if (e.innerHTML.endsWith(')')){
    e.innerHTML += '*' + h.value;
    F.innerHTML += h.value;
    }
    else{
    e.innerHTML += h.value;
    F.innerHTML += h.value;
    }
}

function Five() {
    if (e.innerHTML.endsWith(')')){
    e.innerHTML += '*' + i.value;
    F.innerHTML += i.value;
    }
    else{
        e.innerHTML += + i.value;
        F.innerHTML += i.value;
    }
}

function Four() {
    if (e.innerHTML.endsWith(')')){
    e.innerHTML += '*' + j.value;
    F.innerHTML += j.value;
    }
    else{
    e.innerHTML += j.value;
    F.innerHTML += j.value;
    }

}

function Three() {
    if (e.innerHTML.endsWith(')')){
    e.innerHTML += '*' + k.value;
    F.innerHTML += k.value;
    }
    else{
    e.innerHTML += k.value;
    F.innerHTML += k.value;  
    }
}

function Two() {
    if (e.innerHTML.endsWith(')')){
    e.innerHTML += '*' + l.value;
    F.innerHTML += l.value;
    }
    else{
    e.innerHTML += l.value;
    F.innerHTML += l.value;        
    }
}

function One() {
    if (e.innerHTML.endsWith(')')){
    e.innerHTML += '*' + m.value;
    F.innerHTML += m.value;
    }
    else{
    e.innerHTML += m.value;
    F.innerHTML += m.value;   
    }
}

function Zero() {
    if (e.innerHTML.endsWith(')')){
    e.innerHTML += '*' + n.value;
    F.innerHTML += n.value;
    }else{
    e.innerHTML += n.value;
    F.innerHTML += n.value; 
    }

}

function Division() {
    let txt = e.innerHTML.length;
    if (e.innerHTML[txt - 1] === o.value) {
        return;
    } else {
        e.innerHTML += o.value;
        F.innerHTML += "/";
    }
}

function Root() {
    if (e.innerHTML.endsWith('√')) {
        return;
    } 
    else if (e.innerHTML.trim() === ``) {
        e.innerHTML += `&#8730;`;
        F.innerHTML += `√`;
    }
    else{
        e.innerHTML += `&#8730;`; // Add root symbol

        // Add √ to F.innerHTML based on conditions
        if (/[+\-*/(]$/.test(F.innerHTML)) {
            F.innerHTML += `√`;
        } else {
            F.innerHTML += `*√`;
        }
    }

}

function Squre() {
    let txt = e.innerHTML.length;

    if (txt === 0 || e.innerHTML.trim() === "") {
        return;
    } else {
        if (e.innerHTML[txt - 1] === ">") {
            return;
        } else {

            //find the last number in the expression
        let lastNumberMatch = F.innerHTML.match(/\d+(\.\d+)?$/);
        if (lastNumberMatch){
            let lastNumber = lastNumberMatch[0];
            let squareValue = Math.pow(lastNumber, 2);
            //Round the result to avoid floating-point precision issues
            squareValue = Math.round((squareValue + Number.EPSILON) * 100) / 100;
            F.innerHTML = F.innerHTML.replace(/\d+(\.\d+)?$/, squareValue);
            e.innerHTML += `<sup>2</sup>`;
        }

        }
    }
}


function Multiplication() {
    let txt = e.innerHTML.length;
    if (e.innerHTML[txt - 1] === p.value) {
        return;
    } else {
        e.innerHTML += p.value;
        F.innerHTML += "*";
    }
}

function Plus() {
    let txt = e.innerHTML.length;
    if (e.innerHTML[txt - 1] === q.value) {
        return;
    } else {
        e.innerHTML += q.value;
        F.innerHTML += "+";
    }
}

function Minus() {
    let txt = e.innerHTML.length;
    if (e.innerHTML[txt - 1] === r.value) {
        return;
    } else {
        e.innerHTML += r.value;
        F.innerHTML += "-";
    }
}

function Start_bracket() {
    if (e.innerHTML.trim() === ``) {
        e.innerHTML += `(`;
        F.innerHTML += `(`;
    }
    else{
        e.innerHTML += `(`; // Add Start Bracket

        // Add √ to F.innerHTML based on conditions
        if (/[+\-*/√]$/.test(F.innerHTML)) {
            F.innerHTML += `(`;
        }
        else if (/\d$|[.]$/.test(F.innerHTML)) {
            F.innerHTML += `*(`;
        }
        else if (e.innerHTML.endsWith('(')){
            F.innerHTML += `(`;
        }
    }
}

function End_bracket() {
        e.innerHTML += u.value;
        F.innerHTML += u.value;
    
    beforeEndBracket_String.push(F.innerHTML.slice(0, -1));

    // Check for parentheses in e.innerHTML
    if (/\(.*\)/.test(F.innerHTML)) {
        // Find content inside parentheses in F.innerHTML
        const lastOpenParenIndex = F.innerHTML.lastIndexOf('(');
        if (lastOpenParenIndex !== -1) {
        const insideParentheses = F.innerHTML.slice(lastOpenParenIndex + 1 , -1); // Remove the outer parentheses
            let sqrtRegex = /√(\d+(\.\d+)?)(?![^\(]*\))/g;

            // Check and replace any square root pattern inside parentheses
            let sqrtMatch;
            while ((sqrtMatch = sqrtRegex.exec(insideParentheses)) !== null) {
                let temp = sqrtMatch[1]; // Get the number after √
                let square_root = Math.sqrt(Number(temp)); // Calculate square root

                // Replace the √number with the calculated square root
                F.innerHTML = F.innerHTML.replace(sqrtMatch[0], square_root);
            }

            // Replace the entire expression inside parentheses with evaluated result
            const lastOpenParenIndex1 = F.innerHTML.lastIndexOf('(');
            if (lastOpenParenIndex1 !== -1) {
            const insideParentheses1 = F.innerHTML.slice(lastOpenParenIndex1 + 1 , -1);
                let evaluated = eval(insideParentheses1); // Calculate the value
                F.innerHTML = F.innerHTML.slice(0, lastOpenParenIndex1) + evaluated; // Replace with the evaluated value            
            }
        }
    }
}

function Clear() {
    e.innerHTML = ``;
    F.innerHTML = ``;
    E.innerHTML = ``;
}

function Back() {
    let txt =  e.innerHTML.length;

    let lastNumberMatch_with_squre_root = e.innerHTML.match(/√\d+(\.\d+)?$/);

    if(e.innerHTML.endsWith(')')){
        F.innerHTML = beforeEndBracket_String.pop();
        e.innerHTML = e.innerHTML.slice(0, -1);
    }
    else if (/\)\d?\.?$/.test(e.innerHTML))                     //If string expression end with ) and any digit
        {
            e.innerHTML = e.innerHTML.slice(0, -1);
            F.innerHTML = F.innerHTML.slice(0, -2);
        }

    else if (/(\d+(\.\d+)?|\.)\($/.test(e.innerHTML)) {
        e.innerHTML = e.innerHTML.slice(0, -1);                 //for deletion to last elemant in e.innerHTML
        F.innerHTML = F.innerHTML.slice(0, -2);                 //for *( deletion from the F.innerHTML
        }

    else if (e.innerHTML.endsWith('</sup>(')){                      //if '(' come after a squre element
        F.innerHTML = F.innerHTML.slice(0, -2);
        e.innerHTML = e.innerHTML.slice(0, -1);
    }

    else if(/√-?\d+<sup>2<\/sup>$|√\d+<sup>2<\/sup>$/.test(e.innerHTML)){
        let match = F.innerHTML.match(/√(-?\d*\.?\d+)/);
            
        if(/√-?\d+<sup>2<\/sup>$|√\d+<sup>2<\/sup>$/.test(e.innerHTML) && /√-?\d*\.?\d+$/.test(F.innerHTML)){
            let actValue = Math.sqrt(match[1]);
            actValue = Math.round((actValue + Number.EPSILON) * 100) / 100;

            e.innerHTML = e.innerHTML.slice(0, -12);
            F.innerHTML = F.innerHTML.replace(match[0], `${'√'+actValue}`);
        }
        else{
            e.innerHTML = e.innerHTML.slice(0, -12);
            F.innerHTML = F.innerHTML.replace(/(\d*\.?\d+|\d+)(?!.*\d)/, '√$1');
        }
    }

        //FOR squre root back
     else if(e.innerHTML[txt-1]===">")
        {
            //Deleting the the squre string: `<sup>2</sup>`
        e.innerHTML = e.innerHTML.slice(0, -12);
        let regex = e.innerHTML.match(/(?<=[\+\-×÷√\)]|\b)\d+(\.\d+)?(?!.*[\+\-×÷√\)\d])/);
        if (regex != null){                   //It'a working fine
        F.innerHTML = F.innerHTML.replace(/(?<=[\+\-\*/√\)]|\b)\d+(\.\d+)?(?!.*[\+\-\*/√\)\d])/, regex[0]);
        }
        else{
            F.innerHTML = "error";
        }

    
        }
        
    else if (/^.*√\d$/.test(e.innerHTML)) {  // If there's a single number present after the root symbol
    let temp_root_value = F.innerHTML.match(/[+\-*/](\d+(\.\d+)?)(?!.*[+\-*/]\d)/);  // Get last number after an operator

    e.innerHTML = e.innerHTML.slice(0, -1);  // Remove the last digit after √

    if (temp_root_value != null) {
        let sqrtValue = Math.sqrt(parseInt(temp_root_value[1]));

        // Special handling for √4 and √9 when the result matches the preceding number
        if (F.innerHTML.match(/√4$/) && sqrtValue === 2) {
            F.innerHTML = F.innerHTML.replace(/√4$/, '√');  // Replace √4 with √
        } else if (F.innerHTML.match(/√9$/) && sqrtValue === 3) {
            F.innerHTML = F.innerHTML.replace(/√9$/, '√');  // Replace √9 with √
        } else if (/√\d$/.test(F.innerHTML)) {
            F.innerHTML = F.innerHTML.replace(/√\d$/, '√');  // Generic case, replace √ + digit with √
        } else {
            // Replace the last occurrence of the number after operator with √
            F.innerHTML = F.innerHTML.replace(new RegExp(temp_root_value[1] + '$'), `√`);
        }
    }       
            else if(e.innerHTML.endsWith('(√')){
            if (/√\d+(\.\d+)?$/.test(F.innerHTML)){
            F.innerHTML = F.innerHTML.replace(/(\d+(\.\d+)?)(?=\s*$)/, '');
            }
            else{
                F.innerHTML = F.innerHTML.replace(/(\d+(\.\d+)?)(?=\s*$)/, '√');
            }
            }
            else if(e.innerHTML === '√'){
                F.innerHTML = '√';
            }
            else{
                F.innerHTML = F.innerHTML.slice(0, -1);
            }
    }
    else if(lastNumberMatch_with_squre_root != null) {  
        e.innerHTML = e.innerHTML.slice(0, -1);                                             // Remove the last element
        let rootNum = e.innerHTML.match(/√0*(\d+(\.\d*)?|\.\d+)$/);                         //for root element deletion 

        if (rootNum != null){                                                               
            if(/√0*(\d+(\.\d*)?|\.\d+)$/.test(F.innerHTML)){
                F.innerHTML = F.innerHTML.replace(/√0*(\d+(\.\d*)?|\.\d+)$/, rootNum[0]);
            }

            else{
            F.innerHTML = F.innerHTML.replace(/\d+(\.\d+)?$/, rootNum[0]);
            }
            }
        else
            { 
                F.innerHTML = F.innerHTML.replace(/\d+(\.\d+)?$/, ``);
            }
    }
    else if (e.innerHTML.endsWith('</sup>√')){                      //if root come after a squre element
            F.innerHTML = F.innerHTML.slice(0, -2);
            e.innerHTML = e.innerHTML.slice(0, -1);
    }
    else if(/(\d+(\.\d+)?|\))√$|>$/.test(e.innerHTML)){         
            e.innerHTML = e.innerHTML.slice(0, -1);                 //for deletion to last elemant in e.innerHTML
            F.innerHTML = F.innerHTML.slice(0, -2);                 //for *√ deletion from the F.innerHTML
            }

    else{
        // Normal backspace functionality
        e.innerHTML = e.innerHTML.slice(0, -1);
        F.innerHTML = F.innerHTML.slice(0, -1);
    }
}


function Decimal() {
    let txt = e.innerHTML.length;
    if (e.innerHTML[txt - 1] === s.value) {
        return;
    } else {
        if (e.innerHTML.endsWith(')')){
        F.innerHTML += "*.";
        e.innerHTML += s.value;
        }
        else{
        e.innerHTML += s.value;
        F.innerHTML += ".";
        }
    }
}

function dummy() {
    let regex = /√(\d+(\.\d+)?)(?![^\(]*\))/g;
    let match;
    while(click === 1 && (match = regex.exec(F.innerHTML)) != null){
        let num = match[1];

        //Calculate the square root
        let square_root = Math.sqrt(Number(num));

        //Replace the square root value to actual root value
        F.innerHTML = F.innerHTML.replace(match[0], square_root);
    }
}

function Calculate() {
    click = 1;
    dummy();

    //Root Function Reset
    setTimeout(() => {
        click = 0;
    }, 500);
try{
    let result = eval(F.innerHTML);
    result = Math.round(result * 1000000000000000) / 1000000000000000;
    E.innerHTML = result;
    
    history.push({
                    expression: e.innerHTML, result:E.innerHTML,
                    day:TheDay, date:TheDate,
                    time:TheTime
                });
    updateHistoryStorage(); 
    createHistoryPannel();

    }
catch(error){
    E.innerHTML = 'Syntax Error';
}
}

function Extra_Oprater_Button() {
    if (G.classList.contains("hidden")) {
        G.classList.replace("hidden", "block");
        G.classList.replace("h-0", "h-1/6");
        H.classList.replace("h-full", "h-5/6");
    } else if (G.classList.contains("block")) {
        G.classList.replace("block", "hidden");
        G.classList.replace("h-1/6", "h-0");
        H.classList.replace("h-5/6", "h-full");
    }
}

//Storing History in local storage 
function updateHistoryStorage(){
    localStorage.setItem('calcHistory', JSON.stringify(history));
}

//Loading history from local storage when the page loads
function loadHistoryFromStorage(){
    createHistoryPannel(); // Load and display the history on page load
}

//Run on page load
window.onload = function(){
    loadHistoryFromStorage(); //Load the history on page load
    updateClock(); //Start the clock
}

function DeleteHistory_1(){
    // Clear each entry in the history array to free memory
    for (let i = 0; i < history.length; i++) {
    history[i] = null;
    }

    // Reassign the history array to an empty array to release the reference
    history = [];
    historyPannel.innerHTML = '';
    localStorage.removeItem('calcHistory');  // Clear the history from local storage
}