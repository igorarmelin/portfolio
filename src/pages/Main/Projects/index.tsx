import { FaGithub } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { IconLink } from '../../../components'
import { projects } from './utils'

const Projects = () => {
  return (
    <>
      <div className="text-6xl font-extrabold text-zinc-200 mb-24 max-sm:text-4xl">
        Meus Projetos
      </div>
      <div className="flex flex-wrap justify-center gap-12 max-w-screen-xl">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="relative w-96 h-auto max-xs:w-80">
              <img
                src={project.macImage}
                alt={`${project.name} em computador`}
                className="w-full h-auto"
              />
              <img
                src={project.mobileImage}
                alt={`${project.name} em dispositivo móvel`}
                className="absolute w-1/4 left-0 top-8"
              />
            </div>
            <div className="flex space-x-4">
              <IconLink icon={TbWorld} link={project.website} />
              <IconLink icon={FaGithub} link={project.github} />
            </div>
            <p className="text-center text-xl font-bold text-indigo-800 cursor-default">
              {project.name}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects
