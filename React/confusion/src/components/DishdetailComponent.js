import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
      super(props);
      this.state = {
      }
  }

  renderDish(dish) {
    return(
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
  }

  renderComments(commentsArray) {
    const commentlist = commentsArray.map((item) => {
        return (
          <div key={item.id}>
            {item.comment}<br></br><br></br>
            -- {item.author} , {item.date}<br></br><br></br>
          </div>
        );
    });

    if (commentsArray != null)
        return(
            <div className="container">
                <div className="row">
                    <h4>Comments</h4>
                </div>
                <div className="row">
                    {commentlist}
                </div>
          </div>  
        );
    else
        return(
            <div><h4>ss</h4></div>
        );
  }

  render() {
      const dish = this.props.selectedDish;
      if (dish != null)
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            </div>
        );
    else
        return(
            <div></div>
        );
  }
}

export default DishDetail;