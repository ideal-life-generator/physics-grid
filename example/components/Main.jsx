import React, { Component } from 'react'
import dynamic from 'physics-grid/dynamic'
import Platform from 'physics-grid/bodies/Platform'
import Particle from 'physics-grid/bodies/Particle'
import {
  main,
  nav,
  a,
  ul,
  li,
  footer,
  computeLinkX,
  computeListHeight,
  computeItemY,
  navResolution,
  listResolution,
  footerResolution
} from 'grid'
import list from 'mock/list'

const menuItems = [ 'first', 'second', 'third', 'fourth', 'fifth', 'sixth' ]

class Main extends Component {
  render() {
    const { createList } = this

    return (
      <Platform {...main}>
        <Nav {...nav}>
          {menuItems.map((title, index) => {
            return (
              <Particle
                key={index}
                {...a}
                xPct={computeLinkX(index)}>
                {title}
              </Particle>
            )
          })}
        </Nav>
        <List
          {...ul}
          heightPx={computeListHeight(list.length)}>
          {list.map(({ id, title }, index) => {
            return (
              <Particle
                key={id}
                {...li}
                yPx={computeItemY(index)}>
                {title}
              </Particle>
            )
          })}
        </List>
        <Footer
          {...footer}
          listHeight={computeListHeight(list.length)} />
      </Platform>
    )
  }
}

const Nav = dynamic(navResolution)(Particle)

const List = dynamic(listResolution)(Particle)

const Footer = dynamic(footerResolution)(Particle)

export default Main