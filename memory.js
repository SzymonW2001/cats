function game(catNum){
    document.querySelector(".klik").innerHTML=""
    let container = document.getElementById("container")
    container.innerHTML=""

    array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16]
    array=array.slice(32-2*catNum)

    for (let i = 0; i < 10; i++) {
        randomArray = (array.sort(() => (Math.random() > .5) ? 1 : -1))
    }

    let chosen=[]
    let  kliknięcia = 0
    let punkty = 0


    randomArray.map(number=>{
        
        let div= document.createElement("div")
        let container = document.getElementById("container")
        div.classList.add("photo-container")
        div.innerHTML=`<img id=${number} class="img invisible" class=${number} src='./photos/${number}.png'>`
        container.append(div)
    })


    document.querySelectorAll(".photo-container").forEach(img=>img.addEventListener("click", function(e){
        chosen.push(e.currentTarget.firstChild.id)
        e.currentTarget.firstChild.classList.remove("invisible")
        e.currentTarget.classList.add("noClick")
        e.currentTarget.classList.add("currentFocus")

        if(chosen.length==2){
            console.log(chosen)
            kliknięcia+=1
            check()
            document.querySelector(".klik").innerHTML=`<h3>KLIKNIĘCIA: ${kliknięcia}</h3>`



        }
    }))

    function check(){
        if(chosen[1]==chosen[0]){

            let visible=document.querySelectorAll(".img")
            for (let item of visible) {
                item.classList.add("invisible")
            }
            
            let focused=document.querySelectorAll(".currentFocus")
            for (let item of focused) {
                item.classList.add("guessed")
                item.firstChild.classList.remove("invisible")
                item.classList.remove("currentFocus")
                console.log("guessed")
            }
            
            let guessed=document.querySelectorAll(".guessed")
            for (let item of guessed) {
                item.firstChild.classList.remove("invisible")
            }
            punkty+=1
            if(punkty==array.length/2){
                alert("runda zakończona")
            }
            chosen=[]
        }
        else{
            let focused=document.querySelectorAll(".currentFocus")
            for (let item of focused) {
                item.classList.remove("currentFocus")
                setTimeout(show, 500);
                function show() {
                    item.firstChild.classList.add("invisible")
                }
                item.classList.remove("noClick")
                console.log("not guessed")
            let guessed=document.querySelectorAll(".guessed")
            for (let item of guessed) {
                item.firstChild.classList.remove("invisible")
            }    
            chosen=[]
            }
            chosen=[]
        }
    }
}
function reset(){
    window.location.reload();
}
function inst(){
    alert("By zacząć wybierz ilość kotów, kliknij na pole by odsłonić kota i zapamiętaj jego pozycję, celem jest odsłonienie wszystkih kotów jak najmniejszą ilościa kliknięć")
}
/* 
1 zrobić elementy
2 na kliknięcie pojawiają się i znikają 
3 można kliknąć tylko 2/ po 2 się zeruje
4 jeśli się zgadzają to zostaje 
*/



/*
function check(e){
    if(chosen[1]==chosen[0]){

        document.getElementById(chosen[1]).parentElement.classList.add("noClick")
        document.getElementById(chosen[1]).classList.remove("img")
        document.getElementById(chosen[1]).classList.add("img1")
        document.getElementById(chosen[1]).removeAttribute("id")
        document.getElementById(chosen[1]).parentElement.classList.add("noClick")
        document.getElementById(chosen[1]).classList.remove("img")
        document.getElementById(chosen[1]).classList.add("img1")


        chosen=[]
        checkWin()
    }
    else{
        chosen=[]
        timeFunction()
        function timeFunction() {
			setTimeout(function(){document.querySelectorAll(".img").forEach(Element=>Element.classList.add("visible"))
        }, 200)}

    }
}


function checkWin(){
    let trueArr  = []
    var list = document.getElementsByTagName("img")
    for (let item of list) {
    trueArr.push(item.classList.contains("visible"))
}
if(!trueArr.includes(true)){
    prompt("baza")
}

}


*/