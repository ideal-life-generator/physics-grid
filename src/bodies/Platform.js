import { createClass, PropTypes, createElement, Children, cloneElement } from 'react'

export default createClass({
  childContextTypes: {
    screenWidth: PropTypes.number,
    screenHeight: PropTypes.number
  },

  getInitialState() {
    const { body: { clientWidth, clientHeight } } = document
    
    return {
      screenWidth: clientWidth,
      screenHeight: clientHeight
    }
  },

  getChildContext: function() {
    const {
      state: { screenWidth, screenHeight }
    } = this

    return {
      screenWidth,
      screenHeight
    }
  },

  checkScreenSize() {
    const { body: { clientWidth, clientHeight } } = document

    this.setState({
      screenWidth: clientWidth,
      screenHeight: clientHeight
    })
  },

  componentDidMount() {
    const { checkScreenSize } = this

    window.addEventListener('resize', checkScreenSize)

    checkScreenSize()
  },

  render() {
    const {
      props: {
        component,
        children,
        ...props
      },
      state: {
        screenWidth,
        screenHeight
      }
    } = this

    const width = screenWidth
    const height = screenHeight

    const style = {
      position: 'absolute',
      width: `${width}px`,
      height: `${height}px`
    }

    const additianalParams = {
      parentWidth: width,
      parentHeight: height
    }

    const childrenWithProps = Children.map(children, (child) => {
      return cloneElement(child, additianalParams)
    })

    return (
      createElement(component, { ...props, style, className: 'platform' }, childrenWithProps)
    )
  }
})