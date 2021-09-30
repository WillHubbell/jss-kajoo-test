/* eslint-disable */
import React from 'react'
import { Container, Header, Paragraph, Link } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './yusuf-test.css'

const YusufTest = (props) => {
  return (
    <Container className="yusuf-test-container">
      <Header text={props.fields.text_string_1633027237571} className="yusuf-test-header"></Header>
      <Paragraph
        text={props.fields.text_string_1633027249544}
        className="yusuf-test-paragraph"
      ></Paragraph>
      <Link href={props.fields.href_object_1633027261654} className="yusuf-test-link"></Link>
    </Container>
  )
}

YusufTest.defaultProps = {
  'fields.bgImage_object_1633027230340': '',
  fields: {},
  'fields.text_string_1633027237571': 'HEADER',
  'fields.text_string_1633027249544':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual.',
  'fields.href_object_1633027261654': '#',
}

YusufTest.propTypes = {
  'fields.bgImage_object_1633027230340': PropTypes.object,
  fields: PropTypes.object,
  'fields.text_string_1633027237571': PropTypes.string,
  'fields.text_string_1633027249544': PropTypes.string,
  'fields.href_object_1633027261654': PropTypes.object,
}

export default YusufTest
