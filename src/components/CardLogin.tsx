import React from "react"; import { FaWhatsapp, FaEnvelope, FaLock, } from "react-icons/fa";
import { Link } from "react-router-dom";
import GenerateLink, { TemplateType } from "./LoginRegister/GenerateLink";
import "./Card.css";

const CardLogin = () => {
  return (
    <div className="container">
      <form className="form__card" action="">
        <div className="form__title">
          <span className="whatsapp__icon">
            <FaWhatsapp />
          </span>
          <p>WhatsApp Clone Team D</p>
        </div>
        <p className="form__header">Login</p>
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
              <span className="button__text">Login</span>
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
            dont have an account yet? <Link to="/register">Register</Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default CardLogin;
