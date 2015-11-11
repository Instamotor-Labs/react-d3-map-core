"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

export default class Tooltip extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    gravity: 's',
    dist: 10
  }

  _mkContent() {
    const {
      contentTooltip
    } = this.props;

    var cv = Object.keys(contentTooltip).map((d, i) => {

      var trStyle = {
        display: 'table-row',
        backgroundImage: 'linear-gradient(#FFF, #EEE)',
        padding: '3px',
        height: '30px'
      }

      var tdStyle = {
        display: 'table-cell',
        padding: '3px',
        verticalAlign: 'middle',
        whiteSpace: 'normal',
        border: '1px solid #D3D3D3',
        maxWidth: '250',
        maxHeight: '150'
      }

      var tdHeadStyle = {
        display: 'table-cell',
        padding: '3px',
        verticalAlign: 'middle',
        whiteSpace: 'normal',
        border: '1px solid #D3D3D3',
        backgroundColor: '#555',
        color: '#FFF',
        textTransform: 'capitalize'
      }

      return (
        <div className= "tooltip_tr" style={trStyle} key={i}>
          <div className= "tooltip_td" style={tdHeadStyle} key={i}>
            {d}
          </div>
          <div className= "tooltip_td" style={tdStyle} key={i.i}>
            {contentTooltip[d].toString()}
          </div>
        </div>
      )
    })

    return cv;
  }

  render() {
    const {
      xTooltip,
      yTooltip,
      contentTooltip,
      dist
    } = this.props;

    var style = {
      left: xTooltip? xTooltip + dist: -100,
      top: yTooltip? yTooltip + dist: -100,
      position: 'fixed'
    }

    if(contentTooltip) {
      var cvContent = this._mkContent();
    }

    var tableStyle = {
      display: 'table',
      borderStyle: 'solid',
      borderWidth: '1px',
      boxSizing: 'border-box'
    };

    return (
      <div
        style= {style}
        className= "react-d3-map-core__tooltip_utils"
        ref= "tooltip"
        >
        <div className= "tooltip_table" style={tableStyle}>
          {cvContent}
        </div>
      </div>
    )
  }
}
