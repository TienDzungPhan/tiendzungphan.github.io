import React from 'react'
import Avatar from "components/core/Avatar"
import Text from 'components/core/Text'
import SocialMedia from 'components/modules/SocialMedia'
import { Spacer } from '@nextui-org/react'

const Intro = () => {
  return (
    <>
      <Avatar src="assets/images/avatar.jpg" css={{ size: "$40" }} />
      <Text h2>Dzung Tien Phan</Text>
      <Text size="1.25rem">Software Engineer</Text>
      <Text sm color="$gray500">Los Angeles, CA, United States</Text>
      <Spacer />
      <SocialMedia />
    </>
  )
}

export default Intro
