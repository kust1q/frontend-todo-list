import React, {FC} from "react";
import "./style.css"

const LoginForm: FC = () => {
    const handleGoogleAuth = () => {
        const baseURL = process.env.REACT_APP_BACKEND_IP;
        window.location.href = `${baseURL}/oauth2/authorization/google`
    }
    return (
        <div className="modal modal-form" tabIndex={-1}>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-3 text-center">
                        <h2 className="text-info">Авторизоваться с помощью</h2>
                        <button type="button" className="btn btn-info px-5" onClick={handleGoogleAuth}>
                            <i className="bi bi-google"/>&nbsp;Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;