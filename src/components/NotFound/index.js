import './index.css'

const NotFound = () => (
  <div className="not-found-bg-container">
    <img
      className="not-found-image"
      src="https://res.cloudinary.com/djifdyfkd/image/upload/v1711792937/Group_7504_2x_swybly.png"
      alt="not found"
    />
    <div className="not-found-text-container">
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-para">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </div>
)

export default NotFound
