"use strict";

import { default as React, Component } from 'react';
import PropTypes from 'prop-types';

import {
  default as ReactFauxDOM,
} from 'react-faux-dom';

import d3 from 'd3';

import {
  isTooltipUpdate
} from './utils/tooltipUpdate';

export default class Sphere extends Component {
  constructor(props) {
    super (props);
  }

  static defaultProps = {
    sphereClass: 'react-d3-map-core__sphere',
    onMouseOver: (d) => {},
    onMouseOut: (d) => {}
  }

  static propTypes = {
    geoPath: PropTypes.func.isRequired,
    sphereClass: PropTypes.string
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isTooltipUpdate(nextProps, nextState, this);
  }

  _mkGraticule(dom) {
    const {
      sphereClass,
      geoPath,
      onMouseOut,
      onMouseOver
    } = this.props;

    var sphere = d3.select(dom)

    sphere
      .datum({type: "Sphere"})
      .attr('class', `${sphereClass} sphere`)
      .attr('d', geoPath)
      .on("mouseover", function (d, i) {return onMouseOver(this, d, i);})
      .on("mouseout", function (d, i) {return onMouseOut(this, d, i);} )

    return sphere;
  }

  render () {
    var sphereGroup = ReactFauxDOM.createElement('path');
    var chart = this._mkGraticule(sphereGroup);

    return chart.node().toReact();
  }

}
