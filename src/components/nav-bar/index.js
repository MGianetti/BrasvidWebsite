import BrasvidLogo from '../../assets/logo.svg'
import { DropdownMenu } from './dropdown-menu/index'

export function NavBar() {
  return (
    <div className="flex flex-col">
      <div className="w-full max-w-4xl mx-auto flex items-center space-x-8 py-2 justify-between sm:justify-center">
        <BrasvidLogo className="w-8 h-8 ml-8 sm:ml-0" />
        <div className="hidden sm:flex items-center space-x-8 text-white tracking-wider">
          <span className="text-primary-dimmed">Início</span>
          <span>Serviços</span>
          <span>Contato</span>
          <span>Missão</span>
          <span>Sobre a empresa</span>
        </div>
        <div className="sm:hidden">
          <DropdownMenu />
        </div>
      </div>
    </div>
  )
}
