import { LANDING_PAGE_ROUTES } from '../../resources/routes'
import { COPYRIGHT, PRIVACY_LINK_LABEL } from '../../resources/strings'
import { Logo } from '../logo'

export function Footer(props) {
  const { onNavigate } = props

  return (
    <div className="flex flex-col items-center bg-primary text-white px-4">
      <div className="max-w-4xl w-full py-8 flex flex-col divide-y">
        <div className="pb-4 w-full flex flex-col space-y-2 md:space-y-0 md:flex-row items-center justify-between space-x-8">
          <Logo />
          <div className="flex items-center space-x-4 text-white text-sm">
            {LANDING_PAGE_ROUTES.map(route => (
              <button
                key={`footer-${route.path}`}
                onClick={() => {
                  onNavigate(route.path)
                }}
                className="hover:border-b transition duration-150"
              >
                {route.label}
              </button>
            ))}
          </div>
        </div>
        <div className="pt-4 w-full flex flex-col space-y-2 md:space-y-0 md:flex-row items-center justify-between">
          <span className="text-white text-sm">{PRIVACY_LINK_LABEL}</span>
          <span className="text-sm text-right">{COPYRIGHT}</span>
        </div>
      </div>
    </div>
  )
}
