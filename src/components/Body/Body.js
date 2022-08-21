import './Body.css'

import pictures from "../../images/pics.png"

export default function Body() {
    return (
        <div className='body-content'>
            <img src={pictures} className="pictures" alt="multiple pictures"></img>

            <div className='description'>
                <h1>
                    Online Experiences
                </h1>
                <p>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>

        </div>
    )
}