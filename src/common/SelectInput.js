import { ErrorMessage } from "formik";

const SelectInput = ({ selectOptions, name, formik }) => {
  return (
    <div className="formController">
      <select
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        {selectOptions.map((item) => (
          <option value={item.value} key={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <ErrorMessage name={name} component="span" className="error" />
      )}
    </div>
  );
};

export default SelectInput;
