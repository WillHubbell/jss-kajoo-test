/* eslint-disable */
import React from 'react'
import { Container, Image, Paragraph } from 'kajoo-components/sitecore-react'
import PropTypes from 'prop-types'

import './bannerand-two-image-q-atest.css'

const BannerandTwoImageQAtest = (props) => {
  return (
    <Container className="bannerand-two-image-q-atest-container">
      <Image src={props.fields.src_object_1} className="bannerand-two-image-q-atest-image"></Image>
      <Container className="bannerand-two-image-q-atest-container1">
        <Image src={props.fields.src_object_0} className="bannerand-two-image-q-atest-image1">
          <Paragraph
            text={props.fields.text_string_4}
            className="bannerand-two-image-q-atest-paragraph"
          ></Paragraph>
        </Image>
        <Image
          src={props.fields.src_object_2}
          className="bannerand-two-image-q-atest-image2"
        ></Image>
      </Container>
    </Container>
  )
}

BannerandTwoImageQAtest.defaultProps = {
  'fields.src_object_0': '/graphics/default.png',
  fields: {},
  'fields.src_object_1': '/graphics/default.png',
  'fields.src_object_2': '/graphics/default.png',
  'fields.text_string_4':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air.',
}

BannerandTwoImageQAtest.propTypes = {
  'fields.src_object_0': PropTypes.object,
  fields: PropTypes.object,
  'fields.src_object_1': PropTypes.object,
  'fields.src_object_2': PropTypes.object,
  'fields.text_string_4': PropTypes.string,
}

export default BannerandTwoImageQAtest
