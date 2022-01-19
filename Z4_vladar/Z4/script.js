var nameCorrect = false;
var surnameCorrect = false;


function nameVal(){
  var name = document.getElementById("name").value;
  if(name>0 && name <10){
    nameCorrect=true;
    document.getElementById("nameValid").innerHTML="";
  }
  else {
    nameCorrect=false;
    document.getElementById("nameValid").innerHTML="Pole musí byť vyplnené číslom 1-9";
  }
}

function surnameVal(){
  var name = document.getElementById("surname").value;
  if(name>0 && name <10){
    surnameCorrect=true;
    document.getElementById("nameValid").innerHTML="";
  }
  else {
    surnameCorrect=false;
    document.getElementById("nameValid").innerHTML="Pole musí byť vyplnené číslom 1-9";
  }
}

function correct(){
  if(nameCorrect==false || surnameCorrect==false){
  }
  else{
    document.getElementById('myModal').style.display = 'block';
  }

}

function show1(){
  document.getElementById('myModal').style.display = 'none';
}

function generateTable(){
    correct()
    var x = document.getElementById("name").value;
    var y = document.getElementById("surname").value;
    dialogBody.innerHTML=""
    document.getElementById("dialogBody").innerHTML = ""
    let table = document.createElement("table")
    table.classList.add("table")
    table.classList.add("table-striped")
    table.classList.add("table-bordered")
    let tableHeader  = document.createElement("thead")
    tableHeader.classList.add("thead-dark")
    let tableBody = document.createElement("tbody")
    table.appendChild(tableHeader)
    table.appendChild(tableBody)

    for(let i = 0; i <= y; i++){
        let tr = document.createElement("tr")
        let actualRow
        if(i == 0){
            actualRow = tableHeader.appendChild(tr)
        }else{
            actualRow = tableBody.appendChild(tr)
        }
        for(let j = 0; j <= x; j++){
            let text
            if(i == 0){
                if(j == 0){
                    text = document.createTextNode(``)
                }else{
                    text = document.createTextNode(`X = ${j}`)
                }
            }else{
                if(j == 0) {
                    text = document.createTextNode(`Y = ${i}`)
                }else{
                    text = document.createTextNode(`${i * j}`)
                }
            }
            let td = document.createElement("td")
            td.appendChild(text)
            actualRow.appendChild(td)
        }
    }
    document.getElementById("dialogBody").appendChild(table)
}