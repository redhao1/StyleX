import React from "react";

function ProductReviews() {
  return (
    <div id="tab2" className="tab-content" style={{display: "block"}}>
      <div id="shopify-product-reviews">
        <div className="spr-container">
          <div className="spr-header clearfix">
            <div className="spr-summary">
              <span className="product-review">
                <a className="reviewLink">
                  <i className="font-13 fa fa-star"></i>
                  <i className="font-13 fa fa-star"></i>
                  <i className="font-13 fa fa-star"></i>
                  <i className="font-13 fa fa-star-o"></i>
                  <i className="font-13 fa fa-star-o"></i>{" "}
                </a>
                <span className="spr-summary-actions-togglereviews">
                  Based on 6 reviews456
                </span>
              </span>
              <span className="spr-summary-actions">
                <a href="#" className="spr-summary-actions-newreview btn">
                  Write a review
                </a>
              </span>
            </div>
          </div>
          <div className="spr-content">
            <div className="spr-form clearfix">
              <form
                method="post"
                action="#"
                id="new-review-form"
                className="new-review-form"
              >
                <h3 className="spr-form-title">Write a review</h3>
                <fieldset className="spr-form-contact">
                  <div className="spr-form-contact-name">
                    <label
                      className="spr-form-label"
                      htmlFor="review_author_10508262282"
                    >
                      Name
                    </label>
                    <input
                      className="spr-form-input spr-form-input-text "
                      id="review_author_10508262282"
                      type="text"
                      name="review[author]"
                      value=""
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="spr-form-contact-email">
                    <label
                      className="spr-form-label"
                      htmlFor="review_email_10508262282"
                    >
                      Email
                    </label>
                    <input
                      className="spr-form-input spr-form-input-email "
                      id="review_email_10508262282"
                      type="email"
                      name="review[email]"
                      value=""
                      placeholder="john.smith@example.com"
                    />
                  </div>
                </fieldset>
                <fieldset className="spr-form-review">
                  <div className="spr-form-review-rating">
                    <label className="spr-form-label">Rating</label>
                    <div className="spr-form-input spr-starrating">
                      <div className="product-review">
                        <a className="reviewLink" href="#">
                          <i className="fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                          <i className="font-13 fa fa-star-o"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="spr-form-review-title">
                    <label
                      className="spr-form-label"
                      htmlFor="review_title_10508262282"
                    >
                      Review Title
                    </label>
                    <input
                      className="spr-form-input spr-form-input-text "
                      id="review_title_10508262282"
                      type="text"
                      name="review[title]"
                      value=""
                      placeholder="Give your review a title"
                    />
                  </div>

                  <div className="spr-form-review-body">
                    <label
                      className="spr-form-label"
                      htmlFor="review_body_10508262282"
                    >
                      Body of Review{" "}
                      <span className="spr-form-review-body-charactersremaining">
                        (1500)
                      </span>
                    </label>
                    <div className="spr-form-input">
                      <textarea
                        className="spr-form-input spr-form-input-textarea "
                        id="review_body_10508262282"
                        data-product-id="10508262282"
                        name="review[body]"
                        rows="10"
                        placeholder="Write your comments here"
                      ></textarea>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="spr-form-actions">
                  <input
                    type="submit"
                    className="spr-button spr-button-primary button button-primary btn btn-primary"
                    value="Submit Review"
                  />
                </fieldset>
              </form>
            </div>
            <div className="spr-reviews">
              <div className="spr-review">
                <div className="spr-review-header">
                  <span className="product-review spr-starratings spr-review-header-starratings">
                    <span className="reviewLink">
                      <i className="fa fa-star"></i>
                      <i className="font-13 fa fa-star"></i>
                      <i className="font-13 fa fa-star"></i>
                      <i className="font-13 fa fa-star"></i>
                      <i className="font-13 fa fa-star"></i>
                    </span>
                  </span>
                  <h3 className="spr-review-header-title">
                    Lorem ipsum dolor sit amet
                  </h3>
                  <span className="spr-review-header-byline">
                    <strong>dsacc</strong> on <strong>Apr 09, 2019</strong>
                  </span>
                </div>
                <div className="spr-review-content">
                  <p className="spr-review-content-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className="spr-review">
                <div className="spr-review-header">
                  <span className="product-review spr-starratings spr-review-header-starratings">
                    <span className="reviewLink">
                      <i className="fa fa-star"></i>
                      <i className="font-13 fa fa-star"></i>
                      <i className="font-13 fa fa-star"></i>
                      <i className="font-13 fa fa-star"></i>
                      <i className="font-13 fa fa-star"></i>
                    </span>
                  </span>
                  <h3 className="spr-review-header-title">
                    Lorem Ipsum is simply dummy text of the printing
                  </h3>
                  <span className="spr-review-header-byline">
                    <strong>larrydude</strong> on <strong>Dec 30, 2018</strong>
                  </span>
                </div>

                <div className="spr-review-content">
                  <p className="spr-review-content-body">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                </div>
              </div>
              <div className="spr-review">
                <div className="spr-review-header">
                  <span className="product-review spr-starratings spr-review-header-starratings">
                    <span className="reviewLink">
                      <i className="fa fa-star"></i>
                      <i className="font-13 fa fa-star"></i>
                      <i className="font-13 fa fa-star"></i>
                      <i className="font-13 fa fa-star"></i>
                      <i className="font-13 fa fa-star"></i>
                    </span>
                  </span>
                  <h3 className="spr-review-header-title">
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit...
                  </h3>
                  <span className="spr-review-header-byline">
                    <strong>quoctri1905</strong> on{" "}
                    <strong>Dec 30, 2018</strong>
                  </span>
                </div>

                <div className="spr-review-content">
                  <p className="spr-review-content-body">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled.
                    <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductReviews;
