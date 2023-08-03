let petArray = [
    {name: 'Luna', age: 5, speices: 'Dog'},
    {name: 'Bella', age: 0, speices: 'Cat'},
    {name: 'Charlie', age: 3, speices: 'Lizard'},
    {name: 'Max', age: 12,  speices: 'Dog'},
]

function addPets () {
  // Ask for the name, species and age, and add to petArray
    let name = prompt(" What's your pet's name? ")
    let species = prompt("What's kind of your pet?")
    let age = prompt('How old is your pet?')

    // Check that the input is valid
    if(name.match(/[a-zA-Z0-9]+/)&&
       age.match (/^([1-9]|[1-9][0-9])$/) &&
       species.test(/^[a-zA-Z]+$/)){
      let pet = {
        name: name,
        age: age,
        species: species,
      }

    // add pet object to pet array
    petArray.push(pet)
    } else {
      alert('The pet details are not valid')
    }
}


function showPets(){
    // use a for..of loop to go through the pet array
    for (let currentPet of petArray){
    alert(currentPet.name)
    }
  }
  

function removePets() { 
    //Output the names of each pet
    let index = 0
    for(let pet of petArray){
      alert(index + ":" + pet.name)
      index = index + 1
    }

    //get the index of the pet to remove
    let indextoRemove = prompt('Which pet would you like to remove?')

    // remove the pet at the index
    petArray.splice(indextoRemove,1)


}

function searchPets() {
    // Ask for the name to search
    let searchName = prompt('What is the name of pet do you want to search?')
    
    //Create a variable to store whether we found it or not (haven't yet)
    let searchResult = false

    //Check each pet's name to see if it's the pet we're looking for, update the result if it is
    for (let pet of petArray) {
      if (pet.name == searchName) {
        searchResult = true 
      }
    }

    //Output whether the search found the pet or not
    if (searchResult == true){
      alert(searchName + ' was found! ')
    } else{
      alert(searchName + ' was not found...')
    }
}
