

//문제 1

window.onload = function(){
    let dispText = document.querySelector('.disp p');
    dispText.style.color = "red"
}

//문제 2


// function clickTab(){
//     const tab1 = document.getElementById("tab1");
//     const tab2 = document.getElementById("tab2");
//     const tab3 = document.getElementById("tab3");
//     const tab4 = document.getElementById("tab4");
//     const tab5 = document.getElementById("tab5");
//     const block1 = document.getElementById("block1");
//     const block2 = document.getElementById("block2");
//     const block3 = document.getElementById("block3");
//     const block4 = document.getElementById("block4");
//     const block5 = document.getElementById("block5");
//     const blocks = document.querySelectorAll("div.block")

//     tab1.addEventListener("click",function clickTab1(){
//         this.style.backgroundColor = "red";
//         this.style.color = "white";
//         blocks.style.visibility = "hidden";
//         block1.style.vi
//     });
//     tab2.addEventListener("click",function clickTab2(){
//         this.style.backgroundColor = "green";
//         this.style.color = "yellow";
//     });
//     tab3.addEventListener("click",function clickTab2(){
//         this.style.backgroundColor = "purple";
//         this.style.color = "blue";
//     });
//     tab4.addEventListener("click",function clickTab2(){
//         this.style.backgroundColor = "yellow";
//         this.style.color = "purple";
//     });
//     tab5.addEventListener("click",function clickTab2(){
//         this.style.backgroundColor = "blue";
//         this.style.color = "red";
//     });
// }

const $changeColor = document.querySelectorAll('.tab');
const $sameName = documnet.querySelectorAll('.block');

