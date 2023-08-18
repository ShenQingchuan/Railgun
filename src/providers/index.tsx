'use client'

import type { FC, PropsWithChildren } from 'react'
import React from 'react'
import { useRefValue } from '../hooks/useRefValue'
import { JotaiStoreProvider } from './jotai'
import { DarkModeProvider } from './dark-mode'

const ProviderComposer: FC<{
  contexts: JSX.Element[]
} & PropsWithChildren> = ({ contexts, children }) => {
  return contexts.reduceRight((kids: any, parent: any) => {
    return React.cloneElement(parent, { children: kids })
  }, children)
}

export function Providers(props: PropsWithChildren) {
  return <ProviderComposer contexts={useRefValue(() => [<JotaiStoreProvider key={'JotaiStoreProvider'} />, <DarkModeProvider key={'DarkModeProvider'} />])}>
    {props.children}
  </ProviderComposer>
}
