import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// functional components
function RenderDish({dish}) {
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

function RenderComments({commentsArray}) {
    if (commentsArray !== undefined) {
        const commentlist = commentsArray.map((item) => {
            return (
                <li key={item.id}>
                    <p>{item.comment}</p>
                        <p>-- {item.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}
                    </p>
                </li>
            );
        });
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {commentlist}
                </ul>      
            </div>  
        );
    }
    else
        return(
            <div></div>
        );
}

const DishDetail = (props) => {
    //console.log('dishdetail render() is invoked');
    const dish = props.dish;
    if (dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments commentsArray={props.comments} />
                </div>
            </div>
        );
    else
        return(
            <div></div>
    ) ;
}

export default DishDetail;