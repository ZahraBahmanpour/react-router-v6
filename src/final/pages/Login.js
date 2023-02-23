import { useState } from "react";
import { Form, redirect } from "react-router-dom";

export const loginAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    name: data.get("name"),
    email: data.get("email"),
  };

  console.log(submission);

  // send your post request

  if (submission.name.length < 10) {
    return { error: "Message must be over 10 chars long." };
  }

  // redirect the user
  return redirect("/dashboard");
};

const Login = () => {
  return (
    <section className="section">
      <Form method="post" action="/login" className="form">
        <h5>login</h5>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>
        <button type="submit" className="btn btn-block">
          login
        </button>
      </Form>
    </section>
  );
};
export default Login;
