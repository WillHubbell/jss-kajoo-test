/* eslint-disable */
import React from 'react'
import { Container, Image, Header, Paragraph, Link } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './resolution-test.css'

const ResolutionTest = (props) => {
  return (
    <Container className="resolution-test-container">
      <Image src={props.fields.src_object_1633097102021} className="resolution-test-image"></Image>
      <Container
        bgImage={props.fields.bgImage_object_1633097366732}
        className="resolution-test-container1"
      >
        <Header
          text={props.fields.text_string_1633097110123}
          className="resolution-test-header"
        ></Header>
        <Paragraph
          text={props.fields.text_string_1633097116082}
          className="resolution-test-paragraph"
        ></Paragraph>
        <Link href={props.fields.href_object_1633097122400} className="resolution-test-link"></Link>
      </Container>
    </Container>
  )
}

ResolutionTest.defaultProps = {
  'fields.bgImage_object_1633097095062': '',
  fields: {},
  'fields.src_object_1633097102021': '/graphics/default.png',
  'fields.text_string_1633097110123': 'HEADER',
  'fields.text_string_1633097116082':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual.',
  'fields.href_object_1633097122400': '#',
  'fields.bgImage_object_1633097366732': '',
}

ResolutionTest.propTypes = {
  'fields.bgImage_object_1633097095062': PropTypes.object,
  fields: PropTypes.object,
  'fields.src_object_1633097102021': PropTypes.object,
  'fields.text_string_1633097110123': PropTypes.string,
  'fields.text_string_1633097116082': PropTypes.string,
  'fields.href_object_1633097122400': PropTypes.object,
  'fields.bgImage_object_1633097366732': PropTypes.object,
}

export default ResolutionTest
