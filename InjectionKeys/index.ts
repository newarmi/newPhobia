interface IProvideWrapper {
  isLayoutWrapper: Ref<boolean>,

  useLayoutWrapper(): void,

  useLayout(): void
}

export const keyWrapper = Symbol() as InjectionKey<IProvideWrapper>
