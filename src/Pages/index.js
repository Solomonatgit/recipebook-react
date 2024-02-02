/* eslint-disable jsx-a11y/anchor-has-content */
import { Fragment } from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <Fragment>
      <main>
        <section class="hero">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 col-12 m-auto">
                <div class="heroText">
                  <h3 class="text-white mb-lg-5 mb-3">Dive into the delightful world of flavors with our carefully curated recipe collection. </h3>

                  <div class="c-reviews my-3 d-flex flex-wrap align-items-center">
                    <div class="d-flex flex-wrap align-items-center">
                      <h4 class="text-white mb-0 me-3">4.4/5</h4>

                      <div class="reviews-stars">
                        <i class="bi-star-fill reviews-icon"></i>
                        <i class="bi-star-fill reviews-icon"></i>
                        <i class="bi-star-fill reviews-icon"></i>
                        <i class="bi-star-fill reviews-icon"></i>
                        <i class="bi-star reviews-icon"></i>
                      </div>
                    </div>

                    <p class="text-white w-100">
                    Get ready to embark on a gastronomic adventure that will tantalize your taste buds and inspire your inner chef
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-7 col-12">
                <div
                  id="carouselExampleCaptions"
                  class="carousel carousel-fade hero-carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="carousel-image-wrap">
                        <img
                          src="assets/images/slide/slide.jpg"
                          class="img-fluid carousel-image"
                          alt=""
                        />
                      </div>

                      <div class="carousel-caption">
                        <span class="text-white"></span>

                        <h4 class="hero-text">Braaied skilpadjiest</h4>

                        <span className="category-tag bg-success">
                          <Link to={"/recipe1"}>View Recipe</Link>
                        </span>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <div class="carousel-image-wrap">
                        <img
                          src="assets/images/slide/fish.jpeg"
                          class="img-fluid carousel-image"
                          alt=""
                        />
                      </div>

                      <div class="carousel-caption">
                        <div class="d-flex align-items-center">
                          <h4 class="hero-text">Braaied Fish</h4>
                        </div>
                        
                        <span className="category-tag bg-success">
                          <Link to={"/recipe2"}>View Recipe</Link>
                        </span>
                      </div>
                    </div>

                    <div class="carousel-item">
                      <div class="carousel-image-wrap">
                        <img
                          src="assets/images/slide/chicken.jpg"
                          class="img-fluid carousel-image"
                          alt=""
                        />
                      </div>

                      <div class="carousel-caption">
                        <div class="d-flex align-items-center">
                          <h4 class="hero-text">Herbed roast chicken</h4>
                        </div>

                        <div class="d-flex flex-wrap align-items-center"></div>
                        <span className="category-tag bg-success">
                          <Link to={"/recipe3"}>View Recipe</Link>
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>

                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 col-xs-12 tooplate-mt30">
                <ul class="social-icon">
                  <li>
                    <a href="/" class="social-icon-link bi-facebook"></a>
                  </li>

                  <li>
                    <a href="/" class="social-icon-link bi-instagram"></a>
                  </li>

                  <li>
                    <a href="/" class="social-icon-link bi-twitter"></a>
                  </li>

                  <li>
                    <a href="/" class="social-icon-link bi-youtube"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="video-wrap">
            <video autoplay="" loop="" muted="" class="custom-video" poster="">
              <source src="assets/video/food.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div class="overlay"></div>
        </section>
      </main>
    </Fragment>
  );
}

export default Index;
