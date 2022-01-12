import React from 'react'
import Link from 'components/core/Link'

const SocialMedia: React.FC = () => {
  return (
    <span className="socialMedia">
      <Link
        href="https://www.linkedin.com/in/dzung-phan-0860a71a5/"
        target="_blank"
        icon={false}
      >
        <i className="fab fa-linkedin fa-2x"></i>
      </Link>
      <Link
        href="https://github.com/TienDzungPhan"
        target="_blank"
        icon={false}
        css={{ color: "$black", paddingLeft: "$4", paddingRight: "$4" }}
      >
        <i className="fab fa-github fa-2x"></i>
      </Link>
      <Link
        href="https://trailblazer.me/id/dphan21"
        target="_blank"
        icon={false}
      >
        <i className="fab fa-salesforce fa-2x"></i>
      </Link>
    </span>
  )
}

export default SocialMedia
