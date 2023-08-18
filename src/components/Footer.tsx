import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDarkMode } from '../hooks/useDarkMode'
import viteLogo from '/vite.svg'
import { locales } from '../i18n/locales'

export function Footer() {
  const { toggle, isDarkMode } = useDarkMode()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.dataset.theme = 'business'
      document.documentElement.classList.toggle('dark', true)
    }
    else {
      document.documentElement.dataset.theme = 'bumblebee'
      document.documentElement.classList.toggle('dark', false)
    }
  }, [isDarkMode])

  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-center items-center'>
        <span className='text-sm mx-1 text-zinc-600 dark:text-slate-100'>
          {t('powered-by')}
        </span>
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className="
              logo
              h-6 mx-2
              will-change-filter
              transition-[filter]
              duration-300
              hover:drop-shadow-[0_0_1em_#646cffaa]
            "
            alt="Vite logo"
          />
        </a>
        <span className='ml-1  mr-2'> + </span>
        <a
          className='h-6'
          href="https://react.dev" target="_blank"
        >
          <div
            className="
              i-logos-react
              logo react mx-2 h-full
              scale-[1.5]
              will-change-filter
              trasition-[filter]
              duration-300
              hover:drop-shadow-[0_0_1em_#61dafb]
            "
          />
        </a>
      </div>
      <div className='text-xs select-none mt-4 text-zinc-800/50 dark:text-zinc-300/60'>
        <span>{t('click-go-docs-site')}</span>
      </div>
      <div className='flex justify-center items-center mt-4'>
        <label className='swap btn btn-ghost btn-sm rounded-md mx-2'>
          <input type="checkbox" checked={isDarkMode} onChange={toggle} />
          <div className='swap-on flex justify-center items-center'>
            <div className='i-carbon-moon' />
            <span className='ml-2'>{t('dark-mode')}</span>
          </div>
          <div className='swap-off flex justify-center items-center'>
            <div className='i-carbon-sun' />
            <span className='ml-2'>{t('light-mode')}</span>
          </div>
        </label>
        <select
          className="select select-xs w-full max-w-xs rounded-sm"
          value={i18n.language}
          onChange={e => i18n.changeLanguage(e.target.value)}
        >
          {
            Object.entries(locales).map(([lang, it]) => (
              <option
                key={lang}
                value={lang}
                label={it.nativeName ?? lang}
              />
            ))
          }
        </select>
      </div>
    </div>
  )
}
