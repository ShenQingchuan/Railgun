import { Provider } from 'jotai'
import type { PropsWithChildren } from 'react'
import { jotaiStore } from '../lib/store'

export const JotaiStoreProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={jotaiStore}>
    {children}
  </Provider>
}
