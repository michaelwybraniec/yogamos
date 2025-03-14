export default defineAppConfig({
  ui: {
    colors: {
      primary: 'red',
      neutral: 'stone'
    },
    button: {
      slots: {
        // base: 'font-bold'
      }
    },
    card: {
      slots: {
        root: 'rounded-[calc(var(--ui-radius)*2)]',
        header: 'p-40 sm:px-20',
        body: 'p-40 sm:p-20 bg-neutral-900',
        footer: 'p-40 sm:px-20'
      }
    }
  }
})
