/* eslint-disable */
import React from 'react'
import {
  Header,
  Paragraph,
  Link,
  Image,
  Label,
  Linebreak,
  List,
  Video,
  Checkbox,
  Radiobutton,
  Toggle,
  Textinput,
  Dropdown,
} from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './diff-panel-three.css'

const DiffPanelThree = (props) => {
  return (
    <div className="diff-panel-three-container">
      <div className="diff-panel-three-container01">
        <div className="diff-panel-three-container02">
          <div className="diff-panel-three-container03">
            <Header text={props.fields.text_string_0} className="diff-panel-three-header"></Header>
            <Paragraph className="diff-panel-three-paragraph"></Paragraph>
            <Link
              text={props.fields.text_string_1}
              link={props.fields.link_link_1}
              className="diff-panel-three-link"
            ></Link>
          </div>
          <div className="diff-panel-three-container04">
            <Image src={props.fields.src_object_3} className="diff-panel-three-image"></Image>
          </div>
        </div>
        <div className="diff-panel-three-container05">
          <div className="diff-panel-three-container06">
            <Label
              text={props.fields.text_string_1632330596104}
              className="diff-panel-three-label"
            ></Label>
            <Linebreak className="diff-panel-three-linebreak"></Linebreak>
            <List
              list={props.fields.list_list_1632330659163}
              className="diff-panel-three-list"
            ></List>
          </div>
          <div className="diff-panel-three-container07">
            <Video
              src={props.fields.src_object_1632331042506}
              className="diff-panel-three-video"
            ></Video>
          </div>
        </div>
        <div className="diff-panel-three-container08">
          <div className="diff-panel-three-container09">
            <Checkbox className="diff-panel-three-checkbox"></Checkbox>
            <div className="diff-panel-three-container10">
              <Radiobutton className="diff-panel-three-radiobutton"></Radiobutton>
              <Radiobutton className="diff-panel-three-radiobutton1"></Radiobutton>
            </div>
            <Toggle className="diff-panel-three-toggle"></Toggle>
            <Textinput className="diff-panel-three-textinput"></Textinput>
          </div>
          <div className="diff-panel-three-container11">
            <Dropdown
              list={props.fields.list_list_1632331356799}
              text={props.fields.text_string_1632331356799}
              className="diff-panel-three-dropdown"
            ></Dropdown>
          </div>
        </div>
      </div>
      <form className="diff-panel-three-form"></form>
    </div>
  )
}

DiffPanelThree.defaultProps = {
  'fields.text_string_0': 'text',
  fields: {},
  'fields.text_string_1': 'text',
  'fields.link_link_1': 'link',
  'fields.src_object_3': 'src',
  'fields.text_string_1632330596104': 'text',
  'fields.list_list_1632330659163': 'list',
  'fields.src_object_1632331042506': 'src',
  'fields.list_list_1632331356799': 'list',
  'fields.text_string_1632331356799': 'text',
}

DiffPanelThree.propTypes = {
  'fields.text_string_0': PropTypes.string,
  fields: PropTypes.object,
  'fields.text_string_1': PropTypes.string,
  'fields.link_link_1': PropTypes.link,
  'fields.src_object_3': PropTypes.object,
  'fields.text_string_1632330596104': PropTypes.string,
  'fields.list_list_1632330659163': PropTypes.list,
  'fields.src_object_1632331042506': PropTypes.object,
  'fields.list_list_1632331356799': PropTypes.list,
  'fields.text_string_1632331356799': PropTypes.string,
}

export default DiffPanelThree
