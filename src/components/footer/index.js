import BrasvidLogo from '../../assets/logo.svg'

export function Footer() {
  return (
    <div className="bg-primary flex flex-col items-center py-12 space-y-2">
      <BrasvidLogo className="w-5 h-5" />
      <span className="text-white font-extrabold text-xl tracking-wider leading-none">
        Brasvid
      </span>
    </div>
  )
}
