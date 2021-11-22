import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { useRouter } from 'next/router'
import BrasvidLogo from '../../assets/logo.svg'
import { MobileMenu } from './mobile-menu/index'

export function NavBar() {
  const [isOpen, setOpen] = useState(false)
  const router = useRouter()

  function handleMenuClick() {
    setOpen(!isOpen)
  }

  function handleNavigation(route) {
    router.push(route)
    setOpen(false)
  }

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
          {isOpen ? (
            <>
              <MobileMenu
                onNavigate={handleNavigation}
                handleClickOutside={handleMenuClick}
                isOpen={isOpen}
              />
              <XIcon
                className="w-8 h-8 mr-8 text-white"
                onClick={handleMenuClick}
              />
            </>
          ) : (
            <MenuIcon
              className="w-8 h-8 mr-8 text-white"
              onClick={handleMenuClick}
            />
          )}
        </div>
      </div>
    </div>
  )
}
