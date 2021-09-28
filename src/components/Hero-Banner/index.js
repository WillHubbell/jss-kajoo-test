/* eslint-disable */
import React from 'react'
import { Container, Header, Paragraph, Link } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './hero-banner.css'

const HeroBanner = (props) => {
  return (
    <Container className="hero-banner-container">
      <Container
        bgImage={props.fields.bgImage_object_1632762558520}
        className="hero-banner-container1"
      >
        <Header
          text={props.fields.text_string_1632762602924}
          className="hero-banner-header"
        ></Header>
        <Paragraph className="hero-banner-paragraph"></Paragraph>
        <Link href={props.fields.href_object_1632762638631} className="hero-banner-link"></Link>
      </Container>
    </Container>
  )
}

HeroBanner.defaultProps = {
  'fields.bgImage_object_1632758615916': 'bgImage',
  fields: {},
  'fields.bgImage_object_1632762558520': 'bgImage',
  'fields.text_string_1632762602924': 'text',
  'fields.href_object_1632762638631': 'href',
}

HeroBanner.propTypes = {
  'fields.bgImage_object_1632758615916': PropTypes.object,
  fields: PropTypes.object,
  'fields.bgImage_object_1632762558520': PropTypes.object,
  'fields.text_string_1632762602924': PropTypes.string,
  'fields.href_object_1632762638631': PropTypes.object,
}

export default HeroBanner
