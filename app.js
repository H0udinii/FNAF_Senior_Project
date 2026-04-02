function loadSVG(){
    fetch("full_Freddy_Head.svg")
    .then((response) => { return response.text();})
    .then((svg) => {
        document.getElementById('fredHead').innerHTML = svg;
    })
}
loadSVG();
