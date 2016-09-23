/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//1
var divElements = document.getElementsByTagName("div");

divElements[0].style.backgroundColor = "red";
divElements[1].style.backgroundColor = "red";
divElements[2].style.backgroundColor = "red";



//2
var table = document.getElementsByTagName("tbody")[0];

var persons=[new person("abe","gorilla",48711447,"tm@gmail.com"),new person("abe","gorilla",48711447,"tm@gmail.com")];

for (var i = 0; i < persons.length; i++) {
    var row = table.insertRow(i);
    var f = row.insertCell(0);
    var l = row.insertCell(1);
    var p = row.insertCell(2);
    var e = row.insertCell(3);
    f.innerHTML = persons[i].firstName;
    l.innerHTML = persons[i].lastName;
    p.innerHTML = persons[i].phone;
    e.innerHTML = persons[i].email;
}

function person(f,l,p,e){
    this.firstName = f;
    this.lastName = l;
    this.phone = p;
    this.email = e;
}




//3
var names = ["div1", "div2", "div3"];
for (var i = 0; i < names.length; i++) {
    var diven = document.createElement("div");
    diven.setAttribute("id", names[i]);
    document.getElementsByTagName("body")[0].appendChild(diven);
    document.getElementById(names[i]).style.width = "100px";
    document.getElementById(names[i]).style.background = "green";
    document.getElementById(names[i]).innerHTML = names[i];
}
document.getElementById("div1").addEventListener("click", function () {
    document.getElementById("div1").innerHTML = "abe";
});
document.getElementById("div2").addEventListener("click", function () {
    document.getElementById("div2").innerHTML = "gorilla";
});
document.getElementById("div3").addEventListener("click", function () {
    document.getElementById("div3").innerHTML = "chimpanse";
});

//4
var names = ["div_1", "div_2", "div_3"];
var colors = ["green","red","yellow"];
for (var i = 0; i < names.length; i++) {
    var diven = document.createElement("div");
    diven.setAttribute("id", names[i]);
    document.getElementsByTagName("body")[0].appendChild(diven);
    document.getElementById(names[i]).style.width = "200px";
    document.getElementById(names[i]).style.height = "200px";
    document.getElementById(names[i]).style.borderColor = colors[i];
    document.getElementById(names[i]).style.background = "brown";
    document.getElementById(names[i]).innerHTML = names[i];
}

document.getElementById(names[0]).addEventListener("mouseover", function(){this.innerHTML = "Hej div 1"});
document.getElementById(names[0]).addEventListener("mouseout", function(){this.innerHTML = names[0]});

document.getElementById(names[1]).addEventListener("mouseover", function(){this.innerHTML = "Hej div 2"});
document.getElementById(names[1]).addEventListener("mouseout", function(){this.innerHTML = names[1]});

document.getElementById(names[2]).addEventListener("mouseover", function(){this.innerHTML = "Hej div 3"});
document.getElementById(names[2]).addEventListener("mouseout", function(){this.innerHTML = names[2]});



//5
//create a form
var f = document.createElement("form");
f.setAttribute('method',"post");
f.setAttribute('action',"javascript:;");
f.setAttribute('onsubmit',"get_action();");

function get_action() {
        var input = document.getElementById("user_name1");
        var output = document.getElementById("output");
        console.log(output.innerHTML = input.value);
    }

//create input element
var i = document.createElement("input");
i.type = "text";
i.name = "user_name";
i.id = "user_name1";



//create a checkbox
var c = document.createElement("input");
c.type = "checkbox";
c.id = "checkbox1";
c.name = "check1";

//create a button
var s = document.createElement("input");
s.type = "submit";
s.value = "Submit";

// add all elements to the form
f.appendChild(i);
f.appendChild(c);
f.appendChild(s);

// add the form inside the body
//$("body").append(f);   //using jQuery 
document.getElementsByTagName('body')[0].appendChild(f); //pure javascript

