import * as React from "react"
import { Link } from "gatsby"

import "../styles/global.css";

const NotFoundPage = () => {
  return (
    <main className="notFound animated">
      <title>Michael Watchmaker</title>
      <h1 className="center big-emoji">👀</h1>
      <h1 className="center">404 – nothing to see here.</h1>
      <Link to="/" style={{width: 'fit-content'}}>
          <p className="body medium link-md">Go home</p>
      </Link>
    </main>
  )
}

export default NotFoundPage
