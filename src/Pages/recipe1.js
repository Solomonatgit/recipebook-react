import { Fragment } from "react";
import { Link } from "react-router-dom";

function Recipe1() {
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
                      src="assets/images/recipe/skil.jpg"
                      className="img-fluid news-image"
                      alt=""
                    />
                  </a>

                  <div className="news-text-info news-text-info-large">
                    <h5 className="news-title mt-2">
                      <a href="news-detail.html" className="news-title-link">
                        Braaied skilpadjies
                      </a>
                      <div class="reviews-stars">
                        <i class="bi-star-fill reviews-icon"></i>
                        <i class="bi-star-fill reviews-icon"></i>
                        <i class="bi-star-fill reviews-icon"></i>
                        <i class="bi-star reviews-icon"></i>
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
                  550 g free-range lamb skilpadjies
                  <br />
                  2 t coriander seeds, crushed coarsely
                  <br />
                  salt, to taste
                  <br />
                  2 T sunflower oil
                  <br />
                </p>

                <p>
                  {" "}
                  <a href="/">COOKING INSTRUCTIONS</a> <br />
                  Sprinkle the skilpadjies with coriander and season. Heat
                  the oil in a cast-iron pan over the coals. Fry the skilpadjies
                  until golden brown. To test if they’re cooked make a small
                  incision, they should be pink inside. If you prefer them well
                  done, cook for longer.
                  <br />
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

export default Recipe1;
