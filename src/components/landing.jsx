import React from "react"
import { useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import StyledBackgroundSection from "../components/backgroundsection"


const Landing = () => {

  const data = useStaticQuery(graphql`
    query {
      github: file(relativePath: {eq: "github-light.png"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      linkedin: file(relativePath: {eq: "linkedin.png"}) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <StyledBackgroundSection>
      <section id="landing" class="w-full h-screen">
        <div class="flex flex-col justify-center items-center h-full overflow-auto">
          <div class="flex flex-row mt-6 mb-6">
            <a href="https://github.com/JamesLowther/" target="_blank" rel="noreferrer" class="mx-6 transform hover:scale-103">
              <Img
                fluid={data.github.childImageSharp.fluid} 
                className="w-16"
              />
            </a>
            <a href="https://www.linkedin.com/in/jameselowther/" target="_blank" rel="noreferrer" class="mx-6 transform hover:scale-103">
              <Img
                fluid={data.linkedin.childImageSharp.fluid} 
                className="w-16"
              />
            </a>
          </div>
          <div class="my-auto w-3/4 md:w-1/2 p-10 rounded-lg bg-white bg-opacity-65">
            <p class="text-3xl sm:text-5xl tracking-widest font-header">JAMES LOWTHER</p>
            <p class="text-xl font-display mt-2">Currently attending my fourth year of schooling at the Univerity of Calgary pursuing a degree in computing science. Interested in cybersecurity and both front-end and back-end development.</p>
            <p class="text-xl font-display mt-4">Located in Calgary, Alberta</p>

          </div>
          <div class="my-20 transform hover:translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" width="60">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
          </div>  
        </div>
      </section>
    </StyledBackgroundSection>
  )
}

export default Landing;