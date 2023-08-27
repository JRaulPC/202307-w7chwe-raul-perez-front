import { useAppDispatch } from "../..";
import { hideErrorActionCreator } from "../../store/ui/uiSlice";
import "./ErrorFeedback.css";

const ErrorFeedback = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const closeError = () => {
    dispatch(hideErrorActionCreator());
  };

  return (
    <div className="error">
      <span aria-label="error message">Something went wrong...</span>
      <button className="error-button" onClick={() => closeError()}>
        Close
      </button>
    </div>
  );
};

export default ErrorFeedback;
