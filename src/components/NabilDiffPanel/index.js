/* eslint-disable */
import React from 'react'
import { Container, Image, Header, Paragraph, Button } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './nabil-diff-panel.css'

const NabilDiffPanel = (props) => {
  return (
    <Container className="nabil-diff-panel-container">
      <Image src={props.fields.src_object_1} className="nabil-diff-panel-image"></Image>
      <Container
        bgImage={props.fields.bgImage_object_1633098811747}
        className="nabil-diff-panel-container1"
      >
        <Header text={props.fields.text_string_2} className="nabil-diff-panel-header"></Header>
        <Paragraph
          text={props.fields.text_string_3}
          className="nabil-diff-panel-paragraph"
        ></Paragraph>
        <Button
          text={props.fields.text_string_0}
          link={props.fields.link_link_0}
          className="nabil-diff-panel-button"
        ></Button>
      </Container>
    </Container>
  )
}

NabilDiffPanel.defaultProps = {
  'fields.text_string_0': 'Button',
  'fields.link_link_0': '',
  fields: {},
  'fields.src_object_1': 'https://qa-app.kajoo.ca/graphics/default.png',
  'fields.text_string_2': 'HEADER',
  'fields.text_string_3':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual.',
  'fields.bgImage_object_1633098800851': '',
  'fields.bgImage_object_1633098811747': '',
}

NabilDiffPanel.propTypes = {
  'fields.text_string_0': PropTypes.string,
  'fields.link_link_0': PropTypes.link,
  fields: PropTypes.object,
  'fields.src_object_1': PropTypes.object,
  'fields.text_string_2': PropTypes.string,
  'fields.text_string_3': PropTypes.string,
  'fields.bgImage_object_1633098800851': PropTypes.object,
  'fields.bgImage_object_1633098811747': PropTypes.object,
}

export default NabilDiffPanel
