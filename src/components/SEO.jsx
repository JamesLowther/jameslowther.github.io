import React from "react"

import { Helmet } from "react-helmet"

const SiteMetadata = ({title}) => {

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="Personal website for James Lowther" />
      <link rel="canonical" href="http://jameslowther.com" />
    </Helmet>
  )
}

export default SiteMetadata;