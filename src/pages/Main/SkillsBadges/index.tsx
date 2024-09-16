import {
  BiLogoGraphql,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoTypescript,
} from 'react-icons/bi'
import { FaAws, FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa'
import { SiJest } from 'react-icons/si'

const SkillsBadges = () => {
  const techStack = [
    { icon: FaHtml5, name: 'HTML5' },
    { icon: FaCss3Alt, name: 'CSS3' },
    { icon: BiLogoJavascript, name: 'JavaScript' },
    { icon: BiLogoTypescript, name: 'TypeScript' },
    { icon: FaReact, name: 'React' },
    { icon: BiLogoGraphql, name: 'GraphQL' },
    { icon: SiJest, name: 'Jest' },
    { icon: FaAws, name: 'AWS' },
    { icon: BiLogoNodejs, name: 'NodeJS' },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="w-24 h-20 max-sm:w-20 max-sm:h-16 max-xs:w-16 max-xs:h-16 flex flex-col justify-center items-center space-y-2"
        >
          <div className="flex justify-center">
            <tech.icon className="text-berkeleyBlue size-8 max-sm:size-6" />
          </div>
          <p className="text-berkeleyBlue text-xs font-bold text-center max-sm:font-semibold max-xs:font-normal max-xs:text-xss">
            {tech.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export default SkillsBadges
