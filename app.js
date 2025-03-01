

// let div = document.getElementById("div");
// let text = document.getElementById("text")
// let btn = document.getElementById("test2");
// // btn.addEventListener("click", function atif (){
// //     div.style.width = "100px"
// //     div.style.height = "100px"
// //     div.style.backgroundColor = "black"
// //     document.write("atif is here")
// //  }, )

// function test (){
//     div.style.width = "100px"
//     div.style.height = "100px"
//     div.style.backgroundColor = "black"
//     text.innerHTML = "this is atif"
// }

let div1 = document.querySelector(".div-1")
let div2 = document.querySelector(".div-2")
let div3 = document.querySelector(".div-3")
let div4 = document.querySelector(".div-4")

function calculate (){

    let totalSeconds = Math.floor((new Date ("2 march 2025") - new Date()) / 1000)


    if(totalSeconds <= 0) {
        totalSeconds = 0
    }


    


let days = Math.floor((totalSeconds / (60 * 60 * 24)))

let hours = Math.floor((totalSeconds % (60 * 60 * 24 )) / (60 * 60)) 

let min = Math.floor((totalSeconds % (60 * 60) / 60));

let sec = totalSeconds % 60;





div1.innerHTML = `<i>${sec} </i>`
div2.innerHTML = `<i> ${min}</i>`
div3.innerHTML = `<i> ${hours}</i>`
div4.innerHTML = `<i> ${days}</i>`


div1.style.justifyContent = "center"; div1.style.fontSize = "35px"
div2.style.justifyContent = "center"; div2.style.fontSize = "35px"
div3.style.justifyContent = "center";div3.style.fontSize = "35px"
div4.style.justifyContent = "center"; div4.style.fontSize = "35px";

}

setInterval(calculate, 1000)

calculate();




