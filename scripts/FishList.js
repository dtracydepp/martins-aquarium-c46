//creates container element and renders the individual fish objects as HTML to the DOM

import {useFish} from "./FishDataProvider.js"
import {Fish} from "./Fish.js"

export const FishList = () => {

    // Get reference to the  element
const contentElement = document.querySelector(".containerLeft__fishList")
    const fishes = useFish()

    // Generate all of the HTML for all of the fish; invokes the Fish compon function and pass the current fish object as an argument. Each time, add the return value to the fishHTMLRep variable with "=+"
// Each time you loop, you are adding a new fish
    let fishHTMLRepresentations = ""
    for (const fish of fishes) {

        fishHTMLRepresentations += Fish(fish)
    }

    // Adds a section and renders all of the fish to the DOM
    contentElement.innerHTML += `
        <section class="fishList">
        <h3>Fish Collection</h3>
            ${fishHTMLRepresentations}
        </section>
        `

}