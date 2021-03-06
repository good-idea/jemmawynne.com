import styled, { css } from '@xstyled/styled-components'
import { ImageWrapper } from '../Image/styled'

export const GalleryWrapper = styled.div`
  position: relative;
`

interface ZoomImageWrapperProps {
  onMouseMove?: any
}

export const ZoomImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 0;
  transition: 0.2s;
`

export const MainImageWrapper = styled.div`
  margin-bottom: 2;
  position: relative;

  &:hover ${ZoomImageWrapper} {
    opacity: 1;
  }
`

export const Thumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2;
`

interface ZoomInnerProps {
  zoomAmount: number
}

export const ZoomInner = styled.div`
  ${({ zoomAmount }: ZoomInnerProps) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% * ${zoomAmount});
    height: calc(100% * ${zoomAmount});

    & ${ImageWrapper} {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `}
`

export const ThumbnailButton = styled.button`
  border: 1px solid;
  border-color: body.5;
`
