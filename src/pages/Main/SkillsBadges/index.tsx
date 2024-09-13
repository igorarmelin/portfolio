import { FaAws, FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { GrGraphQl } from 'react-icons/gr'
import { SiJest, SiTypescript } from 'react-icons/si'

const SkillsBadges = () => {
  const techStack = [
    { icon: FaHtml5, name: 'HTML5' },
    { icon: FaCss3Alt, name: 'CSS3' },
    { icon: FaJs, name: 'JavaScript' },
    { icon: SiTypescript, name: 'TypeScript' },
    { icon: FaReact, name: 'React' },
    { icon: GrGraphQl, name: 'GraphQL' },
    { icon: SiJest, name: 'Jest' },
    { icon: FaAws, name: 'AWS' },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="w-24 h-20 max-sm:w-20 max-sm:h-16 max-xs:w-16 max-xs:h-16 bg-indigo-600 rounded-md hover:bg-indigo-500 transition-all duration-300 flex flex-col justify-center items-center space-y-2 cursor-default"
        >
          <div className="flex justify-center text-zinc-200">
            <tech.icon className="text-4xl max-sm:text-3xl" />
          </div>
          <p className="text-xs font-bold text-center text-zinc-200 max-sm:font-semibold max-xs:font-normal max-xs:text-xss">
            {tech.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export default SkillsBadges
