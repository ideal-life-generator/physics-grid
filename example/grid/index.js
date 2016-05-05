export const main = {
  component: 'div',
  widthPct: 100,
  heightPct: 100
}

export const nav = {
  component: 'nav',
  decreaseWidthPx: 300,
  alignX: 0.5,
  deposeX: 0.5,
  yPx: 35
}

export const a = {
  component: 'a',
  widthPct: 100 / 6,
  decreaseWidthPct: 5
}

export const ul = {
  component: 'ul',
  className: 'list',
  decreaseWidthPx: 500,
  alignX: 0.5,
  deposeX: 0.5
}

export const li = {
  component: 'li',
  className: 'item',
  heightPx: 50,
  decreaseWidthPx: 50,
  alignX: 0.5,
  deposeX: 0.5
}

export const footer = {
  component: 'footer',
  heightPx: 20,
  alignX: 0.5,
  deposeX: 0.5
}

export function computeLinkX(n) {
  if (n === 0) return 0
  else return n * 100 / 6 + n * 100 / 6 / 100
}

export function computeListHeight(count) {
  return 15 + count * 50 + (count-1) * 10 + 15
}

export function computeItemY(n) {
  return 15 + n * 50 + n * 10
}

export function computeFooterY(listHeight) {
}

export function navResolution() {
  const { matches: heightOver300Px } = matchMedia('(min-height: 300px)')

  let heightPx
  if (heightOver300Px) heightPx = 40
  else heightPx = 35
  
  return { heightPx }
}

export function listResolution() {
  const { matches: heightOver300Px } = matchMedia('(min-height: 300px)')

  let yPx
  if (heightOver300Px) yPx = 105
  else yPx = 90
  
  return { yPx }
}

export function footerResolution({ listHeight }) {
  const { innerHeight } = window
  const { matches: heightOver300Px } = matchMedia('(min-height: 300px)')
  let yPx = 105 + listHeight + 15

  if (yPx + 20 < innerHeight) yPx = innerHeight - 20
  else yPx = yPx

  if (heightOver300Px) yPx = yPx
  else yPx = yPx - 15

  return { yPx }
}