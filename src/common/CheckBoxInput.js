import { Field, ErrorMessage } from "formik";
import { Fragment } from "react";

const CheckBox = ({ name, formik, checkBoxOptions }) => {
  return (
    <div>
      {checkBoxOptions.map((item) => (
        <Fragment key={item.value}>
          <Field
            name={name}
            type="checkbox"
            id={item.value}
            value={item.value}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </Fragment>
      ))}
      {formik.errors[name] && formik.touched[name] && (
        <ErrorMessage name={name} component="span" className="error" />
      )}
    </div>
  );
};

export default CheckBox;
