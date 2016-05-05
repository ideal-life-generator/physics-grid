import { Component, createElement } from "react"

export default class Space extends Component {
  componentDidMount() {
    const {
      props: {
        addOnResizeCallback,
        params,
        params: { onResize }
      }
    } = this

    addOnResizeCallback(onResize.bind(params))
  }

  render() {
    const {
      props: {
        parentWidth,
        parentHeight,
        params: {
          pixelsNegativeDifferenceWidth,
          heightPx,
          alightX,
          mountPointX,
          top,
          addOnResizeCallback,
          onResize,
          component
        },
        children,
        ...props
      }
    } = this

    const width = parentWidth - pixelsNegativeDifferenceWidth
    const height = heightPx
    const transformX = parentWidth * alightX - width * mountPointX
    const transformY = top

    const style = {
      position: 'absolute',
      width: `${width}px`,
      height: `${height}px`,
      transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${transformX}, ${transformY}, 0, 1)`
    }

    return (
      createElement(component, { ...props, style }, children)
    )
  }
}