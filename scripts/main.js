import {useFish} from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'

// invokes the useFish function and stores the fish collection (new array) in the allTheFish variable
const allTheFish = useFish()

console.log("new array of fish collection", allTheFish)

// loops through array, to get each individual fish object
for (const fish of allTheFish) {
    console.log("fish object",fish)
}

FishList ()