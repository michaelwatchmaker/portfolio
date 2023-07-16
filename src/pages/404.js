import * as React from "react"
import { Link } from "gatsby"
import Button from "../components/button"
import Colorizer from "../components/colorizer"


const NotFoundPage = () => {
  return (
    <main className="notFound">
      <Colorizer
        hex= '#1c1c1e'
      />
      <title>Michael Watchmaker</title>
      <h1 className="center">🔭</h1>
      <p className="body center text-dark-alt">We searched the galaxy, but couldn't find this page.</p>
      <Link to="/">
        <Button variant="button white-alt">
          Back home
        </Button>
      </Link>
    </main>
  )
}

export default NotFoundPage
