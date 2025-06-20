import { render } from 'preact'
import { App } from './app.jsx'

function getRandomNeonAccent() {
    let hue
    do {
        hue = Math.floor(Math.random() * 360)
    } while (hue >= 40 && hue <= 60)
    const saturation = 100
    const lightness = 50
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
}

const neonColor = getRandomNeonAccent()
document.documentElement.style.setProperty('--accent-color', neonColor)
console.log('%cAccent Color →', `color: ${neonColor}; font-weight: bold;`, neonColor)

render(<App />, document.body)