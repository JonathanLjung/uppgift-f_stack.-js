let firstNameReverse = true; // Skapar nya variabler för att kunna använda sorterings funktionen både fram och bak.
let lastNameReverse = true;
let personalityReverse = true;
let groupReverse = true;

let Container = document.querySelector(".Container"); // Skapar ny variabel och kopplar till en class på HTML filen.

const userComponent = (
  user // Ny div class som importerar data från user.
) =>
  ` 
<div class="userWrapper flex">
<span>${user.firstname} </span>
<span>${user.lastname}</span>
<span>${user.personalityType}</span>
<span>${user.group}</span>
</div>
`;

// Återställnings-knapp
function resetBtn() {
  console.log("Hej");
  window.location.reload();
}

// Sökfunktion
function searchFunction() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let userWrapper = document.getElementsByClassName("userWrapper");

  for (i = 0; i < userWrapper.length; i++) {
    if (!userWrapper[i].innerHTML.toLowerCase().includes(input)) {
      userWrapper[i].classList.remove("flex");
    } else {
      userWrapper[i].classList.add("flex");
    }
  }
}

function getUsers() {
  // Funktioner för att fetcha, sortera & dela in i grupper.

  fetch("http://localhost:9999/api/users/") // Fetchar information från users (alla användare)
    .then((response) => (response = response.json()))
    .then((users) => {
      const firstNameSort = document.querySelector("#firstname");
      const lastNameSort = document.querySelector("#lastname");
      const personalitySort = document.querySelector("#personalityType");
      const groupSort = document.querySelector("#group");

      Container.innerHTML = users.map(userComponent).join("");

      // if else sats som gör så att du kan sortera alfabetiskt samt omvänd alfabetiskt ordning.
      firstNameSort.addEventListener("click", () => {
        Container.innerHTML = "";
        users.sort(function (a, b) {
          if (firstNameReverse) {
            if (a.firstname < b.firstname) {
              return -1;
            }
            if (a.firstname > b.firstname) {
              return 1;
            }
            return 0;
          } else {
            if (a.firstname < b.firstname) {
              return 1;
            }
            if (a.firstname > b.firstname) {
              return -1;
            }
            return 0;
          }
        });
        Container.innerHTML = users.map(userComponent).join("");
        firstNameReverse = !firstNameReverse;
        personalityReverse = true;
        lastNameReverse = true;
        groupReverse = true;
      });
      // if else sats som gör så att du kan sortera alfabetiskt samt omvänd alfabetiskt ordning.
      lastNameSort.addEventListener("click", () => {
        Container.innerHTML = "";
        users.sort(function (a, b) {
          if (lastNameReverse) {
            if (a.lastname < b.lastname) {
              return -1;
            }
            if (a.lastname > b.lastname) {
              return 1;
            }
            return 0;
          } else {
            if (a.lastname < b.lastname) {
              return 1;
            }
            if (a.lastname > b.lastname) {
              return -1;
            }
            return 0;
          }
        });
        Container.innerHTML = users.map(userComponent).join("");
        lastNameReverse = !lastNameReverse;
        firstNameReverse = true;
        personalityReverse = true;
        groupReverse = true;
      });
      // if else sats som gör så att du kan sortera alfabetiskt samt omvänd alfabetiskt ordning.
      personalitySort.addEventListener("click", () => {
        Container.innerHTML = "";
        users.sort(function (a, b) {
          if (personalityReverse) {
            if (a.personalityType < b.personalityType) {
              return -1;
            }
            if (a.personalityType > b.personalityType) {
              return 1;
            }
            return 0;
          } else {
            if (a.personalityType < b.personalityType) {
              return 1;
            }
            if (a.personalityType > b.personalityType) {
              return -1;
            }
            return 0;
          }
        });
        Container.innerHTML = users.map(userComponent).join("");
        personalityReverse = !personalityReverse;
        // Återställer alla Reverse variabler till true när du aktiverar funktionen.
        lastNameReverse = true;
        groupReverse = true;
        firstNameReverse = true;
      });
      // if else sats som gör så att du kan sortera alfabetiskt samt omvänd alfabetiskt ordning.
      groupSort.addEventListener("click", () => {
        Container.innerHTML = "";
        users.sort(function (a, b) {
          if (groupReverse) {
            if (a.group < b.group) {
              return -1;
            }
            if (a.group > b.group) {
              return 1;
            }
            return 0;
          } else {
            if (a.group < b.group) {
              return 1;
            }
            if (a.group > b.group) {
              return -1;
            }
            return 0;
          }
        });
        Container.innerHTML = users.map(userComponent).join("");
        groupReverse = !groupReverse;
        personalityReverse = true;
        lastNameReverse = true;
        firstNameReverse = true;
      });

      function assignGroup(index, size, array) {
        // Funktion som delar upp grupper baserat på groupAmount

        let group = Math.ceil((index + 1) / size);
        array[index].group = group;
        index++;

        if (index >= users.length) {
          console.log("quantity: ", array.length);
          console.log("users list: ", array);
          Container.innerHTML = array.map(userComponent).join("");
          return true;
        }
        assignGroup(index, size, array);
      }

      let groupBtn = document.querySelector("#groupBtn"); // Hämtar ID från HTML-filen.
      let groupAmount = document.querySelector("#groupAmount"); // Hämtar ID från HTML-filen.
      groupBtn.addEventListener("click", () => {
        const sortedUsers = users.sort(() => Math.random() - 0.5); // Sorterar alla users slumpmässigt med hjälp av Math.random.
        assignGroup(0, groupAmount.value, sortedUsers);
        console.log(sortedUsers);
      });

      assignGroup(0, 1, users); // Standard grupp-indelning, index är 0, 1 är hur många personer det ska vara i varje grupp och users är alla användare.
    });
}

getUsers(); // Anropar hela funktionen ovan.
