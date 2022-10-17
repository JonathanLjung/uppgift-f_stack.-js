
let Container = document.querySelector(".Container") // Gör en ny variabel och kopplar till en class på HTML filen. 

const userComponent = (user)=>  // Ny div class som importerar data från user.
` 
<div class="userWrapper">
<span>${user.firstname} </span>
<span>${user.lastname}</span>
<span>${user.personalityType}</span>
<span>${user.group}</span>
</div>
`

function getUsers() { // Funktioner för att fetcha, sortera & dela in i grupper. 
 
    fetch('http://localhost:9999/api/users/') // Fetchar information från users (alla användare)
        .then((response) => response = response.json())
        .then(users => {
            const firstNameBtn = document.querySelector("#firstname")
            const lastNameBtn = document.querySelector("#lastname")
            const personalityBtn = document.querySelector("#personalityType")
            const group = document.querySelector("#group")

            Container.innerHTML = users.map(userComponent).join("")

            firstNameBtn.addEventListener("click", ()=>{ // Sorterar förnamn i bokstavsordning.
                Container.innerHTML=""
                users.sort(function(a, b){
                    if(a.firstname < b.firstname) { return -1; }
                    if(a.firstname > b.firstname) { return 1; }
                    return 0;
                })
                Container.innerHTML = users.map(userComponent).join("")

            })
            lastNameBtn.addEventListener("click", ()=>{ // Sorterar efternamn i bokstavs-ordning.
                Container.innerHTML=""
                users.sort(function(a, b){
                    if(a.lastname < b.lastname) { return -1; }
                    if(a.lastname > b.lastname) { return 1; }
                    return 0;
                })
                Container.innerHTML = users.map(userComponent).join("")

            })
            personalityBtn.addEventListener("click", ()=>{ // Sorterar personlighetsfärg i bokstavs-ordning.
                Container.innerHTML=""
                users.sort(function(a, b){
                    if(a.personalityType < b.personalityType) { return -1; }
                    if(a.personalityType > b.personalityType) { return 1; }
                    return 0;
                })
                Container.innerHTML = users.map(userComponent).join("")

            })
        group.addEventListener("click", ()=>{ // Sorterar grupper i nummer-ordning.
            Container.innerHTML=""
            users.sort(function(a, b){
                if(a.group < b.group) { return -1; }
                if(a.group > b.group) { return 1; }
                return 0;
            })
            Container.innerHTML = users.map(userComponent).join("")

        })

        
        function assignGroup( index, size, array ) {  // Funktion som delar upp grupper baserat på groupAmount
        
            let group = Math.ceil( ( index + 1 ) / size )
            array[index].group = group
            index++
        
            if ( index >= users.length ) {
                console.log( "quantity: ", array.length )
                console.log( "users list: ", array )
                Container.innerHTML = array.map(userComponent).join("")
                return true
            }
            assignGroup( index, size, array )
        }
        let groupBtn = document.querySelector("#groupBtn") // Hämtar ID från HTML-filen.
        let groupAmount = document.querySelector("#groupAmount") // Hämtar ID från HTML-filen.
        groupBtn.addEventListener("click", ()=>{
            const sortedUsers = users.sort(() => Math.random() - 0.5); // Sorterar alla users slumpmässigt med hjälp av Math.random.
            assignGroup(0,groupAmount.value,sortedUsers)
            console.log(sortedUsers)
            
        })
        
        assignGroup(0,1,users) // Standard grupp-indelning, index är 0, 1 är hur många personer det ska vara i varje grupp och users är alla användare. 
        })
}
getUsers() // Anropar hela funktionen ovan. 


