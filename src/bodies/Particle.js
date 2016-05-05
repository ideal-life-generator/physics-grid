import { Component, createElement, Children, cloneElement, isValidElement } from "react"

const { map } = Children

export default class Particle extends Component {
  render() {
    const {
      props: {
        parentWidth,
        parentHeight,
        widthPx,
        widthPct,
        increaseWidthPx,
        increaseWidthPct,
        decreaseWidthPx,
        decreaseWidthPct,
        heightPx,
        heightPct,
        increaseHeightPx,
        increaseHeightPct,
        decreaseHeightPx,
        decreaseHeightPct,
        xPx,
        xPct,
        alignX,
        deposeX,
        yPx,
        yPct,
        alignY,
        deposeY,
        component,
        children,
        ...props
      }
    } = this

    let width
    if (widthPx) {
      width = widthPx
    } else if (widthPct) {
      width = parentWidth * widthPct / 100
    } else {
      width = parentWidth
    }

    if (increaseWidthPx) {
      width = width - increaseWidthPx
    } else if (increaseWidthPct) {
      width = width - width * increaseWidthPct / 100
    }

    if (decreaseWidthPx) {
      width = width - decreaseWidthPx
    } else if (decreaseWidthPct) {
      width = width - width * decreaseWidthPct / 100
    }

    let height
    if (heightPx) {
      height = heightPx
    } else if (heightPct) {
      height = parentHeight * heightPct / 100
    } else {
      height = parentHeight
    }

    if (increaseHeightPx) {
      height = height - increaseHeightPx
    } else if (increaseHeightPct) {
      height = height - height * increaseHeightPct / 100
    }

    if (decreaseHeightPx) {
      height = height - decreaseHeightPx
    } else if (decreaseHeightPct) {
      height = height - height * decreaseHeightPct / 100
    }

    let transformX
    if (xPx) {
      transformX = xPx
    } else if (xPct) {
      transformX = parentWidth * xPct / 100
    } else {
      transformX = 0
    }

    if (alignX) {
      transformX = transformX + parentWidth * alignX
    }

    if (deposeX) {
      transformX = transformX - width * deposeX
    }

    let transformY
    if (yPx) {
      transformY = yPx
    } else if (yPct) {
      transformY = parentWidth * yPct / 100
    } else {
      transformY = 0
    }

    if (alignY) {
      transformY = transformY + parentWidth * alignY
    }

    if (deposeY) {
      transformY = transformY - width * deposeY
    }

    const style = {
      position: 'absolute',
      width: `${width}px`,
      height: `${height}px`,
      transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${transformX}, ${transformY}, 0, 1)`
    }

    const additianalParams = {
      parentWidth: width,
      parentHeight: height
    }

    const childrenWithProps = map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child, additianalParams)
      } else {
        return child
      }
    })

    return (
      createElement(component, { ...props, style, className: props.className ? `particle ${props.className}`: 'particle' }, childrenWithProps)
    )
  }
}