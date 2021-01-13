// Renders individual fish objects as HTML to the DOM


export const Fish = (fish) => {
    return `
        <section class="fishCard"> 
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__length">${fish.length}</div>
           <div class="fish__diet">${fish.diet}</div>
        <div><img  class="fish__image image--card" src="${fish.image}" /></div>
        </section>
    `
}