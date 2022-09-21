function szamol(){
    let centi = parseFloat(document.getElementById('cm').value);
    let kilo = parseFloat(document.getElementById('kg').value);
    document.getElementById('eredmeny').value = kilo / (centi/100) * 2;

}


function init(){
    document.getElementById('cm').addEventListener('input',szamol)
    document.getElementById('kg').addEventListener('input',szamol)
    
    
    
    console.log('Init');
}


