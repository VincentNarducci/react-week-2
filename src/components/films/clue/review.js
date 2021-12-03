import React, { useState } from "react";

class ReviewBox extends React.Component {
  constructor() {
    super();
    
    this.state = {
      showReviews: true,
      reviews: [
        {id: 1, user: "ProfPlum", stars: 5, content: "Tim Curry and Madeline Kahn at their very finest. Hilarious and perfect pacing until the very end!"},
        {id: 2, user: "Yv3tte", stars: 4, content: "Communism was just a red herring"}
      ]
      
    };
    
  }
  
  render () {
    const reviews = this._getReview();
    let reviewNodes;
    let buttonText = 'Show Reviews';
    
    
   
    
    
    if (this.state.showReviews) {
      buttonText = 'Hide Reviews';
      reviewNodes = <div className="review-list">{reviews}</div>;
    }
    
    return(
      <>
      <div className="review-box">
       
      
        <h4 className="review-count">
          {this._getReviewTitle(reviews.length)}
        </h4>
        {reviewNodes}
        <div class="right">
        <button class="btn btn-primary" id="review-reveal" onClick={this._handleClick.bind(this)}>
          {buttonText}
        </button>
        </div>
        
       
      </div>  
      <ReviewForm addReview={this._addReview.bind(this)}/>
      </>
    );
  } // end render
  
  _addReview(user, stars, content) {
    const review = {
      id: this.state.reviews.length + 1,
      user,
      stars,
      content
    };
    this.setState({ reviews: this.state.reviews.concat([review]) }); // *got a tip to use concat instead of push here for react speed...
  }
  
  _handleClick() {
    this.setState({
      showReviews: !this.state.showReviews
    });
  }
  
  _getReview() {    
    return this.state.reviews.map((review) => { 
      return (
        <Review 
          user={review.user} 
          stars={review.stars}
          content={review.content} 
          key={review.id} />
      ); 
    });
  }
  
  _getReviewTitle(reviewCount) {
    if (reviewCount === 0) {
      return 'No reviews yet';
    } else if (reviewCount === 1) {
      return "1 review";
    } else {
      return `${reviewCount} reviews`;
    }
  }
} // end ReviewBox component

class ReviewForm extends React.Component {
  render() {
    return (
      
      <form className="review-form" onSubmit={this._handleSubmit.bind(this)}>
        <div className="review-form-fields">
          <input placeholder="Name" required ref={(input) => this._user = input}></input><br />
          <div class="form-row">
    <div class="form-group col-md-3">
          <select class="form-control" name="stars" id="stars" required ref={(input) => this._stars = input}>
            
    <option value="" disabled selected>Star Rating</option>
    <option value="5">5</option>
    <option value="4.5">4.5</option>
    <option value="4">4</option>
    <option value="3.5">3.5</option>
    <option value="3">3</option>
    <option value="2.5">2.5</option>
    <option value="2">2</option>
    <option value="1.5">1.5</option>
    <option value="1">1</option>
    <option value="0.5">.5</option>
    <option value="0">0</option>

</select>
</div>
            </div>
          <textarea placeholder="Review" rows="4" required ref={(textarea) => this._content = textarea}></textarea>
        </div>
        <div className="review-form-actions">
          <button class="btn btn-primary" type="submit">Post Review</button>
        </div>
      </form>
      
    );
  } // end render
  
  _handleSubmit(event) { 
    event.preventDefault();   // prevents page from reloading on submit
    let user = this._user;
    let stars = this._stars;
    let content = this._content;
    this.props.addReview(user.value, stars.value, content.value);
  }
} // end ReviewForm component

class Review extends React.Component {
  render () {
    return(
      <div className="review">
        <p><em>{this.props.stars} Stars</em></p>
        <p className="review-content">{this.props.content}</p>
        <p className="review-header">- posted by <strong>{this.props.user}</strong></p>
        
       
      </div>
    );
  }
  
}

export default ReviewBox;  