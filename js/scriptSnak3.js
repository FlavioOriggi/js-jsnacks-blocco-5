// Crea 10 oggetti che rappresentano una zucchina.

// Dividi in due array separati le zucchine che misurano fino a 15 e più di 15cm. 

// Infine stampa separatamente quanto pesano i due gruppi di zucchine

var orto = [
    {
        varietà : 'pippo', 
        peso : 1,  
        lunghezza : 5
    },
    {
        varietà : 'anacleto', 
        peso : 2,  
        lunghezza : 21
    },
    {
        varietà : 'verde', 
        peso : 3,  
        lunghezza :22
    },
    {
        varietà : 'blu', 
        peso : 4,  
        lunghezza : 8
    },
    {
        varietà : 'rossa', 
        peso : 5, 
        lunghezza : 24
    },
    {
        varietà : 'amara', 
        peso : 6,  
        lunghezza : 25
    },
    {
        varietà : 'dolce', 
        peso : 7,  
        lunghezza : 10
    },
    {
        varietà : 'insipida', 
        peso : 8,  
        lunghezza : 27
    },
    {
        varietà : 'fragrante', 
        peso : 9,  
        lunghezza : 15
    },
    {
        varietà : 'frittura', 
        peso : 10,  
        lunghezza : 29
    }
];

// Dividi in due array separati le zucchine che misurano fino a 15 e più di 15cm.
var lungMin = [];
var lungMax = [];
var pesoLungMin = 0;

for (var i = 0;  i < orto .length; i++){
    if(orto[i].lunghezza <= 15){
        lungMin.push(orto[i]);           
    } else{
        lungMax.push(orto[i]);           
    }     
}
// console.log(lungMin);
// console.log(lungMax);

// Infine stampa separatamente quanto pesano i due gruppi di zucchine
var pesoLungMin = 0;
for (var i = 0;  i < lungMin.length; i++){
    pesoLungMin += lungMin[i].peso;    
}
console.log('le zucchine lunghe fino a 15cm pesano ' + pesoLungMin + ' kg');

var pesoLungMax = 0;
for (var i = 0;  i < lungMax.length; i++){
    pesoLungMax += lungMax[i].peso;    
}
console.log('le zucchine piu lunghe più di 15cm pesano ' + pesoLungMax + ' kg');