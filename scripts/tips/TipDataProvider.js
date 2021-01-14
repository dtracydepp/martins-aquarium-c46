// maintains the state of each tip; Tip data is an array of objects. Each object represents a single tip.

const tipCollection = [

    {
       tip1: "Do Regular Water Changes",
       tip2: "Vacuum Your Substrate",
       tip3: "Clean Your Aquarium Filter Media",
       tip4: "Bleach Your Plants",
       tip5: "Use Algae Scraper (+Vineger) on Your Glass"
    }
]

export const useTip = () => {
    return tipCollection.slice()
}
// console.log("Tips", tipCollection)