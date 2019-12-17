function hello(){
    console.log('Hello!');
}

function product(a, b){
    return a*b;
}

function switchFunc(a){
    switch(a){
        case 'math':
            console.log('I love math');
            break;
        case 'chemistry':
            console.log('I love chemistry');
            break;
        default:
            console.log('I don\'t love study');
            break;
        
    }
}

hello();
console.log(product(3, 7));
switchFunc('123');
switchFunc('math');
let numArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

if(numArray[0] == numArray[5]){
    console.log('is equal '+numArray[0]);
}

let i=0;
while(i<5){
    i++;
    console.log('the iterator is '+i);
}

for(let j = 0; j<5;j++){
    console.log('the iterator is '+j);
}

