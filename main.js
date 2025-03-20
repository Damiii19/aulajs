const array = [2,3,4,5,6]; //criando array

array.forEach(item =>{ //para cada item do array
    if(item % 2 === 0){
        console.log(`O número ${item} é par`);
    }
    else{
        console.log(`O número ${item} é ímpar`);
    }

});