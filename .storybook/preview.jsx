import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import  store from '../src/redux/Store';


/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <Provider store={store}>
          <Story />
        </Provider>
      );
    },
  ]
};

export default preview;
