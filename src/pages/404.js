import React from "react"
import Layout from "components/Layout"
import Image from "../images/404.svg"

const imageSvg = {
  width: "50%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "5em",
  textAlign: "center",
}

const styleCenter = {
    textAlign: "center"
}

const NotFoundPage = () => (
  <Layout>
    <h1 style={styleCenter}>NOT FOUND</h1>
    <p style={styleCenter}>Oops. The page you were looking for couldn&#39;t be found :(</p>
    <img style={imageSvg} src={Image} alt="404, page not found."></img>
  </Layout>
)

export default NotFoundPage
