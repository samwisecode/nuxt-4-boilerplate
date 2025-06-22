export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: 'stone',
      neutral: 'slate',
    },
    button: {
      defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'md',
      },
    },
    toast: {
      defaultVariants: {
        color: 'primary',
      },
    },
  },
});
