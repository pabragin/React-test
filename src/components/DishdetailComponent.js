import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import React from "react";

    function RenderDish({dish}) {
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

    function RenderComments({commentsArr}){
        if (commentsArr != null) {
            const comments = commentsArr.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                )
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments}
                    </ul>
                </div>
            );
        }
        else
            return (
                <div></div>
            );
    }

    const DishDetail = (props) => {
        const dish = props.dish;
        if (dish != null) {
            const comments = props.dish.comments;
            return (
                <div class="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dish}/>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments commentsArr={comments}/>
                    </div>
                </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }


export default DishDetail;