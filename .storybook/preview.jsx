import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "../src/redux/Store";
import { BrowserRouter as Router } from "react-router-dom";

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
          <Router>
            <Story />
          </Router>
        </Provider>
      );
    },
  ],
};

export default preview;
