import styled, { css } from '@xstyled/styled-components'

interface CollectionsMainProps {
  menuDisabled?: boolean | null
}
export const CollectionsMain = styled.div<CollectionsMainProps>`
  ${({ menuDisabled }) =>
    menuDisabled
      ? css`
          padding: 6;
          max-width: 1100px;
          margin: 0 auto;
        `
      : css`
          display: grid;
          grid-template-columns: 250px 1fr;
          grid-column-gap: 8;
          padding: 6;
          position: relative;
        `}
`
export const CollectionsMenu = styled.div`
  ${({ theme }) => css`
    padding-top: 6;
    position: sticky;
    top: ${theme.navHeight};
  `}
`

export const Hr = styled.hr`
  border: 0;
  border-bottom: 1px solid currentColor;
  color: body.8;
  box-shadow: none;
  margin: 0;
`

export const HeaderWrapper = styled.div`
  padding: 6;
`
