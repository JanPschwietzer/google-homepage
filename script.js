function redirect_search(){
    let eingabe = document.getElementById("search-request").value;
    window.location = "http://google.de/search?q=" + eingabe;
    return false;
}

function redirect_first(){
    let eingabe = document.getElementById("search-request").value;
    window.location = "http://google.de/search?q=" + eingabe + "&btnI";
    return false;
}
