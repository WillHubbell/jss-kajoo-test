/* eslint-disable */
import React from 'react'
import { Toggle, Dropdown } from '../../lib/bundle_sitecore.js'
import PropTypes from 'prop-types'

import './no-name-project.css'

const NoNameProject = (props) => {
  return (
    <div className="no-name-project-container">
      <Toggle className="no-name-project-toggle"></Toggle>
      <div className="no-name-project-container1">
        <Dropdown className="no-name-project-dropdown"></Dropdown>
        <Dropdown className="no-name-project-dropdown1"></Dropdown>
      </div>
    </div>
  )
}

NoNameProject.defaultProps = {
  fields: {},
}

NoNameProject.propTypes = {
  fields: PropTypes.object,
}

export default NoNameProject
