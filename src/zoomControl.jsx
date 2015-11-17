"use strict"

import {
  default as React,
  Component,
  PropTypes
} from 'react';

export default class ZoomControl extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const {
      zoomInClick,
      zoomOutClick
    } = this.props;

    var zoomControlStyle = {
      left: 0,
      top: 0,
      position: 'absolute',
      border: '2px solid rgba(0,0,0,0.2)',
      backgroundClip: 'padding-box',
      boxShadow: 'none',
      marginLeft: '10px',
      marginTop: '10px',
      cursor: 'pointer'
    }

    var zoomInStyle = {
      width: '30px',
      height: '30px',
      lineHeight: '30px',
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',
      fontSize: '22px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #CCC',
      textAlign: 'center',
      textDecoration: 'none',
      color: 'black',
      display: 'block'
    }

    var zoomOutStyle = {
      width: '30px',
      height: '30px',
      lineHeight: '30px',
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
      fontSize: '24px',
      backgroundColor: '#fff',
      textAlign: 'center',
      textDecoration: 'none',
      color: 'black',
      display: 'block'
    }

    return (
      <div className="react-d3-map-core__zoom-control" style= {zoomControlStyle}>
        <a className="react-d3-map-core__zoom-control__zoom-in" style={zoomInStyle} onClick={zoomInClick}>+</a>
        <a className="react-d3-map-core__zoom-control__zoom-out" style={zoomOutStyle} onClick={zoomOutClick}>-</a>
      </div>
    )
  }
}