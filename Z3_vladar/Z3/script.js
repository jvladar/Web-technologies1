var nameCorrect = false;
var surnameCorrect = false;


function nameVal(){
  var name = document.getElementById("name").value;
  if(name.length<3){
    nameCorrect=false;
    document.getElementById("nameValid").innerHTML="Pole musí byť vyplnené";
  }
  else {
    nameCorrect=true;
    document.getElementById("nameValid").innerHTML="";
  }
}

function surnameVal(){
  var name = document.getElementById("surname").value;
  if(name.length<3){
    surnameCorrect = false;
    document.getElementById("surnameValid").innerHTML="Pole musí byť vyplnené";
  }
  else {
    surnameCorrect = true;
    document.getElementById("surnameValid").innerHTML="";
  }
}

function correct(){
  if(nameCorrect==false || surnameCorrect==false){
    document.getElementById("send_button").type="button";
  }
  else{
    document.getElementById("send_button").type="submit";
  }
}

const ageVal = () => {
  const birthDay = new Date(birthDate.value) // '17-10-2020' 
  const difference = (new Date() - birthDay) / 1e3 // 1970 12321323213

  const calculatedAge = Math.floor(difference / 31536000)

  const providedAge = parseInt(age.value)
  if(calculatedAge === providedAge){
    document.getElementById("age").setCustomValidity("");
    document.getElementById("ageValid").innerHTML = "";
  }else{
    document.getElementById("age").setCustomValidity("Zly vek");
    document.getElementById("ageValid").innerHTML = "Vek a datum narodenia sa nezhoduju";
  }

}

var b1 = document.createElement("button");
b1.textContent = " Download ";
b1.onclick = function() {};
                            
var user = "ID  = ";
document.getElementById('#getResult .list-group').append(user).append(b1);

function check_mail()
{
  mail_value = document.getElementById('e-mail').value;
  reg = /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{2,}([.]{1}[a-zA-Z]{2,4}|[.]{1}[a-zA-Z]{2,4}[.]{1}[a-zA-Z]{2,4})$/;
  
  if(reg.test(mail_value) == false)
  {
    document.getElementById("emailValid").innerHTML="Zle vyplnený email";
  }
  else{
    document.getElementById("emailValid").innerHTML="";
  }  
}

function selectOnlyThis(id) {
  for (var i = 1;i <= 4; i++)
  {
      document.getElementById("Check" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}

function show2(){
  document.getElementById('div1').style.display ='none';
  document.getElementById('div2').style.display = 'block';
}

function show1(){
  document.getElementById('div1').style.display = 'block';
  document.getElementById('div2').style.display ='none';
}

function listener_1()
{
  if(select_1.options[select_1.selectedIndex].index == 0)
  {
    select_2.options[0].text = "Sport";
    select_2.options[0].value = "Sport";
    select_2.options[1].text = "Ultra";
    select_2.options[1].value = "Ultra";
    select_2.options[2].text = "Run";
    select_2.options[2].value = "Run";

    select_3.options[0].text = "Wrist HR";
    select_3.options[0].value = "Wrist HR";
    select_3.options[1].text = "HR";
    select_3.options[1].value = "HR"; 
  }
  if(select_1.options[select_1.selectedIndex].index == 2)
  {
    select_2.options[0].text = "9";
    select_2.options[0].value = "9";
    select_2.options[1].text = "5";
    select_2.options[1].value = "5";
    select_2.options[2].text = "3";
    select_2.options[2].value = "3";

    select_3.options[0].text = "Wrist Baro";
    select_3.options[0].value = "Wrist Baro";
    select_3.options[1].text = "Wrist";
    select_3.options[1].value = "Wrist"; 
  }
  else
  {
    select_2.options[0].text = "Peak";
    select_2.options[0].value = "Peak";
    select_2.options[1].text = "Sport";
    select_2.options[1].value = "Sport";
    select_2.options[2].text = "Run";
    select_2.options[2].value = "Run";

    select_3.options[0].text = "Sapphire HR";
    select_3.options[0].value = "Sapphire HR";
    select_3.options[1].text = "HR";
    select_3.options[1].value = "HR"; 
  }
}

function listener_2()
{
  if(select_1.options[select_1.selectedIndex].index == 0 && select_2.options[select_2.selectedIndex].index == 0)
  {
    select_3.options[0].text = "Wrist HR";
    select_3.options[0].value = "Wrist HR";
    select_3.options[1].text = "HR";
    select_3.options[1].value = "HR"; 
  } 
  else if(select_1.options[select_1.selectedIndex].index == 0 && select_2.options[select_2.selectedIndex].index == 1)
  {
    select_3.options[0].text = "Titanium HR";
    select_3.options[0].value = "Titanium HR";
    select_3.options[1].text = "Black";
    select_3.options[1].value = "Black";      
  } 
  else if(select_1.options[select_1.selectedIndex].index == 0 && select_2.options[select_2.selectedIndex].index == 2)
  {
    select_3.options[0].text = "HR";
    select_3.options[0].value = "HR";
    select_3.options[1].text = " - ";
    select_3.options[1].value = "-";       
  } 

  else if(select_1.options[select_1.selectedIndex].index == 2 && select_2.options[select_2.selectedIndex].index == 0)
  {
    select_3.options[0].text = "Wrist Baro";
    select_3.options[0].value = "Wrist Baro";
    select_3.options[1].text = "Wrist";
    select_3.options[1].value = "Wrist"; 
  } 
  else if(select_1.options[select_1.selectedIndex].index == 2 && select_2.options[select_2.selectedIndex].index == 1)
  {
    select_3.options[0].text = "Wrist Baro";
    select_3.options[0].value = "Wrist Baro";
    select_3.options[1].text = "Wrist";
    select_3.options[1].value = "Wrist";      
  } 
  else if(select_1.options[select_1.selectedIndex].index == 2 && select_2.options[select_2.selectedIndex].index == 2)
  {
    select_3.options[0].text = "Wrist HR";
    select_3.options[0].value = "Wrist HR";
    select_3.options[1].text = "-";
    select_3.options[1].value = "-";       
  }


  else if(select_1.options[select_1.selectedIndex].index == 1 && select_2.options[select_2.selectedIndex].index == 0)
  {
    select_3.options[0].text = "Wrist Baro HR";
    select_3.options[0].value = "Wrist Baro HR";
    select_3.options[1].text = "Wrist";
    select_3.options[1].value = "Wrist";      
  }
  else if(select_1.options[select_1.selectedIndex].index == 1 && select_2.options[select_2.selectedIndex].index == 1)
  {
    select_3.options[0].text = "Wrist";
    select_3.options[0].value = "Wrist";
    select_3.options[1].text = "HR";
    select_3.options[1].value = "HR";      
  }
  else
  {
    select_3.options[0].text = "HR";
    select_3.options[0].value = "HR";
    select_3.options[1].text = " - ";
    select_3.options[1].value = " - ";     
  }     
}
