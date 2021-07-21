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
        <Paragraph className="diff-panel-paragraph"></Paragraph>
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
}

DiffPanel.propTypes = {
  'fields.header_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.button_1': PropTypes.string,
  'fields.image_3': PropTypes.object,
}

export default DiffPanel
