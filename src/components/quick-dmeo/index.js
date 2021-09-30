/* eslint-disable */
import React from 'react'
import { Container, Header, Paragraph, Link, Linebreak } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './quick-dmeo.css'

const QuickDmeo = (props) => {
  return (
    <Container className="quick-dmeo-container">
      <Container
        bgImage={props.fields.bgImage_object_1633015813218}
        className="quick-dmeo-container1"
      >
        <Container
          bgImage={props.fields.bgImage_object_1633015457655}
          className="quick-dmeo-container2"
        >
          <Header
            text={props.fields.text_string_1633015467353}
            className="quick-dmeo-header"
          ></Header>
          <Paragraph
            text={props.fields.text_string_1633015482489}
            className="quick-dmeo-paragraph"
          ></Paragraph>
          <Link href={props.fields.href_object_1633015500993} className="quick-dmeo-link"></Link>
        </Container>
      </Container>
      <Linebreak className="quick-dmeo-linebreak"></Linebreak>
    </Container>
  )
}

QuickDmeo.defaultProps = {
  'fields.bgImage_object_1633015453191': '',
  fields: {},
  'fields.bgImage_object_1633015457655': '',
  'fields.text_string_1633015467353': 'HEADER',
  'fields.text_string_1633015482489':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual.',
  'fields.href_object_1633015500993': '#',
  'fields.bgImage_object_1633015813218': '',
}

QuickDmeo.propTypes = {
  'fields.bgImage_object_1633015453191': PropTypes.object,
  fields: PropTypes.object,
  'fields.bgImage_object_1633015457655': PropTypes.object,
  'fields.text_string_1633015467353': PropTypes.string,
  'fields.text_string_1633015482489': PropTypes.string,
  'fields.href_object_1633015500993': PropTypes.object,
  'fields.bgImage_object_1633015813218': PropTypes.object,
}

export default QuickDmeo
