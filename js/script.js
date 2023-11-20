var myModels = ["/models/orange.glb", "/models/teal.glb"]
var counter = 0;

document.getElementById("change-colour"),addEventListener("click", function(){
    counter++;
    if (counter==3){
        counter = 0;
    }
    document.getElementById("model").src = myModels[counter];
    document.getElementById("model-info").style.display = "block";

});