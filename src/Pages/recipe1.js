import { Fragment } from "react";
import { Link } from "react-router-dom";



function Recipe1() {
    return (
     <Fragment>
   
  

        <main>

           

            <section class="about section-padding bg-white">
                <div class="container">
                    <div class="row">

                   <div class="col-lg-6 col-md-6 col-12">
                            <div class="news-thumb mb-4">
                                <a href="news-detail.html">
                                    <img src="assets/images/recipe/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg" class="img-fluid news-image" alt=""/>
                                </a>
                                
                                <div class="news-text-info news-text-info-large">
                                    <span class="category-tag bg-danger">Featured</span>

                                    <h5 class="news-title mt-2">
                                        <a href="news-detail.html" class="news-title-link">How to make a healthy diet?</a>
                                    </h5>
                                </div>
                            </div> 
                        </div>

                        <div class="col-lg-6 col-12">
                        
                        	<p>Since this website template is 100% free to use, you can edit and apply it for your commercial restaurant websites. There are 6 HTML pages included in this template. Please <strong>click "Reservation" button</strong> on the top right to see the pop-up reservation form.</p>
                        
                            <p>You are NOT allowed to redistribute the template ZIP file on any template donwnload website. Please <a href="/" target="_blank">contact us</a> for more information.</p>
                            <span class="category-tag me-3 bg-info">
                                                <Link to={'/'} >Back</Link>
                                              </span>
                        </div>

                    </div>
                </div>
            </section>

           
       </main>
     </Fragment>
    
     
    );
  }
  
  export default Recipe1;