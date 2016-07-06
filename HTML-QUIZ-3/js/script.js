window.ansSubmit1 = function() {
	var ans = document.getElementById("a2").checked;
  var checkboxs = document.getElementsByClassName("question1");
  var okay = false;
  for (var i = 0; i < checkboxs.length; i++) {
    if (checkboxs[i].checked) {
      okay = true;
      
    } else {
      
    }

  }
  // Check if none of the boxes were checked
  if (!okay) {
    document.getElementById("ansSubmit1").style.backgroundColor="red";
   	window.alert("Please select an answer");
  }else if(ans !== okay){
  document.getElementById("ansSubmit1").style.backgroundColor="red";
  window.alert("Try Again")
  }else { document.getElementById("ansSubmit1").style.backgroundColor="green";
  }
}

window.ansSubmit2 = function() {
	var ans = document.getElementById("a6").checked;
  var checkboxs = document.getElementsByClassName("question2");
  var okay = false;
  for (var i = 0; i < checkboxs.length; i++) {
    if (checkboxs[i].checked) {
      okay = true;
      
    } else {
      
    }

  }
  // Check if none of the boxes were checked
  if (!okay) {
    document.getElementById("ansSubmit2").style.backgroundColor="red";
   	window.alert("Please select an answer");
  }else if(ans !== okay){
  document.getElementById("ansSubmit2").style.backgroundColor="red";
  window.alert("Try Again")
  }else { document.getElementById("ansSubmit2").style.backgroundColor="green";
  }
}

window.ansSubmit3 = function() {
	var ans = document.getElementById("a10").checked;
  var checkboxs = document.getElementsByClassName("question3");
  var okay = false;
  for (var i = 0; i < checkboxs.length; i++) {
    if (checkboxs[i].checked) {
      okay = true;
      
    } else {
      
    }

  }
  // Check if none of the boxes were checked
  if (!okay) {
    document.getElementById("ansSubmit3").style.backgroundColor="red";
   	window.alert("Please select an answer");
  }else if(ans !== okay){
  document.getElementById("ansSubmit3").style.backgroundColor="red";
  window.alert("Try Again")
  }else { document.getElementById("ansSubmit3").style.backgroundColor="green";
  }
}

window.ansSubmit4 = function() {
	var ans = document.getElementById("a13").checked;
  var checkboxs = document.getElementsByClassName("question4");
  var okay = false;
  for (var i = 0; i < checkboxs.length; i++) {
    if (checkboxs[i].checked) {
      okay = true;
      
    } else {
      
    }

  }
  // Check if none of the boxes were checked
  if (!okay) {
    document.getElementById("ansSubmit4").style.backgroundColor="red";
   	window.alert("Please select an answer");
  }else if(ans !== okay){
  document.getElementById("ansSubmit4").style.backgroundColor="red";
  window.alert("Try Again")
  }else { document.getElementById("ansSubmit4").style.backgroundColor="green";
  }
}

window.ansSubmit5 = function() {
	var ans = document.getElementById("a20").checked;
  var checkboxs = document.getElementsByClassName("question5");
  var okay = false;
  for (var i = 0; i < checkboxs.length; i++) {
    if (checkboxs[i].checked) {
      okay = true;
      
    } else {
      
    }

  }
  // Check if none of the boxes were checked
  if (!okay) {
    document.getElementById("ansSubmit5").style.backgroundColor="red";
   	window.alert("Please select an answer");
  }else if(ans !== okay){
  document.getElementById("ansSubmit5").style.backgroundColor="red";
  window.alert("Try Again")
  }else { document.getElementById("ansSubmit5").style.backgroundColor="green";
  }
}



function myTip1() {
   window.alert("The key here is to remember how you make a table column in HTML, if you are still having trouble then refer to the Cheatsheet provided "); 
}

function myTip2() {
   window.alert("This could be a bit tricky, You can always refer back to your cheatsheet provided for this particular question, or you can excercise your developer skills and scan through StackOverFlow or W3C schools"); 
}

function myTip3() {
   window.alert("Try bringing up the source code and see if you can see any examples to give you some insight"); 
}

function myTip4() {
   window.alert("There are two ways to make a lists, and those approaches are ordered and unordered "); 
}

function myTip5() {
   window.alert("There are currently 216 WEBSAFE colors, to find them out you can refer back to the Intro to Web Development(A) walkthrough videos before referencing StackOverFlow or W3C schools"); 
}

