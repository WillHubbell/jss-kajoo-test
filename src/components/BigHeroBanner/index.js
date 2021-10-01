/* eslint-disable */
import React from 'react'
import { Container, Header } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './big-hero-banner.css'

const BigHeroBanner = (props) => {
  return (
    <Container className="big-hero-banner-container">
      <Header
        text={props.fields.text_string_1633107981461}
        className="big-hero-banner-header"
      ></Header>
      <Header
        text={props.fields.text_string_1633107911113}
        className="big-hero-banner-header1"
      ></Header>
    </Container>
  )
}

BigHeroBanner.defaultProps = {
  'fields.bgImage_object_1633107582833': '',
  fields: {},
  'fields.text_string_1633107911113': 'HEADER',
  'fields.text_string_1633107981461': 'HEADER',
}

BigHeroBanner.propTypes = {
  'fields.bgImage_object_1633107582833': PropTypes.object,
  fields: PropTypes.object,
  'fields.text_string_1633107911113': PropTypes.string,
  'fields.text_string_1633107981461': PropTypes.string,
}

export default BigHeroBanner
