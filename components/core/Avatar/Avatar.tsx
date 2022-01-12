import React from 'react'
import { Avatar as NextUIAvatar, AvatarProps } from '@nextui-org/react'

interface IProps extends AvatarProps {}

const Avatar: React.FC<IProps> = ({
  src,
  size,
  css
}) => {
  return (
    <NextUIAvatar
      src={src}
      size={size}
      css={css}
    />
  )
}

export default Avatar
