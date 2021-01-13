// HMTL representation of each fish to be rendered 


export const Fish = (fish) => {
    return `
        <section class="fishCard"> 
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__location">Harvest Location: ${fish.location}</div>
            <div class="fish__length">Length: ${fish.length} inches</div>
           <div class="fish__diet">Diet: ${fish.diet}</div>
        <div><img  class="fish__image image--card" src="${fish.image}" /></div>
        </section>
    `
}