import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

import { LANDING_PAGE_ROUTES } from '../../resources/routes'
import { Logo } from '../logo'

export function NavBar(props) {
  const { isOpen, onNavigate, onMenuClick } = props
  const router = useRouter()

  return (
    <div className="flex flex-col items-center bg-primary px-4 inset-x-0 top-0 fixed z-50">
      <div className="h-16 max-w-4xl w-full flex items-center justify-between space-x-8">
        <Logo />
        <div className="hidden md:flex items-center space-x-4 text-white">
          {LANDING_PAGE_ROUTES.map(route => (
            <button
              key={route.path}
              className={`rounded-full py-0.5 px-3 hover:cursor-pointer hover:bg-white hover:bg-opacity-20 ${
                route.path === router.asPath ? 'border-2' : 'border-0'
              }`}
              onClick={() => {
                onNavigate(route.path)
              }}
            >
              {route.label}
            </button>
          ))}
        </div>
        <button className="btn-icon block md:hidden" onClick={onMenuClick}>
          {isOpen ? (
            <XIcon className="w-8 h-8 text-white" />
          ) : (
            <MenuIcon className="w-8 h-8 text-white" />
          )}
        </button>
      </div>
    </div>
  )
}
