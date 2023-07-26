let petArray = [
    {name: 'Luna', age: 5, speices: 'Dog'}
    {name: 'Bella', age: 0, speices: 'Cat'}
    {name: 'Charlie', age: 3, speices: 'Lizard'}
    {name: 'Max', age: 12,  speices: 'Dog'}
    {name: 'Rocky', age: 96, speices: 'Turtle'}
    {name: 'Lucy', age: 4,  speices: 'Cat'}
    {name: 'Bailey', age: 6,  speices: 'Fish'}
    {name: 'Milo', age: 2,  speices: 'Hamster'}
    {name: 'Cooper', age: 2,  speices: 'Duck'}
    {name: 'Coco', age: 10, speices: 'Dog'}
]

function pet () {
    let name = prompt(" What's your pet's name? ")
    let species = prompt("What's kind of your dog?")
    let age = prompt('How old is your dog?')
    let pet = {
        name: name,
        age: age,
        species: species,
    }
    PermissionStatus.push(pet)
}

function showPets (){
    alert (petArray)
}


