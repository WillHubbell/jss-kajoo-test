/* eslint-disable */
import React from 'react';
import { Container, Image, Paragraph } from 'kajoo-components/sitecore-react';

import PropTypes from 'prop-types';

import './deploytest.css';

const Deploytest = (props) => {
  return (
    <Container className="deploytest-container default-theme-container-default">
      <Image
        src={props.fields.src_object_1}
        className="deploytest-image default-theme-image-default"
      ></Image>
      <Container className="deploytest-container1">
        <Image
          src={props.fields.src_object_0}
          className="deploytest-image1 default-theme-image-default"
        >
          <Paragraph
            text={props.fields.text_string_4}
            className="deploytest-paragraph default-theme-paragraph-default"
          ></Paragraph>
        </Image>
        <Image
          src={props.fields.src_object_2}
          className="deploytest-image2 default-theme-image-default"
        ></Image>
      </Container>
    </Container>
  );
};

Deploytest.defaultProps = {
  'fields.src_object_0': '/graphics/default.png',
  fields: {},
  'fields.src_object_1': '/graphics/default.png',
  'fields.src_object_2': '/graphics/default.png',
  'fields.text_string_4':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
};

Deploytest.propTypes = {
  'fields.src_object_0': PropTypes.object,
  fields: PropTypes.object,
  'fields.src_object_1': PropTypes.object,
  'fields.src_object_2': PropTypes.object,
  'fields.text_string_4': PropTypes.string,
};

export default Deploytest;
