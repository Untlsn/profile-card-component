import 'styled-components'

declare module 'styled-components' { // Add own themes (remember to copy it to Theme.ts)
  export interface DefaultTheme {
    colors: {
      white: '#ffffff',
      black: '#383a49',
      gray: '#82828c',
      darkCyan: '#19a1ad',
      lightCyan: '#41d6dd',
      cyan: '#22b1b9',
    },
    deepColors: {
      shadow: 'rgba(36,36,36,0.3)',
    },
    size: {
      slim: '.8em',
      little: '.6em'
    }
  }
}

