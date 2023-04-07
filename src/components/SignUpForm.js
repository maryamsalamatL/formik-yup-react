import { useState } from "react";

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const changeHandler = ({ target }) => {
    setUserData({ ...userData, [target.name]: target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="formController">
        <label>Name</label>
        <input
          onChange={changeHandler}
          name="name"
          value={userData.name}
          type="text"
        />
      </div>
      <div className="formController">
        <label>Email</label>
        <input
          onChange={changeHandler}
          name="email"
          value={userData.email}
          type="text"
        />
      </div>
      <div className="formController">
        <label>Password</label>
        <input
          onChange={changeHandler}
          name="password"
          value={userData.password}
          type="text"
        />
      </div>
      <button className="submitBtn" type="submit">
        submit
      </button>
    </form>
  );
};

export default SignUpForm;
