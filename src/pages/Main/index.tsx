import { FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa'
import { IconLink } from '../../components'

const Main = () => {
  return (
    <div className="flex flex-col bg-zinc-200 text-zinc-700 font-roboto uppercase">
      <div className="h-screen flex flex-col justify-center items-start max-w-screen-lg mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-indigo-400">
          Igor Pegoraro Armelin
        </h2>
        <div className="flex items-center space-x-4">
          <h1 className="text-9xl font-extrabold font-poppins">Front</h1>
          <div className="flex space-x-6">
            <IconLink
              icon={
                <FaLinkedin
                  size={32}
                  className="text-indigo-500 hover:text-indigo-600"
                />
              }
              link="https://linkedin.com/in/igorarmelin"
            />
            <IconLink
              icon={
                <FaGithub
                  size={32}
                  className="text-indigo-500 hover:text-indigo-600"
                />
              }
              link="https://github.com/igorarmelin"
            />
            <IconLink
              icon={
                <FaFilePdf
                  size={32}
                  className="text-indigo-500 hover:text-indigo-600"
                />
              }
              link="/igor-armelin-curriculo.pdf"
              download="igor-armelin-curriculo.pdf"
            />
          </div>
        </div>
        <h1 className="text-9xl font-extrabold font-poppins">Developer</h1>
        <h3 className="self-end max-w-lg text-zinc-500">
          Desde 2020 desenvolvendo soluções robustas e intuitivas, focadas na
          experiência do usuário e transformando ideias em produtos funcionais.
        </h3>
      </div>
      <div>projetos</div>
      <div>footer</div>
    </div>
  )
}

export default Main
