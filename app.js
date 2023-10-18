let url = ''

const btn = document.getElementById("btn")
const input = document.getElementById("input")
const result = document.getElementById("result")
const title = document.getElementById("title")

// navigation buttons

let valley = document.getElementById("valley")
let minion = document.getElementById("minion")
let pirate = document.getElementById("pirate")
let navigation = document.querySelector(".nav")

navigation.addEventListener("click", function (nav){
    input.value = '';

    let targetelem = nav.target.tagName
    console.log(targetelem)
    let text = nav.target.innerText

    if(targetelem == 'Div'){
        title.innerText = `Select from the nav in which language you want to translate`;
     } 
     else if(targetelem == "P"){
        title.innerText = `${text} Speak Translator`;

        if(text == "Minion"){
            url = "https://api.funtranslations.com/translate/minion.json"
        } else if(text == "Valley"){
            url = "https://api.funtranslations.com/translate/valspeak.json"
        } else if(text == "Pirate"){
            url = "https://api.funtranslations.com/translate/pirate.json"
        }
    }
    
})

async function fetchTrans(){
    let userText = input.value
    let response = await fetch(url + "?text=" + userText)
    console.log(response)
    let jsonVal = await response.json()
    result.innerText= jsonVal.contents.translated
}


btn.addEventListener("click" ,function (){
    fetchTrans()
})