import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import "./layout.css"

const Layout = ({ children }) => {
  const { theme } = useStaticQuery(graphql`
    query {
      theme: themeYaml {
        buttons {
          primary {
            border
            borderRadius
            fontWeight
            height
            textTransform
            width
            fontFamily
            backgroundColor
            hoverBgColor
            hoverColor
            color
            fontSize
          }
          secondary {
            width
            height
            borderRadius
            textTransform
            fontWeight
            backgroundColor
            borderWidth
            borderStyle
            fontFamily
            hoverBgColor
            hoverColor
            color
            borderColor
            fontSize
          }
        }
        colors {
          black
          blue
          darkBlue
          lightBlue
        }
      }
    }
  `)

  theme.buttons.secondary = {
    ...theme.buttons.secondary,
    "&:hover": {
      backgroundColor: theme.buttons.secondary.hoverBgColor,
      color: theme.buttons.secondary.hoverColor,
    },
  }

  theme.buttons.primary = {
    ...theme.buttons.primary,
    "&:hover": {
      backgroundColor: theme.buttons.primary.hoverBgColor,
      color: theme.buttons.primary.hoverColor,
    },
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: "5rem 1.0875rem 0 1.45rem",
            paddingTop: 0,
          }}
        >
          <main style={{ paddingTop: 300 }}>{children}</main>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
