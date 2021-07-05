var btnResponse = document.querySelector("#btn-response")
var textReader = document.querySelector("#text-Reader")
console.log("text",textReader.value)
var outputReader = document.querySelector("#Output")

// var serverURL = "​https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json "
var serverURL = "https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text) {
    console.log(typeof(text))
    // console.log(serverURL + "?" + "text=" + `"${text}"`)
    return `${serverURL}?text=${text}`
}
function errorHandler(error){
    console.log("error occured",error);
    alert("something went wrong try after sometime")
}

function clickEventHandler() {
    // outputReader.innerText="this is all you want "+ textReader.value;
    // };
    var inputText = textReader.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        // console.log("kefgkef",response)
        .then(json => {
            var translatedText = json.contents.translated;
            outputReader.innerText = translatedText;
        })
           
        
        .catch(errorHandler)
};

btnResponse.addEventListener("click", clickEventHandler)