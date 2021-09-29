/* eslint-disable */
import React from 'react'
import { Container, Header, Image, Paragraph, Button } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './product-recommendation.css'

const ProductRecommendation = (props) => {
  return (
    <Container className="product-recommendation-container">
      <Container className="product-recommendation-container1">
        <Container className="product-recommendation-container2">
          <Header
            text={props.fields.text_string_7}
            className="product-recommendation-header"
          ></Header>
          <Image src={props.fields.src_object_1} className="product-recommendation-image"></Image>
          <Paragraph
            text={props.fields.text_string_10}
            className="product-recommendation-paragraph"
          ></Paragraph>
        </Container>
        <Container className="product-recommendation-container3">
          <Container className="product-recommendation-container4">
            <Header
              text={props.fields.text_string_6}
              className="product-recommendation-header1"
            ></Header>
            <Image
              src={props.fields.src_object_0}
              className="product-recommendation-image1"
            ></Image>
          </Container>
          <Paragraph
            text={props.fields.text_string_11}
            className="product-recommendation-paragraph1"
          ></Paragraph>
        </Container>
        <Container className="product-recommendation-container5">
          <Container className="product-recommendation-container6">
            <Header
              text={props.fields.text_string_8}
              className="product-recommendation-header2"
            ></Header>
            <Image
              src={props.fields.src_object_2}
              className="product-recommendation-image2"
            ></Image>
          </Container>
          <Paragraph
            text={props.fields.text_string_9}
            className="product-recommendation-paragraph2"
          ></Paragraph>
        </Container>
      </Container>
      <Container className="product-recommendation-container7">
        <Button
          text={props.fields.text_string_3}
          link={props.fields.link_link_3}
          className="product-recommendation-button"
        ></Button>
        <Button
          text={props.fields.text_string_5}
          link={props.fields.link_link_5}
          className="product-recommendation-button1"
        ></Button>
        <Button
          text={props.fields.text_string_4}
          link={props.fields.link_link_4}
          className="product-recommendation-button2"
        ></Button>
      </Container>
    </Container>
  )
}

ProductRecommendation.defaultProps = {
  'fields.src_object_0': 'https://qa-app.kajoo.ca/graphics/default.png',
  fields: {},
  'fields.src_object_1': 'https://qa-app.kajoo.ca/graphics/default.png',
  'fields.src_object_2': 'https://qa-app.kajoo.ca/graphics/default.png',
  'fields.text_string_3': 'Button',
  'fields.link_link_3': '',
  'fields.text_string_4': 'Button',
  'fields.link_link_4': '',
  'fields.text_string_5': 'Button',
  'fields.link_link_5': '',
  'fields.text_string_6': 'HEADER',
  'fields.text_string_7': 'HEADER',
  'fields.text_string_8': 'HEADER',
  'fields.text_string_9':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual.',
  'fields.text_string_10':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual.',
  'fields.text_string_11':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual.',
}

ProductRecommendation.propTypes = {
  'fields.src_object_0': PropTypes.object,
  fields: PropTypes.object,
  'fields.src_object_1': PropTypes.object,
  'fields.src_object_2': PropTypes.object,
  'fields.text_string_3': PropTypes.string,
  'fields.link_link_3': PropTypes.link,
  'fields.text_string_4': PropTypes.string,
  'fields.link_link_4': PropTypes.link,
  'fields.text_string_5': PropTypes.string,
  'fields.link_link_5': PropTypes.link,
  'fields.text_string_6': PropTypes.string,
  'fields.text_string_7': PropTypes.string,
  'fields.text_string_8': PropTypes.string,
  'fields.text_string_9': PropTypes.string,
  'fields.text_string_10': PropTypes.string,
  'fields.text_string_11': PropTypes.string,
}

export default ProductRecommendation
