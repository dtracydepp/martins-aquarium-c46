import {useFish} from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'
import {useLocation} from './locations/LocationDataProvider.js'
import { LocationList } from './locations/LocationList.js'
import {useTip} from './tips/TipDataProvider.js'
import { TipList } from './tips/TipList.js'
import {mostHolyFish, soilderFish, nonHolyFish} from './fish/FishDataProvider.js'

// invokes the useFish function and stores the fish collection (new array) in the allTheFish variable
const allTheFish = useFish()

// console.log("new array of fish collection", allTheFish)

// loops through array, to get each individual fish object
for (const fish of allTheFish) {
    // console.log("fish object",fish)
}

const allTheLocations = useLocation ()
// console.log("new array of locations",allTheLocations)

for (const location of allTheLocations){
    // console.log("location object",location)
}

const allTheTips = useTip()

for (const tip of allTheTips){
    // console.log("tip object", tip)
}



FishList ()
LocationList ()
TipList ()
mostHolyFish ()
soilderFish ()
nonHolyFish()
