/*segédfüggvények*/

function ID(nev) {
    return document.getElementById(nev);
}

function EvLis(item, event, func) {
    item.addEventListener(event, func, false);

}





function beker() {
    
    var a = Number(ID("a").value);
    var b = Number(ID("b").value);
    var osszeg = a + b;


    if (isNaN(osszeg) || ID("a").value === "" || ID("a").value === "") {

        



        ID("szamol").style.color = "lightgrey";
        ID("szamol").title = "Számokat adj meg";





    } else {
        ID("szamol").style.color = "black";
        ID("szamol").title = "Kattints";


       EvLis(ID("szamol"), "click", function(){
           szamol(osszeg);
       });

    }
    
    EvLis(ID("a"),"input",beker);
    EvLis(ID("b"),"input",beker);

}

function szamol(ossz){
    
    
    ID("szoveg").innerHTML = "Az összeg: <span style='color: red;'>" + ossz + "</span>";
    
}




function szamolFormaz() {
    ID("szamol").style.color = "red";
    ID("szamol").style.border = "1px solid blue";
}

function szamolFormazLevesz() {
    ID("szamol").style.color = "initial";
    ID("szamol").style.border = "none";
}

function inputFormazas(x) {


    ID(x).classList.add("bevitelimezo");


}

function init() {
   var szamolGomb = ID("szamol");
    beker();
    /*document.getElementById("uzenet").innerHTML="<span style='color: red;'>Hello világ!</span>";*/
    ID("uzenet").innerHTML = "<span style='color: red;'>Hello világ!</span>";

    /*document.getElementById("szamol").addEventListener("click", szamol, false);
     document.getElementById("szamol").addEventListener("mouseover", szamolFormaz, false);
     document.getElementById("szamol").addEventListener("mouseover", szamolFormazLevesz, false);*/

    //    szamolGomb.addEventListener("click", szamol, false);
//    EvLis(szamolGomb, "click", szamol);



//    szamolGomb.addEventListener("mouseover", szamolFormaz, false);
    EvLis(szamolGomb, "mouseover", szamolFormaz);


//    szamolGomb.addEventListener("mouseout", szamolFormazLevesz, false);
    EvLis(szamolGomb, "mouseout", szamolFormazLevesz);


//    ID("a").addEventListener("click",function(){inputFormazas("a");});
    EvLis(ID("a"), "click", function () {
        inputFormazas("a");
    });


//1.   document.getElementById("b").addEventListener("click",function(){inputFormazas("b");});
//2.    ID("b").addEventListener("click",function(){inputFormazas("b");});
    /*3.*/    EvLis(ID("b"), "click", function () {
        inputFormazas("b");
    });


}

window.addEventListener("load", init, false);