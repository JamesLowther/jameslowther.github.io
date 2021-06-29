import React from "react";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";

import "../assets/css/writeups.css";

const WriteupTemplate = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <section className="writeup overflow-x-auto" style={{"font-family": "'Roboto Mono', monospace"}}>
      <Helmet title={`${post.frontmatter.title} - James Lowther`} />
      <div className="flex absolute">
        <Link
          className="text-white mt-5 ml-4 shadow-lg transition duration-200 ease-in-out bg-gray-700 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 rounded-lg py-2 px-8"
          style={{"color": "white", "text-decoration": "none"}}
          to=".."
        >
          Back
        </Link>
      </div>
      <div className="w-inner-div pb-10">
        <div className="mb-10 font-bold text-center py-32 overflow-x-auto">
          <div className="text-5xl lg:text-7xl mb-4">{post.frontmatter.title}</div>
          <div className="text-4xl">{post.frontmatter.date}</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </section>
  );
};

export const pageQuery = graphql`
  query WriteupByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default WriteupTemplate;
