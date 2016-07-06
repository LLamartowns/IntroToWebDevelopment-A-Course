window.ansSubmit1 = function() {
	var ans = document.getElementById("a3").checked;
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
   window.alert("If you are not sure you may need to either watch the Intro to Web HTML a video one more time, or you could check out the HTML cheatsheet that was provided "); 
}

function myTip2() {
   window.alert("One of these is very different from HTML, and does not actually DO anything"); 
}

function myTip3() {
   window.alert("If you can not remember the difference between a value vs. attribute then a good place to refresh you memory is W3schools online along with your cheatsheet and walk through videos"); 
}

function myTip4() {
   window.alert("after your achor tag and link tag adding this before your email address will make this a link to email said email, if you get stuck dont hesitate to bring out your references"); 
}

function myTip5() {
   window.alert("There is a good reference in the class walk through videos about this" ); 
}

