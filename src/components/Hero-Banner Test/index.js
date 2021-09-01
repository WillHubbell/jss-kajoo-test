/* eslint-disable */
import React from 'react'
import { Image, Header, Paragraph, Button } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './hero-banner-test.css'

const HeroBannerTest = (props) => {
  return (
    <div className="hero-banner-test-container">
      <Image className="hero-banner-test-image">
        <div className="hero-banner-test-container1">
          <Header
            field={props.fields.header_1630514029029}
            className="hero-banner-test-header"
          ></Header>
          <Paragraph
            field={props.fields.paragraph_1630514047980}
            className="hero-banner-test-paragraph"
          ></Paragraph>
          <Button
            field={props.fields.button_1630514059359}
            className="hero-banner-test-button"
          ></Button>
        </div>
      </Image>
    </div>
  )
}

HeroBannerTest.defaultProps = {
  fields: {},
  'fields.image_1630513440790': 'src',
  'fields.header_1630514029029': 'text',
  'fields.paragraph_1630514047980': 'text',
  'fields.button_1630514059359': 'text',
}

HeroBannerTest.propTypes = {
  fields: PropTypes.object,
  'fields.image_1630513440790': PropTypes.object,
  'fields.header_1630514029029': PropTypes.string,
  'fields.paragraph_1630514047980': PropTypes.string,
  'fields.button_1630514059359': PropTypes.string,
}

export default HeroBannerTest
