import React, {FC} from "react";
import {Item} from "../../pages/MainPage/types";
import "./style.css";

type Props = {
    item: Item,
    removeItem: Function
}

const TodoItem: FC<Props> = ({item: {text, uid}, removeItem}) => {
    return (
        <div className="row justify-content-center" data-id={`todo-item-row-${uid}`}>
            <div className="col-lg-4 item-row">
                <div className="d-flex justify-content-between">
                    <span className="mx-3" data-id={`todo-item-text-span-${uid}`}>{text}</span>
                    <span>&nbsp;</span>
                    <button type="button"
                            data-id={`todo-item-remove-button-${uid}`}
                            className="btn btn-outline-danger"
                            onClick={() => removeItem(uid)}>
                        <i className="bi bi-x-circle"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;