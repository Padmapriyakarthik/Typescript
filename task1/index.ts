
// Leap Year or Not
let leap=(year:number):boolean=> {
    return (year%4==0)? true : false;
}

console.log(leap(1998));
console.log(leap(2021));

//String Reverse

let reverse=(word:string):string=>{
    let reversed_word=""
    for(let i=word.length-1;i>=0;i--)
    {
        reversed_word+=word[i];
    }
    return reversed_word;
}

console.log("The reversed word of padmapriya is"+reverse('padmapriya'));