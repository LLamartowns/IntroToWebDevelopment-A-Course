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
   window.alert("A good reference would be the Cheatsheet provided"); 
}

function myTip2() {
   window.alert("The difference here is the fact that we want to link WITHIN our webpage"); 
}

function myTip3() {
   window.alert("Try not to overthink this, You've got this. If not then check back to your Cheatsheet that was provided"); 
}

function myTip4() {
   window.alert("Real good programmers learn by failing, if you are having trouble with this try attempting to create and webpage with a form in it."); 
}

function myTip5() {
   window.alert("Alt as in Alternative, is another img attribute, The best way to find this answer out is to place an image on a webpage of your with an alt attribute and see what it does"); 
}

