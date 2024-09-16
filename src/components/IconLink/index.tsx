import { IconLinkProps } from './interfaces'

const IconLink = ({ icon: Icon, link }: IconLinkProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 transition-colors"
    >
      <Icon className="hover:text-darkCerulean size-8 transition-all duration-300 max-sm:size-6" />
    </a>
  )
}

export default IconLink