//6
var persons = ["John", "Gabriel", "Mia", "Louise", "Phillip", "Rasmus", "Daniel", "Angelica", "Fie", "Mogens"];
var ids = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
for (var i = 0; i < 10; i++) {
    var x = document.createElement("UL");
    x.setAttribute("id", ids[i]);
    document.body.appendChild(x);

    var y = document.createElement("LI");
    var t = document.createTextNode(persons[i]);
    y.appendChild(t);
    document.getElementById(ids[i]).appendChild(y);
}

for (var i = 0; i < ids.length; i++) {
    !function(i){
    if (i % 2 === 0) {
        document.getElementById(ids[i]).style.backgroundColor = "red";
    } else {
        document.getElementById(ids[i]).style.backgroundColor = "yellow";
    }
    document.getElementById(ids[i]).addEventListener("click", function () {
        console.log("Hej "+persons[i]);
    });
    document.getElementById(ids[i]).addEventListener("mouseover", function () {
        document.getElementById(ids[i]).style.fontSize = "xx-large";
    });
    document.getElementById(ids[i]).addEventListener("mouseout", function () {
        document.getElementById(ids[i]).style.fontSize = "medium";
    });
    }(i);
}

//7
var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var comma = document.getElementById("comma");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var equal = document.getElementById("equal");

doClick(zero, clickEvent);
doClick(one, clickEvent);
doClick(two, clickEvent);
doClick(three, clickEvent);
doClick(four, clickEvent);
doClick(five, clickEvent);
doClick(six, clickEvent);
doClick(seven, clickEvent);
doClick(eight, clickEvent);
doClick(nine, clickEvent);
doClick(comma, clickEvent);
doClick(plus, clickEvent);
doClick(minus, clickEvent);
doClick(multiply, clickEvent);
doClick(divide, clickEvent);
doClick(equal, clickEvent);

function myFunction(number) {
    this.number = number;
    document.getElementById("display").innerHTML += "1";
}

function doClick(elem, func) {
    elem.addEventListener('click', func.bind(elem));
}
var result = 0;
var equalPressed = false;
var input = "";

function clickEvent() {
    var display = document.getElementById("display");
    if (!equalPressed) {
        if (zero.isEqualNode(this)) {
            display.innerHTML += "0";
            input += 0;
        } else if (one.isEqualNode(this)) {
            display.innerHTML += "1";
            input += 1;
        } else if (two.isEqualNode(this)) {
            display.innerHTML += "2";
            input += 2;
        } else if (three.isEqualNode(this)) {
            display.innerHTML += "3";
            input += 3;
        } else if (four.isEqualNode(this)) {
            display.innerHTML += "4";
            input += 4;
        } else if (five.isEqualNode(this)) {
            display.innerHTML += "5";
            input += 5;
        } else if (six.isEqualNode(this)) {
            display.innerHTML += "6";
            input += 6;
        } else if (seven.isEqualNode(this)) {
            display.innerHTML += "7";
            input += 7;
        } else if (eight.isEqualNode(this)) {
            display.innerHTML += "8";
            input += 8;
        } else if (nine.isEqualNode(this)) {
            display.innerHTML += "9";
            input += 9;
        } else if (comma.isEqualNode(this)) {
            display.innerHTML += ",";
            input += ".";
        } else if (plus.isEqualNode(this)) {
            display.innerHTML += "+";
            input += "+";
        } else if (minus.isEqualNode(this)) {
            display.innerHTML += "-";
            input += "-";
        } else if (multiply.isEqualNode(this)) {
            display.innerHTML += "*";
            input += "*";
        } else if (divide.isEqualNode(this)) {
            display.innerHTML += "/";
            input += "/";
        }
    }else{
        equalPressed=false;
        input="";
        display.innerHTML = "";
    }
    if (equal.isEqualNode(this)) {
        display.innerHTML = eval(input);
        equalPressed = true;
    }
}