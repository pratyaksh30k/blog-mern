import { Alert, Spinner } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signinStart,signinFailure,signinSuccess } from "../../src/redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading,error:errorMessage} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signinFailure("Please fill out all fields"));
    }
    try {
      dispatch(signinStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signinFailure(data.message));
      }
      if (res.ok) {
        dispatch(signinSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(signinFailure(error.message));
      console.log(error);
    }
  };
  return (
    <div style={{ marginTop: "40px", minHeight: "100vh" }}>
      <div
        style={{
          padding: "40px",
          gap: "40px",
          marginTop: "180px",
          marginBottom: "235px",
          width: "786px",
          "@media (maxWidth: 768px)": {
            padding: "20px",
            gap: "20px",
            marginTop: "90px",
            marginBottom: "117.5px",
            width: "100",
            height: "100%",
          },
          // "@media (max-width: 480px)": {
          //   padding: "10px",
          //   gap: "10px",
          //   marginTop: "45px",
          //   marginBottom: "58.75px",
          //   width: "100%",
          // },
        }}
        className="flex w-full md:max-w-3xl mx-auto flex-col md:flex-row md:items-center border-gray-300 border border-solid rounded-lg shadow-lg"
      >
        <div className="flex-1">
          <Link
            to="/"
            style={{
              fontSize: "36px",
              lineHeight: "40px",
              "@media (maxWidth: 768px)": {
                fontSize: "24px",
                lineHeight: "32px",
              },
            }}
            className="items-center whitespace-nowrap font-semibold text-gray-700 hover:text-black dark:text-white flex gap-1 "
          >
            <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#EF233D] to-[#F48F2A] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l">
              Pratyaksh's
            </span>
            Blog
          </Link>
          <p style={{ marginTop: "20px" }} className="text-lg md:text-sm">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-1 text-lg md:text-base font-semibold"
              >
                Your email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={onChange}
                className="text-lg font-semibold placeholder:font-semibold bg-gray-100 border border-solid border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="mb-1 text-lg md:text-base font-semibold"
              >
                Your password
              </label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={onChange}
                className="text-lg font-semibold placeholder:font-semibold bg-gray-100 border border-solid border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="text-center text-xl md:text-base font-semibold cursor-pointer px-4 py-2 bg-gradient-to-r from-[#EF233D] to-[#F48F2A] text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span style={{ paddingLeft: "10px" }}>Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </button>
            {/* <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button> */}
            {/* <OAuth /> */}
          </form>
          <div style={{ marginTop: "12px" }} className="flex gap-2 md:text-sm">
            <span>Do not have an account?</span>
            <Link
              to="/signup"
              className="text-blue-700 hover:underline font-semibold"
            >
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert style={{ marginTop: "12px" }} color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
