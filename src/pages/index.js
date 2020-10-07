import React, { useState } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Intro from '../components/sections/Intro'

const theme = createMuiTheme({
  typography: {
    allVariants: {
      fontFamily: 'Poppins, Roboto'
    },
    h1: {
      fontWeight: 700
    }
  },
  pallete: {
    primary: {
      main: '#5f2eea'
      // dark: '#2A00A2',
      // light: '#DED3FF',
      // contrastText: '#fff'
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
    contrastThreshold: 3
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        borderRadius: 24,
        padding: '0 16px'
      }
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none'
      }
    }
  }
})
export default () => {
  const [currentTheme, setCurrentTheme] = useState(theme)

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `developer`,
          `application`,
          `full stack`,
          `barjuan davis`,
          `barjuandavis`,
          `mobile`
        ]}
      />
      <ThemeProvider theme={currentTheme}>
        <Intro />
      </ThemeProvider>
    </Layout>
  )
}
