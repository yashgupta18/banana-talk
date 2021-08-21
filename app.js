const btnTranslate=document.querySelector("#btn-translate");
const txtInput=document.querySelector("#txt-input");
const outputDiv=document.querySelector("#output");

const serverURL="https://api.funtranslations.com/translate/minion.json";
function constructURL(text){
    return serverURL+"?"+"text="+text;
}
function errorHandler(error){
    alert("some error accoured try again after some time");
}

btnTranslate.addEventListener("click",function(){
    let inputValue=txtInput.value;
    fetch(constructURL(inputValue))
    .then(response=>response.json())
    .then(json=>
        {
            const translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
        })
    .catch(errorHandler);
});