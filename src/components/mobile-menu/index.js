import { useCallback, useEffect, useRef } from 'react'

import { LANDING_PAGE_ROUTES } from '../../resources/routes'

export function MobileMenu(props) {
  const { isOpen, onNavigate, handleClickOutside } = props
  const menuWidth = 'w-40'
  const menuStyle = isOpen ? 'left-0' : '-translate-x-40'

  const ref = useRef(null)

  const onClickOutside = useCallback(
    event => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClickOutside()
      }
    },
    [handleClickOutside],
  )

  useEffect(() => {
    isOpen && document.addEventListener('click', onClickOutside, true)
    return () => {
      document.removeEventListener('click', onClickOutside, true)
    }
  }, [isOpen, onClickOutside])

  return (
    <div
      className={`bg-primary border-r border-primary-light text-white top-0 z-50 inset-y-0 transform transition duration-300 ease-in-out h-screen fixed ${menuWidth} ${menuStyle}`}
      ref={ref}
    >
      <p className="text-sm tracking-wider font-bold h-16 border-b border-b-primary-light flex justify-center items-center">
        MENU
      </p>
      <div className="divide-y divide-primary-light border-b border-b-primary-light">
        {LANDING_PAGE_ROUTES.map(route => (
          <button
            className="p-4 active:bg-primary-light w-full"
            key={`mobile-menu-${route.path}`}
            onClick={() => {
              onNavigate(route.path)
            }}
          >
            {route.label}
          </button>
        ))}
      </div>
    </div>
  )
}
