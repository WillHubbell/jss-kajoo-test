/* eslint-disable */
import React from 'react'
import { Header, Paragraph, Button} from '../../lib/bundle_sitecore.js' /* , Image */
import PropTypes from 'prop-types'
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

import './diff-panel.css'

const DiffPanel = (props) => {
  return (
    <div className="diff-panel-container">
      <div className="diff-panel-container1">
        <Header field={props.fields.header_0} className="diff-panel-header"></Header>
        <Text
          field={props.fields.text_4}
          tag="p"
          editable={false}
          encode={false}
          className="diff-panel-paragraph"
          data-sample="other-attributes-pass-through"
        />
        <Button field={props.fields.button_1} className="diff-panel-button"></Button>
      </div>
      <Image media={props.fields.image_3} className="diff-panel-image"/> 
      
    </div>
  )
}

DiffPanel.defaultProps = {
  'fields.header_0': 'text',
  fields: {},
  'fields.button_1': 'text',
  'fields.image_3': 'src',
  'fields.text_4' : 'text',
}

DiffPanel.propTypes = {
  'fields.header_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.button_1': PropTypes.string,
  'fields.image_3': PropTypes.object,
  'fields.text_4' : PropTypes.string,
}

export default DiffPanel

/* taken-out code:
<Paragraph className="diff-panel-paragraph"></Paragraph>

<Image field={props.fields.image_3} className="diff-panel-image"></Image> */