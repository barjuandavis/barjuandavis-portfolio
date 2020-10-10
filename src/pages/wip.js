import React, { useState, createContext } from 'react'
import Layout from '../components/WipLayout'
import SEO from '../components/SEO'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

export const globalContext = createContext()

export default () => {
  const [darkMode, setDarkMode] = useState(false)
  const theme = createMuiTheme({
    typography: {
      allVariants: {
        fontFamily: 'Poppins, Roboto',
        color: darkMode ? '#fafafa' : '#000',
        transition: 'color 200ms ease-in-out'
      },
      h1: { fontWeight: 700, fontSize: 'max(2.5rem, min(6vw, 6rem))' },
      h2: { fontWeight: 500 },
      h3: { fontWeight: 300 },
      h4: { fontWeight: 700 },
      h5: { fontWeight: 500 },
      h6: { fontWeight: 300, fontSize: 'max(1.1rem, min(4vw, 1.25rem))' },
      subtitle1: { fontWeight: 400 },
      subtitle2: { fontWeight: 300 },
      body1: { fontWeight: 500 },
      body2: { fontWeight: 300 }
    },
    palette: {
      primary: {
        main: darkMode ? '#2a00a2' : '#5f2eea',
        dark: '#2A00A2',
        light: '#DED3FF',
        contrastText: '#fff'
      },
      secondary: {
        main: '#1CC8EE',
        dark: '#0096B7',
        light: '#D5F7FF',
        contrastText: '#fff'
      },
      error: {
        main: '#ED2E7E',
        dark: '#C30052',
        light: '#FFF2F7',
        contrastText: '#fff'
      },
      success: {
        main: '#00BA88',
        dark: '#00966D',
        light: '#F3FDFA',
        contrastText: '#fff'
      },
      warning: {
        main: '#F4B740',
        dark: '#A26B00',
        light: '#FFF0D4',
        contrastText: '#fff'
      },
      background: {
        default: darkMode ? '#121212' : '#fafafa'
      },
      contrastThreshold: 3
    },
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'none',
          borderRadius: 24,
          padding: '8px 16px',
          transition:
            'color 200ms ease-in-out, border-color 200ms ease-in-out, background-color 200ms ease-in-out'
        },
        outlinedPrimary: {
          color: darkMode ? '#DED3FF' : '#5f2eea',
          borderColor: darkMode ? '#DED3FF' : '#5f2eea'
        }
      },
      MuiAppBar: {
        root: {
          boxShadow: 'none',
          textTransform: 'capitalize',
          letterSpacing: '3.2px'
        },
        colorPrimary: {
          backgroundColor: 'transparent',
          color: '#000'
        }
      }
    }
  })

  const { Provider } = globalContext

  return (
    <Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>
        <SEO
          title="Home"
          keywords={[
            `developer`,
            `application`,
            `full stack`,
            `barjuandavis`,
            `barjuan davis`,
            `mobile`
          ]}
        />
        <Layout>
  
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}
