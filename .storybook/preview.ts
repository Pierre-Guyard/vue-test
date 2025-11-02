import type { Preview } from '@storybook/vue3'
import '../src/styles/variables.less'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    locale: 'fr',
  },
  globalTypes: {
    locale: {
      description: 'Langue de l\'interface',
      defaultValue: 'fr',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'fr', title: 'Français' },
          { value: 'en', title: 'English' },
        ],
      },
    },
  },
}

export default preview

