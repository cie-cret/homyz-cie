import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'


function Contact() {
  return (
    <section className="con-wrapper" id="contactUs">
        <div className="paddings innderWidth flexCenter con-container">
            
            <div className="flexColStart con-left">
                <span className="orangeText">Our Contacts</span>
                <span className="primaryText">Easy to Contact us</span>
                <span className="secondaryText">We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>
            
                <div className="flexColStart contactModes">

                    {/* Please improve it here by using data map */}

                    <div className="flexStart firstRow row">

                        <div className="flexCenter mode">

                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25} />
                                </div>

                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>

                            <div className="flexCenter button">Call Now</div>
                        </div>
                        <div className="flexCenter mode">

                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>

                                <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>

                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>

                    <div className="flexStart secondRow row">
                        <div className="flexCenter mode">

                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>

                                <div className="flexColStart detail">
                                    <span className="primaryText">Video Call</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>

                            <div className="flexCenter button">Video Call Now</div>
                            </div>
                            <div className="flexCenter mode">

                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25} />
                                </div>

                                <div className="flexColStart detail">
                                    <span className="primaryText">Message</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>

                            <div className="flexCenter button">Message Now</div>
                            </div>
                    </div> 

                    {/* End of Second Row */}
                    
                </div>            
            
            </div>

            <div className="flexEnd con-right">
                <div className='image-container'>
                    <img src="./contact.jpg" alt="Logo" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Contact