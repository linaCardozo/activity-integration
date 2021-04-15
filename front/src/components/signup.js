import useSignUpForm from "./customHooks";
import "./style.css"
import * as Joi from "joi";

const schema = Joi.object({
  name: Joi.string(),
  company: Joi.string(),
  salary: Joi.string(),
  city: Joi.string()
});

function Signup() {
  const { handleSubmit, handleChange } = useSignUpForm(schema);
  return (
      <div>
        <h1>Add a new offer</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
            />
          </div>
  
          <div>
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              onChange={handleChange}
            />
          </div>
  
          <div>
            <label htmlFor="salary">Salary:</label>
            <input
              type="text"
              id="salary"
              name="salary"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={handleChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
}
  
export default Signup;