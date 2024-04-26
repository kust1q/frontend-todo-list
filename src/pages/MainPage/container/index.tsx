import React, {FC, useEffect} from "react";
import Presentation from "../presentation";
import LoginForm from "../../../components/LoginForm";
import {useSelector} from "react-redux";
import {RootState} from "../../../store";
import {useActions} from "../../../utils";
import {MainPage} from "../index"

const Container: FC = () => {
    const {addNewItem, removeItem, loadItems} = useActions(MainPage.Actions)

    const items = useSelector((state: RootState) => state.items)
    const needAuth = useSelector((state: RootState) => state.needAuth)
    const loading = useSelector((state: RootState) => state.loading)
    useEffect(() => {
        loadItems()
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            {needAuth && <LoginForm/>}
            <Presentation
                loading={loading}
                items={items}
                createNewItem={addNewItem}
                removeItem={removeItem}/>
        </div>
    )
}

export default Container;
