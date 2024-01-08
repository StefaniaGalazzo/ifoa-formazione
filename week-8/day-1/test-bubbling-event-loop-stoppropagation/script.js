/** this **/

class VerificaNumeri {
  constructor(numeri = []) {
    numeri ? (this.numeri = numeri) : null;
  }
  verifica() {
    if (!this.numeri || this.numeri.length === 0) {
      console.log("Inserisci un array di numeri.");
      return;
    }

    this.numeri.forEach((numero) => {
      if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("Paperino");
      } else if (numero % 3 === 0) {
        console.log("Pippo");
      } else if (numero % 5 === 0) {
        console.log("Pluto");
      } else {
        console.log(`il numero ${numero.toString()} non è divisile`);
      }
    });
  }
}

const test = new VerificaNumeri([1, 3, 5, 15, 7]);
if (test.hasOwnProperty("numeri")) test.verifica();
else console.log("Non ci sono numeri");

/*******************************/

/** events **/
const main = document.getElementById("main");
const divUNO = document.getElementById("div-1");
const divDUE = document.getElementById("div-2");
const divTRE = document.getElementById("div-3");
const p = document.getElementById("p");

// ovunque clicco sarò sul main, quindi l'evento verrà triggherato anche cliccando agli elementi interni al main
main.addEventListener("click", () => {
  main.style.background = "blue";
});

// se clicco sul div, l'evento sullo specifico div verrà triggherato MA anche quello del suo container, che percepisce inevitalmente un azione su se stesso
// divUNO.addEventListener("click", () => {
//   divUNO.style.background = "red";
// });

// con stopProp blocco il bubbling child/parent
// con immediateStopProp (su più eventi su uno stesso el)
//  blocco gli altri listener sullo stesso oggetto
divUNO.addEventListener("click", (e) => {
  e.stopPropagation();
  //   e.stopImmediatePropagation()
  divUNO.style.background = "red";
});

p.addEventListener("click", (e) => {
  //   e.stopPropagation();
  //   e.stopImmediatePropagation();
  p.style.background = "green";
});
p.addEventListener("click", (e) => {
  //   e.stopPropagation();
  //   e.stopImmediatePropagation();
  p.style.color = "pink";
});

p.addEventListener("click", function (event) {
  //   event.stopImmediatePropagation();
  console.log(
    "Button clicked, and no other handlers will be executed in the same phase."
  );
});

p.addEventListener("click", function (event) {
  console.log(
    "This handler will not be executed due to stopImmediatePropagation."
  );
});

// event delegation: metto l'evento nel padre e delego
//il click sull'elemento specifico al "e.target"
main.addEventListener("click", (e) => {
  e.target.style.background = "acqua";
});

/*** promise all ***/
const promiseUNO = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promiseUNO");
    }, 2000);
  });
};
const promiseDUE = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promiseUNO");
    }, 4000);
  });
};

const allPromises = async () => {
  const result = await Promise.all([promiseUNO(), promiseDUE]);
  console.log(result);
};
export { promiseUNO, promiseDUE, allPromises };
