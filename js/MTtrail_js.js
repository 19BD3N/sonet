let x= document.getElementById("cameras").innerHTML;
console.log(x.innerHTML);
let y= document.getElementById("cameras");
y.innerHTML= x + `<p class="container">the content above is in class container-fluid and iam normal container</p>` ;




dis=()=>{
    let cont=document.getElementsByClassName("container");
    console.log(cont);
    console.log(cont[0].innerHTML);console.log(cont[1].innerHTML);
    console.log(typeof cont);
    cont[0].classList.toggle('d-none');
    console.log(document.getElementsByTagName("p"));

}
/*

var container=document.getElementsByClassName("container")
dis=()=>{
    
    if(container[0].textContent!=""){
        let data=document.getElementsByClassName("container")
        data[0].textContent="";

    }else if(container[0].textContent==""){
        let container1=document.getElementsByClassName("container");
        console.log(container1[0].textContent)
    }

}
*/

generateRandomColor=()=>{
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
caller=()=>{
    document.body.style.backgroundColor = generateRandomColor() // -> #e1ac94
}

