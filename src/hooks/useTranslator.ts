import { useTranslation as useTranslationImpl } from 'react-i18next'

export function useTranslation() {
  const { t } = useTranslationImpl()
  return t
}
