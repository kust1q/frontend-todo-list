import React, {FC} from "react";
import {Item} from "../../pages/MainPage/types";
import "./style.css";

type Props = {
    item: Item,
    removeItem: Function
}

const TodoItem: FC<Props> = ({item: {text, uid}, removeItem}) => {
    return (
        <div className="row justify-content-center ">
            <div className="col-lg-4 item-row">
                <div className="d-flex justify-content-between">
                    <span className="mx-3">{text}</span>
                    <span>&nbsp;</span>
                    <button type="button" className="btn btn-outline-danger" onClick={() => removeItem(uid)}>
                        <i className="bi bi-x-circle"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;