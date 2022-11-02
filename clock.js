// started with clock createve design with to do list
// black and orange or black and blue design
// use local storage to save costom color of clock 
// let some beautiful and class animations 
// set my name in a beautuful background design or under the clock


// let today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// console.log(time)



// ===================================
//fixed time clock  
//====================================
let myPointerSec = document.querySelector(".seconds-pointer");
let myPointerMin = document.querySelector(".minutes-pointer");
let myPointerHr = document.querySelector(".hours-pointer");




function myTime(){
    let today = new Date();

    let pointerSec = (today.getSeconds() * 6) - 180;
    myPointerSec.style.transform = `translate(-50%, -10%) rotateZ(${pointerSec}deg)`;

    let pointerMin = (today.getMinutes() * 6) - 180; 
    myPointerMin.style.transform = `translate(-50%, -10%) rotateZ(${pointerMin}deg)`;
    
    let pointerHr = (today.getHours() * (360 / 12)) - 180;
    myPointerHr.style.transform = `translate(-50%, -10%) rotateZ(${pointerHr}deg)`;
    
setTimeout(myTime, 1000);
}



myTime();


// ===================================
//========== change clock color
//====================================

let conColor = document.getElementById("c-cl");
let contour = document.querySelector(".contour");

let shColor = document.getElementById("sh-cl");
let textNeon = document.querySelector(".neonText");

let centColor = document.getElementById("cent-cl");
let myCenter = document.querySelector(".my-center");

let secPointColor = document.getElementById("sec-cl");
let secPoint = document.querySelector(".seconds-pointer");

let minPointColor = document.getElementById("min-cl");
let minPoint = document.querySelector(".minutes-pointer");

let hrPointColor = document.getElementById("hr-cl");
let hrPoint = document.querySelector(".hours-pointer");

let mySaveButton = document.querySelector(".save-btn");

let allColors = JSON.parse(localStorage.getItem("allColors")) || {col1: '#eb0527', col2: '#eb0527', col3: '#eb0527', col4: '#ffffff', col5: '#ffffff', col6: '#5271ff'};




chooseColor(allColors.col1, allColors.col2, allColors.col3, allColors.col4, allColors.col5, allColors.col6);

centColor.value = allColors.col1;
conColor.value = allColors.col2;
secPointColor.value = allColors.col3;
minPointColor.value = allColors.col4;
hrPointColor.value = allColors.col5;
shColor.value = allColors.col6;

        let addColorToLs = (col1, col2, col3, col4, col5, col6) => {
                        allColors = ({
                                col1,
                                col2,
                                col3,
                                col4,
                                col5,
                                col6
                        });
                        localStorage.setItem("allColors", JSON.stringify(allColors));
                return { col1, col2, col3, col4, col5, col6 };
                };
        
        function chooseColor(col1, col2, col3, col4, col5, col6) {
                        myCenter.style.backgroundColor = `${col1}`;
                        contour.style.border = `${col2} 4px solid`;
                        contour.style.boxShadow = `0 0 7px #fff, 0 0 52px ${col6}, 0 0 37px #fff, 0 0 0px #5270ad, 0 0 1px #5271b2, 0 0 0px #5271ff, 0 0 1px #5271ff, 0 0 15px #5271ff`;
                        textNeon.style.textShadow = `0 0 7px #fff,
                                                        0 0 10px #fff,
                                                        0 0 21px #fff,
                                                        0 0 42px ${col6},
                                                        0 0 82px ${col6},
                                                        0 0 92px ${col6},
                                                        0 0 102px ${col6},
                                                        0 0 151px ${col6}`;
                        textNeon.style.boxShadow = `0 0 .2rem #fff,
                                                        0 0 .2rem #fff,
                                                        0 0 2rem ${col6},
                                                        0 0 0.8rem ${col6},
                                                        0 0 2.8rem ${col6},
                                                        inset 0 0 1.3rem ${col6}`;

                        secPoint.style.backgroundColor = `${col3}`;
                        minPoint.style.backgroundColor = `${col4}`;
                        hrPoint.style.backgroundColor = `${col5}`;
        }

        function newColor() {
                        chooseColor(centColor.value, conColor.value, secPointColor.value, minPointColor.value, hrPointColor.value, shColor.value);
                                mySaveButton.onclick = e => {
                                        addColorToLs(centColor.value, conColor.value, secPointColor.value, minPointColor.value, hrPointColor.value, shColor.value);
                                }
        }

function changeColors() {
        newColor();
        setTimeout(changeColors, 0);
}
        
        changeColors();


//=======================
//open and close side bar
//=======================

let sideBar = document.querySelector(".side-bar");
let closeBtn = document.querySelector(".close");
let openEdit = document.querySelector(".edit");

let myStatus = false;

openEdit.onclick = e => {
        if(myStatus == false) {
                sideBar.style.marginLeft = "0";
                openEdit.style.transform = "rotateZ(-180deg)"
                myStatus = true;
        }else {
                sideBar.style.marginLeft = "-100%";
                openEdit.style.transform = "rotateZ(0deg)"
                myStatus = false;
        }
        
}
