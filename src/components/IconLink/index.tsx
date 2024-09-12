import { IconLinkProps } from './interfaces'

const IconLink = ({ icon, link, download }: IconLinkProps) => {
  return (
    <a
      href={link}
      download={download}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
    >
      <span>{icon}</span>
    </a>
  )
}

export default IconLink
