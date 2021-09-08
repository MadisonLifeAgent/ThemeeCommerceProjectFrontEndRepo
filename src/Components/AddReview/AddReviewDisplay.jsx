// react imports
import React, { useState }from "react";

// component imports
import GetCurrentUser from "../../Hooks/GetCurrentUser";
import UseAddReview from "../../Hooks/UseAddReview";

const AddReviewDisplay = (props) => {
    const reviewInfo = {
        Productid: props.product.productId,
        //Id: userId,
        Rating: '',
        ReviewBody: '',
    }

    
    const handleSubmit = (event) => {
        event.preventDefault();
        UseAddReview(reviewInfo);
        console.log(reviewInfo);
    }


    // display form to add rating and review
    return (
        <div>
            <p>Rate/Review Product</p>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <input type="text" name="Rating" id="Rating" value={reviewInfo.Rating} size="50" placeholder="Rate from 1 to 5" onChange={(event) => event.target.value}/>

                        <input type="text" name="ReviewBody" id="ReviewBody" value={reviewInfo.ReviewBody} size="50" placeholder="Write your review here..." onChange={(event) => event.target.value}/>

                        <input type="submit" value="Submit Review" />
                    </div>
                </form>                
        </div>
    )
}

export default AddReviewDisplay;