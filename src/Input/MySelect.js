import {useField} from "formik";
import {FormGroup, FormLabel, FormSelect} from "react-bootstrap"
import ErrorText from "../ErrorText"

const MySelect = ({ label, children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "select" });

  return (
    <FormGroup className="mb-1">
      <FormLabel> {label}</FormLabel>
      <FormSelect {...field} {...props}>
        {children}
      </FormSelect>
      {meta.touched && meta.error && <ErrorText error={meta.error} />}
    </FormGroup>
  );
};

export default MySelect;