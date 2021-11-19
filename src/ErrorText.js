import {FormText} from "react-bootstrap"

const ErrorText = ({ children, error }) => (
  <FormText as="div" className="text-danger">
    {children ? children : error}
  </FormText>
);

export default ErrorText;