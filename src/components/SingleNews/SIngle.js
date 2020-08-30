import React from 'react';
import { Card, Button } from 'react-bootstrap';
const SIngle = (props) => {
    const {title, description, urlToImage} = props.article;
    return (
        <div className="col-md-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                   {description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SIngle;