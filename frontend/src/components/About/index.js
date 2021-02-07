import React from 'react'
import Query from '../../components/Query'
import ABOUT_QUERY from '../../queries/about/about'
import ReactMarkdown from 'react-markdown'

const About = () => {
  return (
    <>
      <Query query={ABOUT_QUERY}>
        {({ data: { about } }) => {
          return (
            <>
              <div className="uk-section">
                <div className='uk-container uk-container-small'>
                  <h1>{about.title}</h1>
                  <ReactMarkdown source={about.content} />
                </div>
              </div>
            </>
          )
        }}
      </Query>
    </>
  )
}

export default About
