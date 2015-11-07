"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('../../lib/index').Chart;

// Example
(function() {

  var width = 960,
    height = 1160,
    margins = {top: 20, right: 50, bottom: 20, left: 50},
    id = "test-chart",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class";

  var title = "test chart lib"

  ReactDOM.render(
    <Chart
      title= {title}
      width= {width}
      height= {height}
      margins= {margins}
      id= {id}
      svgClassName= {svgClassName}
      titleClassName= {titleClassName}
    />
  , document.getElementById('blank-container'))

})()
