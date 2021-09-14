/* eslint-disable */
import React from 'react'
import { Header, Image, Paragraph, Button } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './albraa-test.css'

const AlbraaTest = (props) => {
  return (
    <div className="albraa-test-container">
      <Header field={props.fields.header_1631645461910} className="albraa-test-header"></Header>
      <div className="albraa-test-container1">
        <div className="albraa-test-container2">
          <Image field={props.fields.image_1631645443221} className="albraa-test-image"></Image>
        </div>
        <div className="albraa-test-container3">
          <Paragraph
            field={props.fields.paragraph_1631645474848}
            className="albraa-test-paragraph"
          ></Paragraph>
          <Button field={props.fields.button_1631645481243} className="albraa-test-button"></Button>
        </div>
      </div>
    </div>
  )
}

AlbraaTest.defaultProps = {
  fields: {},
  'fields.image_1631645443221': 'src',
  'fields.header_1631645461910': 'text',
  'fields.paragraph_1631645474848': 'text',
  'fields.button_1631645481243': 'text',
}

AlbraaTest.propTypes = {
  fields: PropTypes.object,
  'fields.image_1631645443221': PropTypes.object,
  'fields.header_1631645461910': PropTypes.string,
  'fields.paragraph_1631645474848': PropTypes.string,
  'fields.button_1631645481243': PropTypes.string,
}

export default AlbraaTest
