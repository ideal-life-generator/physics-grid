import { Component, createElement, cloneElement, PropTypes } from "react"

const { number } = PropTypes

export default function dynamic(getDynamicProps) {
  return function(PrimaryComponent) {
    return class DynamicComponent extends Component {
      render() {
        const { props } = this
        const dynamicProps = getDynamicProps(props)

        return createElement(PrimaryComponent, { ...props, ...dynamicProps })
      }
    }
  }
}