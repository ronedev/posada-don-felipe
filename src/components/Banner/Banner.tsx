import React from 'react'
import { FormattedMessage } from 'react-intl'

interface props{
    image: string,
    idText: string
}

const Banner = ({image, idText}: props) => {
  return (
    <section className='bannerContainer'>
        <img src={image} alt="banner" />
        <h2>
            <FormattedMessage id={idText} />
        </h2>
    </section>
  )
}

export {Banner}