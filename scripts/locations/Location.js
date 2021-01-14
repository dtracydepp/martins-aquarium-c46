// / Renders individual location objects as HMTL , Location function is exported and pass in location object(1 parameter); when called it will return HTML for 1 single location object
// the return is a string containing HTML

export const Location = (location) => {
    return `
    <section class="locationCard">
    <p class="locationCard__country">Location: ${location.name}</p>
    <img src="https://www.worldtravelguide.net/wp-content/uploads/2007/03/shu-costa-rica-445483960-1440x823.jpg"
        alt="" class="locationCard__landmark">
</section>  
    `
}