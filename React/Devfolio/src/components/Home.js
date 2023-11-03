import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    useEffect(() => {
        let element = document.querySelector('.suggestion-box')
        if(element!=null){
            element.style.marginTop = '1.2rem'
        }
    },[])
  return (
    <div className='my-5'>
      <div className="main1">
        <div className="main1-text">Get Fresh Juice , Tea or Coffee right at your doorstep !</div>
    </div>
    <div className="quality">We maintain Quality over Quantity.</div>
    <div className="varities">
        <div className="varities1 mx-4 my-3">
            <div className="varities-image1"></div>
            <div className="varities-text">
                <div className="varity-heading">Coffee</div>
                <div className="varity-desc">Get the Western style flavour of Coffee now at your home. Explore the different Varities now...</div>
                <button className="explore"><a href="coffee" style={{ textDecoration: 'none',color:'black' ,fontWeight:'500'}}>Explore</a></button>
            </div>
        </div>
        <div className="varities2 my-3">
            <div className="varities-text">
                <div className="varity-heading">Tea</div>
                <div className="varity-desc">We served the most authentic tea ever tasted. Explore the different varities of Teas made organically.</div>
                <button className="explore"><a href="tea" style={{ textDecoration: 'none', color:'black',fontWeight:'500'}}>Explore</a></button>
            </div>
            <div className="varities-image2"></div>
        </div>
        <div className="varities3 mx-4 my-4">
            <div className="varities-image3"></div>
            <div className="varities-text">
                <div className="varity-heading">Juices</div>
                <div className="varity-desc">Explore the Freshly prepared Fruit Juices with no Adultration and no Artificial Sweetners.</div>
                <button className="explore"><a href="juice" style={{textDecoration: 'none', color:'black',fontWeight:'500'}}>Explore</a></button>
            </div>
        </div>
    </div>
    <div className="joinprime">
        <div className="prime">
            Join the Prime and unlock the following benefits!
        </div>
        <div className="prime-benefits">
                <div className='point' id="point1">Get Free Delivery on all types of Orders.</div>
                <div className="point" id="point2">Will get more priority if stocks goes off.</div>
                <div className="point" id="point3">Get amazing cashbacks on Online payments.</div>
                <div className="point" id="point4">Get a chance to win a tour of Singapore.</div>
        </div>
    </div>
    <div className="homeregistration">
        <div className="registration-text">Not Created Account Yet ! Create Now...</div>
        <button className="registration-button"><Link to="/registration" style={{color:'black',textDecoration:'None',fontWeight:'500'}}>Create</Link></button>
    </div>
    </div>
  )
}
