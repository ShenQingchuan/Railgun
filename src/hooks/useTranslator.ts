import { useTranslation } from 'react-i18next'

export function useTranslator() {
  const { t } = useTranslation()
  return t
}
