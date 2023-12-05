/***** CONFRONTO TRA DUE UTENTI  *****/
// class User {
//   constructor(firstName, lastName, age, location) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.location = location;
//   }

//   compareAge(altraPersona) {
//     if (this.age > altraPersona.age) {
//       return `${this.firstName} è più vecchio di ${altraPersona.firstName}`;
//     } else if (this.age < altraPersona.age) {
//       return `${this.firstName} è più giovane di ${altraPersona.firstName}`;
//     } else {
//       return `${this.firstName} ha la stessa età di ${altraPersona.firstName}`;
//     }
//   }
// }

/***** CONFRONTO TRA PIU UTENTI  *****/
// class User {
//   constructor(firstName, lastName, age, location) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.location = location;
//   }

//   confrontaEta(altrePersone) {
//     if (!Array.isArray(altrePersone) || altrePersone.length === 0) {
//       return "Devi fornire un array di almeno due utenti per il confronto.";
//     }

//     const risultatiConfronto = altrePersone.map((altraPersona) => {
//       if (this.age > altraPersona.age) {
//         return `${this.firstName} è più vecchio di ${altraPersona.firstName}`;
//       } else if (this.age < altraPersona.age) {
//         return `${this.firstName} è più giovane di ${altraPersona.firstName}`;
//       } else if (this.firstName != altraPersona.firstName) {
//         return `${this.firstName} ha la stessa età di ${altraPersona.firstName}`;
//       }
//     });

//     return risultatiConfronto.join("\n"); // Unisce gli elementi dell'array in una sola stringa
//   }
// }

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(altrePersone) {
    if (!Array.isArray(altrePersone) || altrePersone.length === 0) {
      return "Devi fornire un array di almeno due utenti per il confronto.";
    }
    let risultato = "";
    for (let i = 0; i < altrePersone.length - 1; i++) {
      const personaA = altrePersone[i];
      for (let j = i + 1; j < altrePersone.length; j++) {
        const personaB = altrePersone[j];
        if (personaA.age > personaB.age) {
          risultato += `${personaA.firstName} è più vecchio di ${personaB.firstName}\n`;
        } else if (personaA.age < personaB.age) {
          risultato += `${personaA.firstName} è più giovane di ${personaB.firstName}\n`;
        } else {
          risultato += `${personaA.firstName} ha la stessa età di ${personaB.firstName}\n`;
        }
      }
    }
    return risultato.trim();
  }
}
// uso la classe User per creare due utenti
const utente2 = new User("Stefania", "Galazzo", 33, "Torino");
const utente1 = new User("Marco", "Furi", 30, "Milano");
const utente3 = new User("Alice", "Zarattani", 31, "Bologna");

// Confronto delle età e stampa del risultato
const risultatoConfronto = utente1.compareAge([utente1, utente2, utente3]);
console.log(risultatoConfronto);

//
/******* Form Pet *******/
const submitBtn = document.getElementById("createPet");
const petsList = document.getElementById("listaPets");

const petsArray = [];

submitBtn.addEventListener("click", function () {
  if (
    petName.value != "" &&
    ownerName.value != "" &&
    species.value != "" &&
    breed.value != ""
  ) {
    addPet();
    printPets();
    resettaForm();
  } else {
    document.querySelector(
      "ul#listaPets"
    ).innerHTML = `<p class='error'> Inserisci i dati per il tuo Pet</p>`;
  }
});

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  condividePadrone(altraPet) {
    return this.ownerName === altraPet.ownerName;
  }
}

// aggiungo all'array i valori presi dal form
function addPet() {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;
  const nuovaPet = new Pet(petName, ownerName, species, breed);
  petsArray.push(nuovaPet);
}

// stampo i valori del form nella lista html
function printPets() {
  petsList.innerHTML = "";
  petsArray.forEach((pet, index) => {
    const listItem = document.createElement("li");
    // stampo i dettagli del pet
    listItem.innerHTML = `Pet: ${pet.petName}, Species: ${pet.species}, Breed: ${pet.breed}, Owner: ${pet.ownerName},`;
    haveSameOwner(pet, index, listItem);
    petsList.appendChild(listItem);
  });
}

function haveSameOwner(p, indx, list) {
  // effettuo il confronto del metodo per i pet nell'array
  for (let i = 0; i < petsArray.length; i++) {
    if (i !== indx) {
      const condividePadrone = p.condividePadrone(petsArray[i]);
      list.innerHTML += `<br>Condivide il padrone con ${petsArray[i].petName}: ${condividePadrone}`;
    }
  }
}

function resettaForm() {
  document.getElementById("petForm").reset();
}
