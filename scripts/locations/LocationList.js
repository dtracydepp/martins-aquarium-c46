//creates container element and renders the individual location objects as HTML 

import { useLocation } from "./LocationDataProvider.js"
import { Location } from "./Location.js"

export const LocationList = () => {

    const contentElement = document.querySelector(".containerLeft__travelLocations")
    const locations = useLocation()

    let locationHTMLRepresentations = ""
    for (const location of locations) {

        locationHTMLRepresentations += Location(location)
    }


    // console.log("LocationList", locationHTMLRepresentations)

    contentElement.innerHTML += `
        <section class="locationCard">
        <h2>Places to See</h2>
          ${locationHTMLRepresentations}
        </section
    `
}