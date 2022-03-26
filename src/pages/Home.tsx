import React from 'react'

import Navbar from 'components/Navbar'
import Announcement from 'components/Announcement'

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <Announcement />
      <Navbar />
    </div>
  )
}

export default Home
