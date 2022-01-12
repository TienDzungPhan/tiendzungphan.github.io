import React from 'react'
import { Link as NextUILink, LinkProps } from '@nextui-org/react'

interface IProps extends LinkProps {}

const Link: React.FC<IProps> = ({
  href,
  target,
  block,
  icon,
  css,
  children
}) => {
  return (
    <NextUILink
      href={href}
      target={target}
      block={block}
      icon={icon}
      css={css}
    >
      {children}
    </NextUILink>
  )
}

export default Link
