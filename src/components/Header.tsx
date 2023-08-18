import RailgunLogo from '../assets/railgun.png'
import { useTranslator } from '../hooks/useTranslator'

export function Header() {
  const t = useTranslator()

  return (
    <div
      className="
        flex flex-col
        justify-center items-center
        mb-4
      "
    >
      <img
        className="
          h-48 -rotate-12 -m-6
          will-change-filter
          transition-[filter]
          duration-300
          drop-shadow-[0_0_1em_#ff9c6556]
          hover:drop-shadow-[0_0_1em_#ff9c65cc]
        "
        src={RailgunLogo}
        alt="Railgun Logo"
      />
      <h1 className="text-2xl font-medium">
        Railgun - {t('railgun-header-title')}
      </h1>
    </div>
  )
}
