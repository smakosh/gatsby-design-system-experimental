# Design system experimental

2 approaches to deliver a design system as quickly as possible with efficiency:

1. Using `gatsby-source-figma` to fetch files data from Figma.com
2. Using a local `theme.yaml` file with all the variants and configuration
3. Using a headless CMS to manage all the theme variants and config (soon)

## First approach

- Pros:
  - Fast and Utopian
  - Every designer/developer/client dream
  - Works great with styled-system

- Cons:
  - Not scalable at the moment
  - Re-deploy and you might have to clear the cache
  - the data is complicated and needs to be restructured
  - No idea about animations and hover states
  - No padding at all

## Second approach

- Pros:
  - Works great with styled-system
  - Data is clear
  - You can add hover states, animations and padding etc...

- Cons:
  - Yaml file has lot of content
  - Splitting the data into separated yaml files requires creating mappings between node types: [See docs](https://www.gatsbyjs.org/docs/gatsby-config/#mapping-node-types)
  - Takes time to write the theme

## Third approach

Coming soon
