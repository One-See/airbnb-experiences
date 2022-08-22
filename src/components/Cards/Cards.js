import './Cards.css'

import star_logo from '../../images/star.png'

export default function Cards(props) {

    console.log(props, 'card prop')

    return (
        <div className='card'>
            <img className='card-img' src={require(`../../images/${props.coverImg}`)} alt="describring experience"></img>
            {props.openSpots === 0 && <span className='on-img-text'>Sold Out</span>}
            <div className='img-description'>
                <span className='span1'>
                    <img className='star' src={star_logo} alt="star"></img> {props.stats.rating}({props.stats.reviewCount}).USA
                </span>
                <span className='span2'>
                    {props.title}
                </span>
                <span className='span3'>
                    From ${props.price} / person
                </span>
            </div>
        </div>
    )
}