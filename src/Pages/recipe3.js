import { Fragment } from "react";
import { Link } from "react-router-dom";

function Recipe3() {
  return (
    <Fragment>
      <main>
        <section className="about section-padding bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="news-thumb mb-4">
                  <a href="news-detail.html">
                    <img
                      src="assets/images/recipe/chicken.jpg"
                      className="img-fluid news-image"
                      alt=""
                    />
                  </a>

                  <div className="news-text-info news-text-info-large">
                    <h5 className="news-title mt-2">
                      <a href="news-detail.html" className="news-title-link">
                        Herbed roast chicken
                      </a>
                      <div class="reviews-stars">
                        <i class="bi-star-fill reviews-icon"></i>
                        <i class="bi-star-fill reviews-icon"></i>
                        <i class="bi-star-fill reviews-icon"></i>
                        <i class="bi-star-fill reviews-icon"></i>
                        <i class="bi-star reviews-icon"></i>
                      </div>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <p>
                  <strong>INGREDIENTS</strong>
                  <br />
                  2 T butter, softened 1 T olive oil
                  <br />
                  15 g fresh parsley, finely chopped
                  <br />
                  15 g fresh thyme leaves
                  <br />
                  1 lemon, zested
                  <br />
                  1 whole chicken
                  <br />
                </p>

                <p>
                  {" "}
                  <a href="/">COOKING INSTRUCTIONS</a> <br />
                  Mix the butter, oil, herbs and lemon zest. Rub the chicken
                  with the butter-and-oil mixture and place a few sprigs of
                  herbs and half the lemon in the cavity. Roast for 1 hour at
                  180ºC or until golden brown and cooked through.{" "}
                </p>

                <span className="category-tag bg-success">
                <Link to={"/"}>Back</Link>
                 </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default Recipe3;
