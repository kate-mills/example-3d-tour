import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ZillowIframe from "../components/zillow-iframe"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <h1 className={styles.textCenter}>Example  3D Tour</h1>
    <ZillowIframe title="3d Tour of Office" />
  <p><b>Note on the app:</b> You do not need to stop videoing a room. The app will auto-stop after recording enough panorama data.</p>
  </Layout>
)

export const Head = () => <Seo title="Kate's Office" />

export default IndexPage
