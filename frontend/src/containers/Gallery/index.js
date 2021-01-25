import React from 'react'
import { useParams } from 'react-router'
import Query from '../../components/Query'
// import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'

import GALLERY_QUERY from '../../queries/gallery/gallery'

const Gallery = () => {
  let { id } = useParams()
  return (
    <Query query={GALLERY_QUERY} id={id}>
      {({ data: { gallery } }) => {
        return (
          <div>
            <h1>{gallery.title}</h1>
            {gallery.image.map((e, key) => 
                <img
                  className=''
                  data-srcset={process.env.NODE_ENV !== 'development'
                  ? e.url
                  : process.env.REACT_APP_BACKEND_URL + e.url}
                  key={key}
                  alt={gallery.title}
                  data-uk-img
                />
            )}
            <div className='uk-section'>
              <div className='uk-container uk-container-small'>
                {/* <ReactMarkdown source={gallery.content} /> */}
                <p>
                  <Moment format='MMM Do YYYY'>{gallery.published_at}</Moment>
                </p>
              </div>
            </div>
          </div>
        )
      }}
    </Query>
  )
}

export default Gallery
