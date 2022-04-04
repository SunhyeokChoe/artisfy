import React from 'react'

import Navbar from 'components/Navbar'
import Announcement from 'components/Announcement'
import Slider from 'components/Slider'
import Categories from 'components/Categories'
import Newsletter from 'components/Newsletter'

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Newsletter />
    </div>
  )
}

export default Home
