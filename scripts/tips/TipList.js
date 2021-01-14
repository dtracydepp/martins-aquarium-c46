import {useTip} from "./TipDataProvider.js"
import {Tip} from "./Tip.js"

export const TipList = () => {

 const contentElement = document.querySelector(".containerRight")
    const tips = useTip()
    

let tipHTMLRepresentations = ""
for (const tip of tips) {

    tipHTMLRepresentations += Tip(tip)
}

// console.log("TipList",tipHTMLRepresentations)

contentElement.innerHTML += `
<aside class="ccontainerRight">
<h3>Caring For Your Aquarium</h3>
    ${tipHTMLRepresentations}
    </aside>

`

}
