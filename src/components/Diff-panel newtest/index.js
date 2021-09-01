/* eslint-disable */
import React from 'react'
import { Header, Paragraph, Button} from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'
import { Text, Image } from '@sitecore-jss/sitecore-jss-react'

import './diff-panelnewtest.css'

const DiffPanelnewtest = (props) => {
  return (
    <div className="diff-panelnewtest-container">
      <div className="diff-panelnewtest-container1">
        <Header field={props.fields.header_0} className="diff-panelnewtest-header"></Header>
        <Text
          field={props.fields.text_4}
          tag="p"
          editable={false}
          encode={false}
          className="diff-panel-paragraph"
          data-sample="other-attributes-pass-through"
        />
        <Button field={props.fields.button_1} className="diff-panelnewtest-button"></Button>
      </div>
      <div className="diff-panelnewtest-container2">
        <Image field={props.fields.image_3} className="diff-panelnewtest-image"></Image>
      </div>
    </div>
  )
}

DiffPanelnewtest.defaultProps = {
  'fields.header_0': 'text',
  fields: {},
  'fields.button_1': 'text',
  'fields.image_3': 'src',
}

DiffPanelnewtest.propTypes = {
  'fields.header_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.button_1': PropTypes.string,
  'fields.image_3': PropTypes.object,
}

export default DiffPanelnewtest
