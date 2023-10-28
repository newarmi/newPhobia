export type BackgroundCirclesItemStyle = {
  transform: string,
  right?: string,
  left?: string,
  top?: string,
  bottom?: string,
}
export type BackgroundCirclesItemType = "purple" | "blue"

export type BackgroundCirclesItemResponsive = 'desktop' | 'tablet' | 'mobile'

export type BackgroundCirclesItem<T extends BackgroundCirclesItemResponsive> = {
  type: BackgroundCirclesItemType,
  style: {
    [P in T]?: BackgroundCirclesItemStyle
  }
}

export type BackgroundCirclesType = BackgroundCirclesItem<BackgroundCirclesItemResponsive>[]

