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
    let pet = {
        name: name,
        age: age,
        species: species,
    }
    petArray.push(pet)
}

function showPets(){
    // use a for..of loop to go through the pet array
    for (let currentPet of petArray){
    alert(currentPet.name)
    }
    // output the name of the pet
  }
  

function removePets() { 
    //Keep asking which subjects they want to delete until told to stop.
    let deletePet = prompt('Which pet do you want to delete?')
    while(deletePet!= 'stop'){
      pet.splice(indextoRemove, 1)
    }
}

function searchPets() {
    // Ask for the name to search and show petname + was found if it can find it otherwise show petname + was not found.
    let searchName = prompt('What is the name of pet do you want to search?')
    let searchResult = false
    for (let pet of petArray) {
      if (pet.name == searchName) {
        searchResult = true 
      }
    }
  
    if (searchResult == true){
      alert(searchName + ' was found! ')
    } else{
      alert(searchName + ' was not found...')
    }
}
