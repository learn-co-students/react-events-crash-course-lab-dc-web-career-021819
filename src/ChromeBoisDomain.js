import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  handleToggleCycling = (event) => {
    toggleCycling()
  }

  handleResizeKey = (event) => {
    const someKey = event.key === "a" ? "+" : "-"
    resize(someKey)
  }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        onClick={this.handleToggleCycling}
        onKeyDown={this.handleResizeKey}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
