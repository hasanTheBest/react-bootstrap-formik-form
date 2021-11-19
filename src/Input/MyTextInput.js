import {useField} from "formik";
import {FormGroup, FormLabel, FormControl} from "react-bootstrap"
import ErrorText from "../ErrorText"

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);


  return (
    <FormGroup className="mb-3">
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <FormControl {...field} {...props} />
      {meta.touched && meta.error && <ErrorText error={meta.error} />}
    </FormGroup>
  );
};

export default MyTextInput;