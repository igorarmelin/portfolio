import SkillsBadges from './SkillsBadges'
import Projects from './Projects'
import { BottomWaveSVG, TopWaveSVG } from './utils'
import { IconLink } from '../../components'
import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa'
import { PiArticleMediumFill, PiCertificateFill } from 'react-icons/pi'

const Main = () => {
  return (
    <div className="bg-honeydew text-cerulean flex flex-col font-poppins uppercase">
      <div className="h-screen flex flex-col justify-center items-start max-w-screen-xl mx-auto px-4">
        <div className="max-w-4xl w-full mx-auto">
          <h2 className="text-2xl font-bold max-sm:text-base">
            Igor Pegoraro Armelin
          </h2>
          <div className="flex space-x-6">
            <h1 className="text-berkeleyBlue text-9xl font-extrabold max-sm:text-7xl max-md:text-8xl max-xs:text-6xl ">
              Front
            </h1>
            <div className="flex space-x-6">
              <IconLink
                icon={FaLinkedin}
                link="https://linkedin.com/in/igorarmelin"
              />
              <IconLink icon={FaGithub} link="https://github.com/igorarmelin" />
              <IconLink
                icon={PiCertificateFill}
                link="https://www.linkedin.com/in/igorarmelin/details/certifications/"
              />
              <IconLink
                icon={PiArticleMediumFill}
                link="https://medium.com/@igorarmelin"
              />
              <IconLink icon={FaFilePdf} link="/igor_armelin_curriculo.pdf" />
            </div>
          </div>

          <div className="flex flex-col items-end">
            <h1 className="text-berkeleyBlue text-9xl font-extrabold max-sm:text-7xl max-md:text-8xl max-xs:text-6xl">
              Developer
            </h1>
            <h3 className="max-w-lg font-semibold max-sm:text-sm max-sm:max-w-sm max-xs:max-w-60 max-xs:text-xss text-right">
              Desde 2020 desenvolvendo soluções robustas e intuitivas, focadas
              na experiência do usuário e transformando ideias em produtos
              funcionais.
            </h3>
          </div>
        </div>

        <div className="mt-24">
          <SkillsBadges />
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <TopWaveSVG />
      </div>

      <div className="bg-berkeleyBlue flex flex-col justify-center items-center py-12">
        <Projects />
      </div>

      <div className="w-full overflow-hidden">
        <BottomWaveSVG />
      </div>

      <div className="bg-zinc-800 text-honeydew flex flex-col justify-center items-center p-24 -mt-8 space-y-6 max-xs:p-12">
        <div className="text-xs">© 2024 - Igor Pegoraro Armelin</div>
      </div>
    </div>
  )
}

export default Main
