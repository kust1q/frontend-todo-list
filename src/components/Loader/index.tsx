import React, {FC} from "react";

const Loader: FC = () => {
    return (
        <div className="row justify-content-center align-items-center">
            <div className="spinner-border text-info" role="status">
                <span className="sr-only"/>
            </div>
        </div>
    );
}

export default Loader;