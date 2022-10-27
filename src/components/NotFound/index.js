import './index.css'

import Header from '../Header'

const NotFound = () => (
  <div className="not-found-container">
    <Header />
    <div className="content-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="not found"
        className="image"
      />
      <h1 className="heading">Page Not Found</h1>
      <p className="para">
        We're sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)

export default NotFound
