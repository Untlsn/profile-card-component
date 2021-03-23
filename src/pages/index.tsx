import * as React from 'react'
import * as Providers from '@providers/all'
import * as O from '@organisms/all'
import * as A from '@atoms/all'
import imageVictor from '@assets/images/image-victor.jpg'

const getPersonalData = (name: string, age: number, residence: string) => ({
  name,
  age,
  residence
})
const getCountData = (num: number, name: string) => ({ num, name })

const Home = () => {
  return (
    <Providers.Style>
      <A.Background />
      <O.ProfileCard
        img={imageVictor}
        personalData={getPersonalData('Victor Crest', 26, 'London')}
        countData={[
          getCountData(80000, 'followers'),
          getCountData(803000, 'likes'),
          getCountData(1400, 'photos')
        ]}/>
    </Providers.Style>
  )
}

export default Home
