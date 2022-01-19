let trace1 = {
    x:[],
    y:[],
    type:"scatter",
    name:"sinus"
}
var y1=[]
var y2=[]

let trace2 = {
    x:[],
    y:[],
    type:"scatter",
    name:"cosinus"
}
let graphData = []

var run = true

function konec(){
    run = false
 }

function show(){
    graphData = []
    if (run){
    if(document.getElementById("sinus").checked){
        graphData.push(trace1)}

    if(document.getElementById("cosinus").checked){
        graphData.push(trace2)}
    
    Plotly.newPlot("graph",graphData);
}
}

function show1(){
    if(document.getElementById("amplitude").checked){
        document.getElementById("jeden").style.display = "none";
    }

    if(document.getElementById("sliderik").checked){
        document.getElementById("druhy").style.display = "none";
    }
    if(!document.getElementById("amplitude").checked){
        document.getElementById("jeden").style.display = "block";
    }

    if(!document.getElementById("sliderik").checked){
        document.getElementById("druhy").style.display = "block";
    }
}

if(typeof(EventSource) !== "undefined") {
    var source = new EventSource("http://vmzakova.fei.stuba.sk/sse/sse.php");
    
    source.addEventListener("message", function(e) {
        var data = JSON.parse(e.data);
        
        var nasobenie = document.getElementById("num").value;
        y1 = data["y1"]*nasobenie;
        y2 = data["y2"]*nasobenie;
        
        trace1["x"].push(data["x"])
        trace1["y"].push(y1)

        trace2["x"].push(data["x"])
        trace2["y"].push(y2)  
        show()
        
    },false);
  
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
}