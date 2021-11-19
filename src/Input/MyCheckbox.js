import {useField} from "formik";
import {FormGroup, FormCheck} from "react-bootstrap"
import ErrorText from "../ErrorText"


const MyCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <FormGroup className="mb-3">
      <FormCheck type="checkbox" label={label} {...field} {...props} />
      {meta.touched && meta.error && <ErrorText error={meta.error} />}
    </FormGroup>
  );
};

export default MyCheckbox;