
function findNumber(numbers){
    // Write your code here
    let len          = numbers.length;

    while(1){
        console.warn("iteración");
        console.log(numbers);
        for(let j = 0; j < (len-1); j++){
            let n1  = numbers[j]+'';
            n1      = n1.length > 1 ? n1[n1.length-1] 
                                    : n1;
            n1     *= 1;

            let n2  = numbers[j+1]+'';
            n2      = n2.length > 1 ? n2[n2.length-1] 
                                    : n2;
            n2     *= 1;

            let num = n1 + n2;
            numbers.push( num );
        }
        console.log(numbers);
        numbers = numbers.splice(len, len);
        len     = numbers.length;
        if(len===2){ break;}
    }
    
    console.warn("resultado final");
    console.log(numbers);

    let x1 = numbers[0]+'';
    let y1 = x1.length;
    let z1 = x1[y1-1];

    let x2 = numbers[1]+'';
    let y2 = x2.length;
    let z2 = x2[y2-1];

    return z1+z2;
}


let arr = [1,2,3,4];
// arr     = [4,5,6,7];
let res = findNumber(arr);
console.log("El resultado es:",res);