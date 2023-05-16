const ulelement = document.querySelector("ul");


for (let i = 1; i <= 100; i++){
    console.log(i);
    

    if ((i % 3 === 0) && (i % 5 === 0)){

        ulelement.innerHTML += `<li>${"Fizzbuzz"}</li>`;





    } else if (i % 3 === 0) {

        ulelement.innerHTML += `<li>${"fizz"}</li>`;

         
    } else if (i % 5 === 0){

        ulelement.innerHTML += `<li>${"Buzz"}</li>`;



    } else{
        ulelement.innerHTML += `<li>${i}</li>`;
    }
}