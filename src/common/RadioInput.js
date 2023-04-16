import { Field, ErrorMessage } from "formik";
import { Fragment } from "react";

const RadioInput = ({ name, formik, radioOptions }) => {
  return (
    <div>
      {radioOptions.map((item) => (
        <Fragment key={item.value}>
          <input
            type="radio"
            name={name}
            id={item.value}
            value={item.value}
            onChange={formik.handleChange}
            // checked={formik.values[name] === item.value  }
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

export default RadioInput;
