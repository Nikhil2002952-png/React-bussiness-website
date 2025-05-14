

import React from 'react'
import './Home.css';
import BannerImage from '../../assets/banner/banner-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faChartLine, faShieldHalved, faChartArea } from '@fortawesome/free-solid-svg-icons';

export default function Home()  {

    const faChartIcon= <FontAwesomeIcon icon={faChartLine}/>
    const faShieldIcon= <FontAwesomeIcon icon={faShieldHalved} />
    const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea}/>
  return (

    <>
   <section id='home'>
    <div className="banner_image"></div>
    <div className="container">
        <div className="banner_outer">
            <div className="col">
                <h3 className="title">
                    WE Promote Your <span>Bussiness</span>
                </h3>
                <p>Nemo enim ipsam oluptatem quia reoluptas sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, sit. Nesciunt ducimus ipsa incidunt ratione.</p>
                <div className="btn_wrapper">
                    <a href="/" className="btn">Get Started</a>
                </div>
            </div>
            <div className="col">
                <div className="sub_banner_image">
                    <img src={BannerImage} alt="" />
                </div>

                <div className="banner_style_1">
                    {faChartIcon}
                    <h4>Bussiness Analysis</h4>
                    
                </div>
                <div className="banner_style_1 banner_style_2">
                    {faShieldIcon}
                    <h4>99.9% Success</h4>
                    
                </div>

                <div className="banner_style_1 banner_style_3">
                    {faChartAreaIcon}
                    <h4>Strategy</h4>
                    
                </div>
            </div>
        </div>
    </div>

   </section>
    </>
  )
}






