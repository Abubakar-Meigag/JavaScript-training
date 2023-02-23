
let btn = document.getElementById('btn');

window.onscroll = function(){
    if (scrollY >= 400 )
    {
        btn.style.display = 'block';
    }else{
        btn.style.display = "none";
    }
}

btn.onclick = function(){
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

let txt = document.getElementById('txt');
    
    if( localStorage. length > 0 ){
        txt.value = localStorage.getItem("txt");        
    }
    txt. onkeyup = function(){
        localStorage. setItem('txt', txt.value)
    }

    if( localStorage. length > 0){
        document.body.style.background = localStorage. color;
    }

    function setcolor(color) {
        localStorage. setItem ('color' , color);
        document.body.style.background = color;
    }