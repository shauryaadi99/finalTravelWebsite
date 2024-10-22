import React, { useState } from "react";
import style from "./CorporateForm.module.css";

const CorporateForm = () => {
  return (
    <>
      <div className={style.calciContainer} id="form">
        <div className={style.formContainer}>
          <h1>Call Us!</h1>
          <form>
            <div className={style.bind}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="First Name"
                />
                <label htmlFor="floatingInput">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Last Name"
                />
                <label htmlFor="floatingInput">Last Name</label>
              </div>
            </div>
            <div className={`${style.bind} ${style.emailPhone}`}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Mobile Number"
                />
                <label htmlFor="floatingInput">Mobile Number</label>
              </div>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Add any essential information here"
                id="floatingTextarea2"
                style={{ height: "100px", resize: "none" }}
              ></textarea>
              <label htmlFor="floatingTextarea2" className={style.msg}>
                Any other details you'd like to include?
              </label>
            </div>
            <button
              type="submit"
              className={`btn btn-primary ${style.button1}`}
            >
              Submit
            </button>
          </form>
          <p className={style.info}>
            *Our Agent will get in touch with you within some time.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default CorporateForm;
