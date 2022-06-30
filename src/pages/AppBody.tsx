import React from 'react'
import styled from 'styled-components'
import { Card } from '@saltswap/uikit'

export const BodyWrapper = styled(Card)`
  position: relative;
  max-width: 700px;
  width: 100%;
  z-index: 5;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}