// maintains the state of each fish; Fish data is an array of objects. Each object represents a single fish.


const fishCollection = [
    {
        name: "Scar",
        species: "Butterfly Fish",
        location: "Coral reefs in the Atlantic, Indian and Pacific Oceans",
        length: 9,
        diet: " Zooplankton, tiny motile crustaceans and mollusks, and types of soft and stony corals",
        image:"https://www.fishkeepingworld.com/wp-content/uploads/2018/12/Threadfin-Butterflyfish.jpg"

    },

    {
        name: "Lilo",
        species: "Discus",
        location: "Amazon River",
        length: 5,
        diet: "Algae flakes, tropical flakes, and shrimp pellets",
        image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Discus.jpg"

    },

    {
        name: "Stitch",
        species: "Flowerhorn Cichlid",
        location: "Singapore and Malaysia",
        length: 10,
        diet: "Crickets, mealworms, and frozen shrimp",
        image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Flowerhorn_Cichlid.jpg"

    },

    {
        name: "Nyla",
        species: "Flowerhorn Cichlid",
        location: "Singapore and Malaysia",
        length: 11,
        diet: "Crickets, mealworms, and frozen shrimp",
        image:"https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Flowerhorn_Cichlid.jpg"

    },

    {
        name: "Gank",
        species: "Discus",
        location: "Amazon River",
        length: 16,
        diet: "Algae flakes, tropical flakes, and shrimp pellets",
        image: "https://www.fishkeepingworld.com/wp-content/uploads/2018/12/Threadfin-Butterflyfish.jpg"

    }
]

// exports useFish function; when called  (in a different comp) will return a copy of fishCollection in a new array. the state of the original data will not change.
export const useFish = () => {
    return fishCollection.slice()
}
// console.log (fishCollection)

export const mostHolyFish = ()=> {

    const holyFish = []

    for (const fish of fishCollection) {
  
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        }
    }
    console.log("Holy Fish", holyFish)
    return holyFish
    
}


export const soilderFish = () => {

    const soilders = []

    for (const fish of fishCollection) {

    if (fish.length % 5 === 0 && fish.length % 3 !==0) {
        soilders.push(fish)
    }
}
    console.log("Soilder Fish", soilders)
    return soilders
}


export const nonHolyFish = () => {

    const regularFish = []

    for (const fish of fishCollection) {

        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish)
        }
    }
    console.log("Regular Fish", regularFish)
    return regularFish
}
