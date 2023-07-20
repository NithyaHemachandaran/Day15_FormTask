
var submit_button=document.createElement("button");
submit_button.setAttribute("type","button");
submit_button.innerHTML="Submit";
submit_button.addEventListener("click",form_submit);
document.body.append(submit_button);

var h4 = document.createElement("h4");
h4.innerHTML="Form Submission Data";
document.body.append(h4);

//create table and head
  
var table = document.createElement("table");
var thead= document.createElement("thead");
table.setAttribute("class","table");
thead.setAttribute("class","thead-dark");
var ttr= document.createElement("tr");
var tth1=document.createElement("th");
tth1.textContent="FirstName";
var tth2=document.createElement("th");
tth2.textContent="LastName";
var tth3=document.createElement("th");
tth3.textContent="Address";
var tth4=document.createElement("th");
tth4.textContent="Pincode";
var tth5=document.createElement("th");
tth5.textContent="Gender";
var tth6=document.createElement("th");
tth6.textContent="Food";
var tth7=document.createElement("th");
tth7.textContent="State";
var tth8=document.createElement("th");
tth8.textContent="Country";
ttr.append(tth1,tth2,tth3,tth4,tth5,tth6,tth7,tth8);
thead.append(ttr);
table.append(thead);
document.body.append(table);

function form_submit(){
  let first_name = document.getElementById("firstname").value;
  
  let last_name = document.getElementById("lastname").value;
  
  let gender =getGender();
  
  let address1 = document.getElementById("address1").value;
  
  let address2 = document.getElementById("address2").value;
  
  let pincode = document.getElementById("pincode").value;
 
  let state = document.getElementById("state").value;
  
  let country = document.getElementById("country").value;
  
  let food=getValue() ;
 
  var tbody=createrow("td",first_name,last_name,address1+" "+address2,pincode,gender,food,state,country);
  table.append(tbody);
  first_name = document.getElementById("firstname").value="";
  last_name = document.getElementById("lastname").value="";  
  gender =" ";  
  address1 = document.getElementById("address1").value="";  
  address2 = document.getElementById("address2").value="";  
  pincode = document.getElementById("pincode").value=""; 
  state = document.getElementById("state").value="";  
  country = document.getElementById("country").value="";  
  food=" " ;
}

  function createrow(tagname,cont1,cont2,cont3,cont4,cont5,cont6,cont7,cont8)
  {
  var tr= document.createElement("tr");    
  var td1=document.createElement("tagname");
  td1.textContent=cont1;
  var td2=document.createElement(tagname);
  td2.textContent=cont2;
  var td3=document.createElement(tagname);
  td3.textContent=cont3;
  var td4=document.createElement(tagname);
  td4.textContent=cont4;
  var td5=document.createElement(tagname);
  td5.textContent=cont5;
  var td6=document.createElement(tagname);
  td6.textContent=cont6;
  var td7=document.createElement(tagname);
  td7.textContent=cont7;
  var td8=document.createElement(tagname);
  td8.textContent=cont8;
  tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
  return tr;
  }
function getValue() {
  var checkboxes =document.getElementsByName('food');
  var result = "";
  let checkcount=0;
  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          result += checkboxes[i].value;
              checkcount++;     
      }     
  }  
  if(checkcount!==2){
    if(checkcount<=1){
    alert("Choose atleast 2 checkbox out of 5"); }       
    else{
    alert("Choose oly 2 checkbox out of 5"); }     
    }
   return result;
  } 

function getGender(){
  let gender_button=document.getElementsByName('gender');
  let select_gender="";
  for(const radiobutton of gender_button ){
    if(radiobutton.checked){
      select_gender=radiobutton.value;
      break;
    }
  }
  return select_gender;
}



