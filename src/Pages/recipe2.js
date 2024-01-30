import { Fragment } from "react";
import { Link } from "react-router-dom";

function Recipe2() {
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
                      src="assets/images/recipe/fish.jpg"
                      className="img-fluid news-image"
                      alt=""
                    />
                  </a>

                  <div className="news-text-info news-text-info-large">
                    <h5 className="news-title mt-2">
                      <a href="news-detail.html" className="news-title-link">
                        Braaied Fish
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
                  2 whole Cape bream, cleaned
                  <br />
                  sea salt and freshly ground black pepper, to taste
                  <br />
                  2 lemons, sliced
                  <br />
                  1 bulb fennel, sliced
                  <br />
                  2 red onions, sliced
                  <br />
                  150 g medium-fat butter with garlic and herbs
                  <br />
                  lemon wedges, for serving
                  <br />
                </p>

                <p>
                  {" "}
                  <a href="/">COOKING INSTRUCTIONS</a> <br />
                  1. Rinse the inside of the fish and pat dry with kitchen
                  paper. Season the inside, then add the lemon, fennel with some
                  of its stalks and fronds, onion and butter.
                  <br />
                  2. Wrap a sheet of baking paper around the middle of each
                  fish, leaving some of the tail and head exposed. Layer 4
                  sheets of newspaper and place the fish in the middle. Fold
                  over the sides, covering the head and tail first, then the
                  body. Repeat with the second fish. Use butcher’s twine to
                  secure the fish in their newspaper parcels, then submerge in
                  water for 5 minutes.
                  <br />
                  3. Place the fish onto medium coals and cook for 10 minutes,
                  then turn over and cook for a further 10 minutes.{" "}
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

export default Recipe2;
