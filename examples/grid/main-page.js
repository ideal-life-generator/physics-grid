export const main = {
  percentWidth: 100,
  minPercentHeight: 100,
  relativeHeight: true,
  alight: [ 0.5, 0.5 ],
  mountPoint: [ 0.5, 0.5 ]
}

export const header = {
  pixelsHeight: 30,
  alight: [ 0.5, 0 ],
  mountPoint: [ 0.5 ],
  pixelsTop: 15,
  onResize({ width }) {
    if (480 <= width && width < 1024) {
      this.pixelWidth = width - 30
    } else if (1024 <= width && width < 1960) {
      this.pixelWidth = width / 1.5
    } else if (width >= 1960) {
      this.pixelWidth = width / 2
    }
  }
}