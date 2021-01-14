// / Renders individual tip object as HMTL , Tip function is exported and pass in tip object(1 parameter); when called it will return HTML for 1 single tip object
// the return is a string containing HTML

export const Tip = (tip) => {
    return `
    <aside class="containerRight">
    <ul>
        <li>${tip.tip1}</li>
        <li>${tip.tip2}</li>
        <li>${tip.tip3}</li>
        <li>${tip.tip4}</li>
        <li>${tip.tip5}</li>
     </ul>
     </aside>
    
    `
}