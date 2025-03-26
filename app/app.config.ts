export default defineAppConfig({
  ui: {
    // primary: '#E0B892', // Dark mode
    // primaryLight: '#FFDDC1', // Light mode
    colors: {
      primary: 'red',
      neutral: 'stone'
    },
    blogPosts: {
      base: 'flex flex-col gap-8 lg:gap-y-16',
      variants: {
        orientation: {
          horizontal: 'sm:grid sm:grid-cols-2 lg:grid-cols-6',
          vertical: ''
        }
      }
    },
    button: {
      slots: {
        // base: 'font-bold'
      }
    },
    card: {
      slots: {
        root: 'rounded-[calc(var(--ui-radius)*2)]',
        header: 'p-4 sm:px-6',
        body: 'p-4 sm:p-6',
        footer: 'p-4 sm:px-6'
      },
      variants: {
        variant: {
          solid: {
            root: 'bg-(--ui-bg-inverted) text-(--ui-bg)'
          },
          outline: {
            root: 'bg-(--ui-bg) ring ring-(--ui-border) divide-y divide-(--ui-border)'
          },
          soft: {
            root: 'bg-(--ui-bg)/50 divide-y divide-(--ui-border)'
          },
          subtle: {
            root: 'bg-(--ui-bg-elevated)/50 ring ring-(--ui-border) divide-y divide-(--ui-border)'
          }
        }
      }
    },
    pageCard: {
      slots: {
        root: 'relative flex rounded-[calc(var(--ui-radius)*2)] bg-(--ui-bg) divide-y divide-(--ui-border)',
        spotlight:
          'absolute inset-0 rounded-[inherit] pointer-events-none bg-(--ui-bg)/90',
        container:
          'relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-6',
        wrapper: '',
        header: 'mb-4',
        body: '',
        footer: 'mt-4',
        leading: 'inline-flex items-center justify-center mb-2.5',
        leadingIcon: 'size-5 shrink-0 text-(--ui-primary)',
        title:
          'text-base text-pretty font-semibold text-(--ui-text-highlighted)',
        description: 'text-[15px] text-pretty'
      },
      variant: {
        solid: {
          root: 'bg-(--ui-bg-inverted) text-(--ui-bg)',
          title: 'text-(--ui-bg)',
          description: 'text-(--ui-text-dimmed)'
        },
        outline: {
          root: 'bg-(--ui-bg) ring ring-(--ui-border)',
          description: 'text-(--ui-text-muted)'
        },
        soft: {
          root: 'bg-(--ui-bg-elevated)',
          description: 'text-(--ui-text-toned)'
        },
        subtle: {
          root: 'bg-(--ui-bg-elevated)/50 ring ring-(--ui-border)',
          description: 'text-(--ui-text-toned)'
        },
        ghost: {
          description: 'text-(--ui-text-muted)'
        },
        naked: {
          container: 'p-0 sm:p-0',
          description: 'text-(--ui-text-muted)'
        }
      }
    }
  }
})
