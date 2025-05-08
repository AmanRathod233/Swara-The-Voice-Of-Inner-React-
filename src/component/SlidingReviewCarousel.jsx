import React from 'react';

const reviews1 = [
  {
    content: 'Finally, someone who listens! Our<br>relationship is healthier than ever.',
    personName: 'Amit S.',
    personImage: 'public/assets/Images/Rectangle7.png',
    rating: 5.00,
  },
  {
    content: 'Finally, someone who listens! Our<br>relationship is healthier than ever.',
    personName: 'Amit S.',
    personImage: 'public/assets/Images/Rectangle7.png',
    rating: 5.0,
  },
  {
    content: 'Finally, someone who listens! Our<br>relationship is healthier than ever.',
    personName: 'Amit S.',
    personImage: 'public/assets/Images/Rectangle7.png',
    rating: 5.0,
  },
  {
    content: 'Finally, someone who listens! Our<br>relationship is healthier than ever.',
    personName: 'Amit S.',
    personImage: 'public/assets/Images/Rectangle7.png',
    rating: 5.0,
  },
  {
    content: 'Finally, someone who listens! Our<br>relationship is healthier than ever.',
    personName: 'Amit S.',
    personImage: 'public/assets/Images/Rectangle7.png',
    rating: 5.0,
  },
];

const SlidingReviews = () => {
  const duplicatedReviews1 = [...reviews1, ...reviews1];

  return (
    <>
      {/* First sliding review section */}
      <div className="col-lg-12 ">
        <div className="slider-wrapper slide_review">
          <div className="sliding_review_1 sliding-reviews-container">
            {duplicatedReviews1.map((review, index) => (
              <div key={`review1-${index}`} className="sliding_review_box">
                <p
                  className="sliding_review_box_content m-0"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
                <div className="sliding_review_box_personal_info">
                  <div className="sliding_review_box_img">
                    <img src={review.personImage} alt="person" />
                    <p>{review.personName}</p>
                  </div>
                  <div className="sliding_review_box_star_rating">
                    <i className="fa fa-star golden-star" aria-hidden="true"></i>
                    {/* Format the rating to one decimal place */}
                    <p>{review.rating.toFixed(1)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second sliding review section */}
      <div className="col-lg-12">
        <div className="slider-wrapper">
          <div className="sliding_review_2 sliding-reviews-container slow-slide">
            {duplicatedReviews1.map((review, index) => (
              <div key={`review2-${index}`} className="sliding_review_box">
                <p
                  className="sliding_review_box_content m-0"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
                <div className="sliding_review_box_personal_info">
                  <div className="sliding_review_box_img">
                    <img src={review.personImage} alt="person" />
                    <p>{review.personName}</p>
                  </div>
                  <div className="sliding_review_box_star_rating">
                    <i className="fa fa-star golden-star" aria-hidden="true"></i>
                    {/* Format the rating to one decimal place */}
                    <p>{review.rating.toFixed(1)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlidingReviews;