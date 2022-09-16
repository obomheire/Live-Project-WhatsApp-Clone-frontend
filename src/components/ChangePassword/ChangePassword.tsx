import { FaWhatsapp, FaLock, } from "react-icons/fa";
import "./ChangePassword.css";
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changePassword } from '../../redux/actions/changePassword'

const ChangePassword = () => {
  const dispatch = useDispatch()

  // const [token, setToken] = useState(JSON.parse(localStorage.getItem('key') || '{}'));
  // console.log(token)
  const [formData, setFormData] = useState({oldpassword: '', password: '', passConfirm: ''})
  // React.FormEvent<HTMLInputElement>

  const handleSubmit = (e: any) =>{
    e.preventDefault()
    // console.log(formData)
    dispatch(changePassword(formData))
  
  }

  return (
    <div className="container">
      <form className="form__card" onSubmit={handleSubmit}>
        <div className="form__title">
          <span className="whatsapp__icon">
            <FaWhatsapp />
          </span>
          <p>WhatsApp Clone Team D</p>
        </div>
        <p className="form__header">Change Password</p>
        <div>
          <div className="input__div-2">
            <span className="lock">
              <FaLock />
            </span>
            <input type="password" placeholder="Old Password" value={formData.oldpassword} onChange={(e) => setFormData({...formData,oldpassword: e.target.value})}  />
          </div>
          <div className="input__div-2">
            <span className="lock">
              <FaLock />
            </span>
            <input type="password" placeholder="New Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}  />
          </div>
          <div className="input__div-2">
            <span className="lock">
              <FaLock />
            </span>
            <input type="password" placeholder="Repeat Password" value={formData.passConfirm} onChange={(e) => setFormData({...formData, passConfirm: e.target.value})}  />
          </div>
          <div className="submitBtn">
            <button className="btn">
              <span className="button__text">Submit</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;

