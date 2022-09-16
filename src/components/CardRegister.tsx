import React from "react";
import { FaWhatsapp, FaEnvelope, FaLock, } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Card.css";
import GenerateLink, { TemplateType } from "./LoginRegister/GenerateLink";

const CardRegister = () => {
  return (
    <div className="container">
      <form className="form__card" action="">
        <div>
          <div className="form__title">
            <span className="whatsapp__icon">
              <FaWhatsapp />
            </span>
            <p>WhatsApp Clone Team D</p>
          </div>
          <p className="form__header">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            provident
          </p>
          <p className="form__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suntconsectetur adipisicing elit. Sunt provident
          </p>
        </div>
        <div>
          <div className="input__div-1">
            <span className="envelope">
              <FaEnvelope />
            </span>
            <input type="text" placeholder="Email" />
          </div>
          <div className="input__div-2">
            <span className="lock">
              <FaLock />
            </span>
            <input type="text" placeholder="Password" />
          </div>
          <div>
            <button>
              <span className="button__text">Register</span>
            </button>
          </div>
        </div>
        <div className="social__links">
          <p>or continue with social profile</p>
          <div className="social__media">
            <GenerateLink authMethod={TemplateType.GOOGLE} />
            <GenerateLink authMethod={TemplateType.FACEBOOK} />
          </div>
          <p>
            dont have an account yet? <Link to="/login">Login</Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default CardRegister;
