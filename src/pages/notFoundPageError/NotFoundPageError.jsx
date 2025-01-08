import NotFound from "../../components/organisms/notFound/NotFound";
import { useSelector } from "react-redux";

const NotFoundPageError = () => {
  const notFoundPageError = useSelector(
    (state) => state.NotFoundPageReducer.notFoundPageErrorProps
  );

  return (
    <div>
      <NotFound {...notFoundPageError}></NotFound>
    </div>
  );
};

export default NotFoundPageError;
