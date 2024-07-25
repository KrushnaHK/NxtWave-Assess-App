import {Link, withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="header-container">
      <Link to="/" className="header-home-link">
        <img
          src="https://res.cloudinary.com/djifdyfkd/image/upload/v1711797243/Group_8004_3x_sqmvrj.png"
          alt="website logo"
          className="header-logo-img"
        />
      </Link>
      <button
        type="button"
        onClick={onClickLogout}
        className="header-logout-btn"
      >
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
