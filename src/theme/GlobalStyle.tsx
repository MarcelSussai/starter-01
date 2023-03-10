import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    outline: 0;
  }
  ul[class], ol[class] {
    padding: 0;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  html::-webkit-scrollbar-track  {
    
  }
  html::-webkit-scrollbar {
    width: 10px;
  }
  html::-webkit-scrollbar-button  {
    display: none;
  }
  html::-webkit-scrollbar-track-piece {
    background: #808080;
    
  }
  html::-webkit-scrollbar-thumb {
    background: #323232;
  }
  html {
    scroll-behavior: smooth;
    font-size:  62.5%;
    overflow-x: hidden;
    scrollbar-color: #323232 #646464;
  }
  a {
    text-decoration: none;
  }
  body {
    min-height: 100vh;
    padding: 0;
    line-height: 1.4;
    overflow-x: hidden;
    font-size: 1.6rem;
    background: #FFF;
  }
  ul[class], ol[class] {
    list-style: none;
  }
  a:not([class]) {
    -webkit-text-decoration-skip: ink;
            text-decoration-skip-ink: auto;
  }
  img {
    max-width: 100%;
    display: block;
  }
  input, button, textarea, select {
    font: inherit;
    margin: 0;
    padding: 0;
    border: none;
  }
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`
