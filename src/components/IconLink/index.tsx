import { IconLinkProps } from './interfaces'

const IconLink = ({ icon: Icon, link }: IconLinkProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
    >
      <Icon className="size-8 text-indigo-800 hover:text-indigo-600 transition-all duration-300 max-sm:size-6" />
    </a>
  )
}

export default IconLink
