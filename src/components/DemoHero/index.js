/* eslint-disable */
import React from 'react'
import { Container, Header, Paragraph, Link, Linebreak } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './demo-hero.css'

const DemoHero = (props) => {
  return (
    <Container className="demo-hero-container">
      <Container
        bgImage={props.fields.bgImage_object_1633021876371}
        className="demo-hero-container1"
      >
        <Container
          bgImage={props.fields.bgImage_object_1633021921736}
          className="demo-hero-container2"
        >
          <Header
            text={props.fields.text_string_1633021986178}
            className="demo-hero-header"
          ></Header>
          <Paragraph
            text={props.fields.text_string_1633022042570}
            className="demo-hero-paragraph"
          ></Paragraph>
          <Link href={props.fields.href_object_1633022096644} className="demo-hero-link"></Link>
        </Container>
      </Container>
      <Linebreak className="demo-hero-linebreak"></Linebreak>
    </Container>
  )
}

DemoHero.defaultProps = {
  'fields.bgImage_object_1633021724064': '',
  fields: {},
  'fields.bgImage_object_1633021876371': '',
  'fields.bgImage_object_1633021921736': '',
  'fields.text_string_1633021986178': 'HEADER',
  'fields.text_string_1633022042570':
    'Skate ipsum dolor sit amet, carve shoveit steps Jordan Richter pressure flip late. Betty fast plant ollie regular footed method air. Tailslide airwalk nosebone concave Saran Wrap. Berm nollie snake fakie out concave H-Street. Vans fast plant blunt pogo yeah layback. Thunder steps trucks rock and roll Saran Wrap vert. Mini ramp speed wobbles bruised heel bigspin wax The Faction. Pop shove-it Chris Pastras rail coffin concave feeble. Handplant masonite goofy footed tuna-flip rip grip. Ollie World Industries transition kick-nose indy grab dude. Rail melancholy nose bump nosepicker tuna-flip Ron Chapman. Sponsored baseplate varial blunt manual.',
  'fields.href_object_1633022096644': '#',
}

DemoHero.propTypes = {
  'fields.bgImage_object_1633021724064': PropTypes.object,
  fields: PropTypes.object,
  'fields.bgImage_object_1633021876371': PropTypes.object,
  'fields.bgImage_object_1633021921736': PropTypes.object,
  'fields.text_string_1633021986178': PropTypes.string,
  'fields.text_string_1633022042570': PropTypes.string,
  'fields.href_object_1633022096644': PropTypes.object,
}

export default DemoHero
