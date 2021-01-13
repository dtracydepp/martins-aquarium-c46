// Renders individual fish objects as HMTL , Fish function is exported and pass in fish object(1 parameter); when called it will return HTML for 1 single fish object
// the return is a string containing HTML

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