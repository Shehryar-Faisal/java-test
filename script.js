// let btn= document.querySelector('button');

// btn.addEventListener('click',largest);
// const array=[0,111,16,19,10];
// function largest() {
//     let largest=(0);
//     let second=(0);
//     for (let i = 0; i < array.length; i++) {
//     if (array[i]> largest) {
//         second=largest;
//         largest=array[i];
        
//     } 
//     else if(array[i]<largest && array[i]>second)  {
//         second=array[i];
//     };
//     };
//     console.log(largest);
//     console.log(second);
// };

function createPerson(firstName, lastName, age) {
    const fullName = `${firstName} ${lastName}`;
    return { fullName, age };
}

const personInfo = createPerson("shehryar", "faisal", 16);
console.log(personInfo);
