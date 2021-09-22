/* eslint-disable */
import React from 'react'
import { Header, Paragraph, Button, Image } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './diff-panel-three.css'

const DiffPanelThree = (props) => {
  return (
    <div className="diff-panel-three-container">
      <div className="diff-panel-three-container1">
        <Header text={props.fields.text_string_0} className="diff-panel-three-header"></Header>
        <Paragraph className="diff-panel-three-paragraph"></Paragraph>
        <Button
          text={props.fields.text_string_1}
          link={props.fields.link_link_1}
          className="diff-panel-three-button"
        ></Button>
      </div>
      <div className="diff-panel-three-container2">
        <Image src={props.fields.src_object_3} className="diff-panel-three-image"></Image>
      </div>
    </div>
  )
}

DiffPanelThree.defaultProps = {
  'fields.text_string_0': 'text',
  fields: {},
  'fields.text_string_1': 'text',
  'fields.link_link_1': 'link',
  'fields.src_object_3': 'src',
}

DiffPanelThree.propTypes = {
  'fields.text_string_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.text_string_1': PropTypes.string,
  'fields.link_link_1': PropTypes.link,
  'fields.src_object_3': PropTypes.object,
}

export default DiffPanelThree
