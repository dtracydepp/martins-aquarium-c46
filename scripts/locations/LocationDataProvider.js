// maintains the state of each location; Location data is an array of objects. Each object represents a single location.

const locationCollection = [


    {
        location: "Costa Rica",
        image:"https://www.worldtravelguide.net/wp-content/uploads/2007/03/shu-costa-rica-445483960-1440x823.jpg"
    },
    
    {
        location: "Amazon Delta River",
        image:"/www.expeditions.com/globalassets/der-images/EX/EX71329/EX100213B.jpg"
    },
    
    {
        location: "Singapore",
        image:"https://pix10.agoda.net/geo/country/114/3_114_singapore_02.jpg?s=1920x"
    }
]

// exports useLocation function; when called  (in a different comp) will return a copy of locationCollection in a new array. the state of the original data will not change.

export const useLocation = () => {
    return locationCollection.slice()
}
console.log("Locations",locationCollection)