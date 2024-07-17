import React from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";

export default function SignUp() {
  return (
    <div style={{ marginTop: "40px" }} className="min-h-screen">
      <div
        style={{
          padding: "50px",
          gap: "40px",
          marginTop: "180px",
          marginBottom: "180px",
        }}
        className="flex max-w-5xl mx-auto flex-col md:flex-row md:items-center gap border-gray-300 border border-solid rounded-lg shadow-lg"
      >
        <div className="flex-1">
          <Link
            to="/"
            style={{ fontSize: "36px", lineHeight: "40px" }}
            className="items-center whitespace-nowrap text-4x font-semibold text-gray-700 hover:text-black dark:text-white flex gap-1 "
          >
            <span className="px-3 py-1 rounded-lg bg-gradient-to-r from-[#EF233D] to-[#F48F2A] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l">
              Pratyaksh's
            </span>
            Blog
          </Link>
          <p style={{ marginTop: "20px" }} className="text-base">
            This is a demo project. You can sign up with your email and password
            or with Google.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" className="text-base font-semibold" />
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                className="font-semibold placeholder:font-semibold"
              />
            </div>
            <div>
              <Label value="Your email" className="text-base font-semibold" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                className="font-semibold placeholder:font-semibold"
              />
            </div>
            <div>
              <Label value="Your password" className="text-base font-semibold" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                className="font-semibold placeholder:font-semibold"
              />
            </div>
            <Link
              to="/signin"
              className="text-center font-semibold cursor-pointer px-4 py-2 bg-gradient-to-r from-[#EF233D] to-[#F48F2A] text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l"
            >
              Sign Up
            </Link>
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
          <div style={{ marginTop: "12px" }} className="flex gap-2 text-sm">
            <span>Already have an account?</span>
            <Link
              to="/sign-in"
              className="text-blue-700 hover:underline font-semibold"
            >
              Sign In
            </Link>
          </div>
          {/* {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )} */}
        </div>
      </div>
    </div>
  );
}
