import { useState } from "react";

const useSignUpForm = (schema) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState("");

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.getAttribute('name')]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { error } = validate();
    if (!error) {
      console.log("Form submitted!", inputs);
      fetch("/offers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          this.props.action();
        });
    } else {
      console.log("Errors", error);
      setErrors(error);
    }

    event.preventDefault();
  };

  const validate = () => {
    return schema.validate(inputs);
  };

  return { handleSubmit, handleChange, errors };
};

export default useSignUpForm;
