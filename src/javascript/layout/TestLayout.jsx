import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';

let TestLayout = function(props) {
    return (<Grid fluid>
        <Row>
            <Col xs={6} md={3}>{props.leftCol}</Col>
            <Col xs={6} md={6}>{props.rightCol}</Col>
        </Row>
    </Grid>);
};


TestLayout.propTypes = {
    leftCol: PropTypes.element,
    rightCol: PropTypes.element
};

export { TestLayout };