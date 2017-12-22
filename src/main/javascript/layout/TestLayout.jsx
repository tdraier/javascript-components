import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

let TestLayout = function(props) {
    return (<Grid fluid>
        <Row>
            <Col xs={6} md={3}>{props.leftCol}</Col>
            <Col xs={6} md={6}>{props.rightCol}</Col>
        </Row>
    </Grid>);
};

export { TestLayout };