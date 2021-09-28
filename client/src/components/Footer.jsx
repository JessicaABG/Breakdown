import { useState } from "react"
function Footer() {
    const lurl = `https://www.linkedin.com/in/jessica-gonzales-07a545217/`;
    const gurl = `https://git.generalassemb.ly/jessicaabg`;
    return (
        <div className='footer'>
            Contact Me:
            <a href={lurl}> LinkedIn </a>

            <a href={gurl}> GitHub</a>
        </div>
    )
}

export default Footer
