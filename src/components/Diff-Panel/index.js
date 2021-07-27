/* eslint-disable */
import React from 'react'
import { Header, Paragraph, Button, Image } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './diff-panel.css'

const DiffPanel = (props) => {
  return (
    <div className="diff-panel-container">
      <div className="diff-panel-container1">
        <Header field={props.fields.header_0} className="diff-panel-header"></Header>
        <Paragraph
          field={props.fields.paragraph_1627061563664}
          className="diff-panel-paragraph"
        ></Paragraph>
        <Button field={props.fields.button_1} className="diff-panel-button"></Button>
      </div>
      <Image field={props.fields.image_3} className="diff-panel-image"></Image>
    </div>
  )
}

DiffPanel.defaultProps = {
  'fields.header_0': 'text',
  fields: {},
  'fields.button_1': 'text',
  'fields.image_3': 'src',
  'fields.paragraph_1627061563664': 'text',
}

DiffPanel.propTypes = {
  'fields.header_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.button_1': PropTypes.string,
  'fields.image_3': PropTypes.object,
  'fields.paragraph_1627061563664': PropTypes.string,
}

export default DiffPanel
