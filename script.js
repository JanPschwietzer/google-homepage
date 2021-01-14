function redirect_google(){
    let eingabe = document.getElementById("search-request").value;
    window.location.replace = "http://google.de/search?q=" + eingabe;
    return false;
}