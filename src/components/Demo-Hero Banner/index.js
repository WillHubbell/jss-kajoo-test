/* eslint-disable */
import React from 'react'
import { Container, Header, Paragraph, Link } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './demo-hero-banner.css'

const DemoHeroBanner = (props) => {
  return (
    <Container className="demo-hero-banner-container">
      <Container
        bgImage={props.fields.bgImage_object_1632853324287}
        className="demo-hero-banner-container1"
      ></Container>
      <Container
        bgImage={props.fields.bgImage_object_1632853328540}
        className="demo-hero-banner-container2"
      ></Container>
      <Container
        bgImage={props.fields.bgImage_object_1632924845475}
        className="demo-hero-banner-container3"
      >
        <Container
          bgImage={props.fields.bgImage_object_1632924888050}
          className="demo-hero-banner-container4"
        >
          <Header
            text={props.fields.text_string_1632924912094}
            className="demo-hero-banner-header"
          ></Header>
          <Paragraph
            text={props.fields.text_string_1632924929060}
            className="demo-hero-banner-paragraph"
          ></Paragraph>
          <Link
            href={props.fields.href_object_1632924966404}
            className="demo-hero-banner-link"
          ></Link>
        </Container>
      </Container>
    </Container>
  )
}

DemoHeroBanner.defaultProps = {
  'fields.bgImage_object_1632853324287': '',
  fields: {},
  'fields.bgImage_object_1632853328540': '',
  'fields.bgImage_object_1632924845475': '',
  'fields.bgImage_object_1632924888050': '',
  'fields.text_string_1632924912094': 'HEADER',
  'fields.text_string_1632924929060':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual.',
  'fields.href_object_1632924966404': '#',
}

DemoHeroBanner.propTypes = {
  'fields.bgImage_object_1632853324287': PropTypes.object,
  fields: PropTypes.object,
  'fields.bgImage_object_1632853328540': PropTypes.object,
  'fields.bgImage_object_1632924845475': PropTypes.object,
  'fields.bgImage_object_1632924888050': PropTypes.object,
  'fields.text_string_1632924912094': PropTypes.string,
  'fields.text_string_1632924929060': PropTypes.string,
  'fields.href_object_1632924966404': PropTypes.object,
}

export default DemoHeroBanner
