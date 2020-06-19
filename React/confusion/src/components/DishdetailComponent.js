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
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
  }

  renderComments(commentsArray) {
    const commentlist = commentsArray.map((item) => {
        return (
            <li key={item.id}>
                <p>{item.comment}</p>
                    <p>-- {item.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(item.date))}
                    </p>
            </li>
        );
    });

    if (commentsArray != null)
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {commentlist}
              </ul>      
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
                {this.renderDish(this.props.selectedDish)}
                {this.renderComments(this.props.selectedDish.comments)}
            </div>
        );
    else
        return(
            <div></div>
        );
  }
}

export default DishDetail;