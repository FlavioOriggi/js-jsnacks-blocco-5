// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore.


var biciclette = [
    {
        nome : 'pinco',
        peso : 2
    },
    {
        nome : 'pallino',
        peso : 5
    },
    {
        nome : 'attila',
        peso : 1
    }
];

var pesoMin = biciclette[0];

for (var i = 0;  i < biciclette .length; i++){
    if(biciclette[i].peso < pesoMin.peso){
        pesoMin = biciclette[i];
    }       
}

console.log(pesoMin);

