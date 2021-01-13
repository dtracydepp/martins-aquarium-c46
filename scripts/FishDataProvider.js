// maintains the state of each fish


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
        length: 6,
        diet: "Algae flakes, tropical flakes, and shrimp pellets",
        image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Discus.jpg"

    },

    {
        name: "Stitch",
        species: "Flowerhorn Cichlid",
        location: "Singapore and Malaysia",
        length: 11,
        diet: "Crickets, mealworms, and frozen shrimp",
        image: "https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Flowerhorn_Cichlid.jpg"

    },

    {
        name: "Nyla",
        species: "Flowerhorn Cichlid",
        location: "Singapore and Malaysia",
        length: 3,
        diet: "Crickets, mealworms, and frozen shrimp",
        image:"https://www.petlandtexas.com/wp-content/uploads/2020/01/Petland_Texas_Flowerhorn_Cichlid.jpg"

    },

    {
        name: "Gank",
        species: "Discus",
        location: "Amazon River",
        size: 16,
        diet: "Algae flakes, tropical flakes, and shrimp pellets",
        image: "https://www.fishkeepingworld.com/wp-content/uploads/2018/12/Threadfin-Butterflyfish.jpg"

    }
]

export const useFish = () => {
    return fishCollection.slice()
}
console.log (fishCollection)