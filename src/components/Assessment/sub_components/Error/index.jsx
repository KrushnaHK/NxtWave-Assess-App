import './index.css'

const Error = ({retryFunc}) => (
  <div className="error-bg-container">
    <img
      src="https://res.cloudinary.com/djifdyfkd/image/upload/v1712222035/Group_7519_gry_chyyhk.png"
      alt="failure view"
      className="error-image"
    />
    <h1 className="error-heading">Oops! Something went wrong</h1>
    <p className="error-paragraph">We are having some trouble</p>
    <button type="button" onClick={retryFunc} className="error-button">
      Retry
    </button>
  </div>
)

export default Error
