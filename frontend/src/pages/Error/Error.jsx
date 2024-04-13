import './Error.sass'

function Error() {
    return (
        <div className="error">
          <div className="error__404">404</div>
          <div className="error__message">
          This page doesn’t exist !
          </div>
          {/* <NavLink className="error__home-link" to="/">
            <button className="error__home-link-button">Back to home page</button>
          </NavLink> */}
          <a href="/"><button className="error__home-link">Back to home page</button></a>
        </div>
      )
}

export default Error