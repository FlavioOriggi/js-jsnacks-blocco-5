// Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno :
// varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. (modificato) 


var orto = [
    {
        varietà : 'pippo', 
        peso : 1,  
        lunghezza : 20
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
        lunghezza : 23
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
        lunghezza : 26
    },
    {
        varietà : 'insipida', 
        peso : 8,  
        lunghezza : 27
    },
    {
        varietà : 'fragrante', 
        peso : 9,  
        lunghezza : 28
    },
    {
        varietà : 'frittura', 
        peso : 10,  
        lunghezza : 29
    }
];

var pesoTotale = 0;

for (var i = 0;  i < orto.length; i++){
    pesoTotale = pesoTotale + orto[i].peso;

    // oppure
    // pesoTotale += orto[i].peso;
}

console.log(pesoTotale);