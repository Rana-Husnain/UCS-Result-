// document.getElementById("result btn").onclick = function(){
//     var name = prompt("whats your name ? ")


//     if( name == "ali"     ){
//         document.getElementById("result").innerHTML="Name:Ali <br> Math:100/48 <br> Eng:100/98 <br> Urdu:100/88 <br> "
    
//     }

//     if( name == "hassan"     ){
//     document.getElementById("result").innerHTML="Name:hassan <br> Math:100/48 <br> Eng:100/98 <br> Urdu:100/88 <br> "

// }

// }



document.getElementById("result btn").onclick = function(){
var name = prompt("whats your name (First Letter Should Be Capital) ")


if(name =="" ){ 
    alert("Plz Enter Your Corect name")
}

if(name == "ali"){
    document.getElementById("result").innerHTML="<p id='inner'  >Ali <br> Computer Study:8/10 <br>  </P> <p id='well' >Welldone</p>   "
}

if(name == "Fatima Aftab"){
    document.getElementById("result").innerHTML="<P id='inner' >Fatima Aftab <br> Computer Studies:8/10 </P> <p id='well' >Excellent</p>   "
}

if(name == "Aisha Baig"){
    document.getElementById("result").innerHTML="<P id='inner' >Aisha Baig<br> Computer Study:8/10 <br>  </P> <p id='well' >Welldone</p>  "
}
if(name == "Fatima Ammad"){
    document.getElementById("result").innerHTML="<P id='inner' >Fatima Ammad<br> Computer Study:8/10 <br>  </P> <p id='well' >Excellent</p>  "
}
if(name == "Eman Fatima"){
    document.getElementById("result").innerHTML="<p id='inner'  >Eman Fatima<br> Computer Study:8/10 <br>  </P> <p id='well' >Welldone</p>   "
}
if(name=="a"){
    document.getElementById("result").innerHTML="<p id='inner'  >Fatima Aftab <br> Computer Study:8/10 <br>  </P> <p id='well' >Good</p> "

}

}

document.getElementById("clear").onclick=function(){
    document.getElementById("result").innerHTML=""
}















// alert("hello")


// console.log("hello")