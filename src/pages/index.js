import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled, { css } from "styled-components"
import {
  variant,
  color as localColor,
  typography,
  layout,
  border,
} from "styled-system"

const Button = styled("button")(
  css({
    cursor: "pointer",
    marginRight: 20,
    transition: ".3s all",
  }),
  localColor,
  typography,
  layout,
  border,
  variant({
    scale: "buttons",
  })
)

const getRgb = ({ r, g, b }) => {
  const scale = v => v * 255
  return `rgb(${scale(r)}, ${scale(g)}, ${scale(b)})`
}

const IndexPage = () => {
  const {
    figma: { pages },
  } = useStaticQuery(
    graphql`
      query {
        figma: figmaDocument {
          name
          pages {
            name
            children {
              name
              cornerRadius
              absoluteBoundingBox {
                height
                width
              }
              style {
                fontFamily
                fontSize
                fontWeight
                letterSpacing
                lineHeightPercent
                lineHeightPx
                lineHeightUnit
                textAlignHorizontal
                textAlignVertical
              }
              fills {
                color {
                  a
                  b
                  g
                  r
                }
              }
              id
            }
            backgroundColor {
              a
              b
              g
              r
            }
          }
        }
      }
    `
  )

  const figmaDocument = pages[0].children[0]
  const secondFigmaDocument = pages[0].children[1]

  const name = secondFigmaDocument.name
  const borderRadius = figmaDocument.cornerRadius
  const width = figmaDocument.absoluteBoundingBox.width
  const height = figmaDocument.absoluteBoundingBox.height
  const fontSize = secondFigmaDocument.style.fontSize
  const fontWeight = secondFigmaDocument.style.fontWeight
  const fontFamily = secondFigmaDocument.style.fontFamily
  const letterSpacing = secondFigmaDocument.style.letterSpacing
  const backgroundColor = getRgb(figmaDocument.fills[0].color)
  const color = getRgb(secondFigmaDocument.fills[0].color)

  return (
    <Layout>
      <SEO title="Design System" />
      <div style={{ marginBottom: 40 }}>
        <h2>From Figma</h2>
        <Button
          width={width}
          height={height}
          borderRadius={borderRadius}
          border={0}
          letterSpacing={letterSpacing}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontFamily={fontFamily}
          color={color}
          bg={backgroundColor}
          type="button"
        >
          {name}
        </Button>
      </div>
      <div>
        <h2>From local</h2>
        <Button variant="primary">local primary</Button>
        <Button variant="secondary">local secondary</Button>
      </div>
    </Layout>
  )
}

export default IndexPage
