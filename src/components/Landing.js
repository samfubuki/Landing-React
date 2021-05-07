import React from 'react';
import './Landing.css';
import background1 from '../images/background1.jfif';


function Landing() {
    return (
        <>
                 <div class="define-container">
                <div class="img-left">
                    <img src={background1} alt="Group Photo of Our NGO">
                    </img>    

                </div>
                <div class="right-text">
                    <h2>
                        Who We Are:
                    </h2>
                    <h3>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio odit itaque voluptatum, eos, sit accusamus corrupti doloremque aliquam ratione corporis quasi.
                    </h3>
                    <p>
                        The legal definition of a charitable organization (and of charity) varies between countries and in some instances regions of the country. The regulation, the tax treatment, and the way in which charity law affects charitable organizations also vary.


                    </p>
                    <div class="learn-button">
                        <a target="_blank" href="https://www.google.com"><button>Learn More</button></a>
                    </div>

                </div>
                

            </div>
                        <section id="counter-stats" class="wow fadeInRight" data-wow-duration="1.4s">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-3 stats">
                            <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                            <div class="counting" data-count="30">0</div>
                            <h5>Years Of Service</h5>
                        </div>

                        <div class="col-lg-3 stats">
                            <i class="fa fa-users" aria-hidden="true"></i>
                            <div class="counting" data-count="1500">0</div>
                            
                            
                            <h5>People Helped</h5>
                        </div>

                        <div class="col-lg-3 stats">
                            <i class="fa fa-check-square" aria-hidden="true"></i>
                            <div class="counting" data-count="250">0</div>
                            <h5>Activities Done</h5>
                        </div>

                        <div class="col-lg-3 stats">
                            <i class="fa fa-child" aria-hidden="true"></i>
                            <div class="counting" data-count="150">0</div>
                            <h5>Children Affected</h5>
                        </div>


                    </div>
                </div>

            </section>   
        </>
    )

  
}

export default Landing;  


