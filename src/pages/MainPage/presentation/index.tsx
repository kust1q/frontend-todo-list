import React, {FC} from "react";
import {Item} from "../types";
import NewItem from "../../../components/NewItem";
import TodoItem from "../../../components/TodoItem";
import Loader from "../../../components/Loader";

type ItemList = {
    loading: boolean
    items: Item[],
    createNewItem: Function,
    removeItem: Function
}

const Presentation: FC<ItemList> = ({loading, items, createNewItem, removeItem}) => {
    return (
        <div className="container-fluid vh-100">
            <NewItem createNewItem={createNewItem}/>
            {
                loading ?
                    <Loader/> :
                    items.map(item =>
                        <TodoItem
                            key={item.uid}
                            item={item}
                            removeItem={removeItem}/>)
            }
        </div>
    );
}

export default Presentation;