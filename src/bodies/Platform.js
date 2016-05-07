import { createClass, PropTypes, createElement, Children, cloneElement } from 'react'

export default createClass({
  getInitialState() {
    const {
      innerWidth: screenWidth,
      innerHeight: screenHeight
    } = window
    
    return {
      screenWidth,
      screenHeight
    }
  },

  componentDidMount() {
    const { checkScreenSize } = this

    window.addEventListener('resize', checkScreenSize)
  },

  checkScreenSize() {
    const {
      innerWidth: screenWidth,
      innerHeight: screenHeight
    } = window

    this.setState({
      screenWidth,
      screenHeight
    })
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
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
      overflow: 'hidden'
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