import React, { useState, useEffect } from 'react'
import Query from '../Query'
import { withRouter, Link } from 'react-router-dom'
import Nav from '../Nav'

// import CATEGORIES_QUERY from '../../queries/category/categories'
import LOGO_QUERY from '../../queries/home/logo'

const Header = ({ history }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null
  })
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false })
    })
  }, [history])

  const handleCkick = () => {
    console.log(state.clicked)
    disabledMenu()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked
      })
    }
  }

  const disabledMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  return (
    <>
      <Query query={LOGO_QUERY} id={null}>
        {({ data: { logo } }) => {
          return (
            <header className='header'>
              <nav className='uk-navbar-container' data-uk-navbar>
                <div className='uk-navbar-left'>
                  <ul className='uk-navbar-nav'>
                    <li>
                      <Link to='/'>
                        <img
                          className='logo'
                          data-srcset={
                            process.env.NODE_ENV !== 'development'
                              ? logo.logoImg.url
                              : process.env.REACT_APP_BACKEND_URL +
                                logo.logoImg.url
                          }
                          alt='logo'
                          data-uk-img
                        />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div
                  disabled={disabled}
                  onClick={handleCkick}
                  className='uk-navbar-right button'
                >
                  menu
                </div>
              </nav>
              <Nav state={state} />
            </header>
          )
        }}
      </Query>
    </>
  )
}

export default withRouter(Header)
