// yourName
var yourName="Md Mahmud Hasan"
document.write(yourName + "<br>");
document.getElementsByClassName("name")[0].innerHTML= yourName;


var firstName="Md Mahmud"
var lastName="Hasan"
var fullName= firstName + "&nbsp;" +"&nbsp;" + lastName
document.write(fullName + "<br>");
document.getElementById("name1").innerHTML=fullName;


// number addition function
function add(c,d){
    var addition= c+d ;
    document.write (addition + "<br>");
}
add(12,15);
add(12,155);


// number subtraction function
function subtrac(x,y){
    var subtraction = x-y ;
    document.write (subtraction + "<br>")
}
subtrac(50,47);
subtrac(26,52);


// number multiplication fumction
function multi(m,n){
    var multiplication=m*n;
    document.write (multiplication + "<br>")
}
multi(20,50);
multi(24,54);
multi(21,51);

// number Division function
function devied(c,d){
    var division=c/d;
    document.write(division + "<br>")
}
devied(25,5);
devied(100,7);


// number modulus function
function modu(p,q){
    var modulus=p%q;
    document.write(modulus + "<br>")
}
modu(100,25);
modu(100,30);
modu(20,100);