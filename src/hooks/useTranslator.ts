import { useTranslation } from 'react-i18next'

export function useTraslator() {
  const { t } = useTranslation()
  return t
}
