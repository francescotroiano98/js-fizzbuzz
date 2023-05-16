const ulelement = document.querySelector("ul");


for (let i = 1; i <= 100; i++){
    console.log(i);
    ulelement.innerHTML += `<li>${i}</li>`;
    if (i % 3 === 0) {

    

         
    } else if (i % 5 === 0){





    } else if (i % 3 === 0 && (i % 5 === 0)){





    }
}