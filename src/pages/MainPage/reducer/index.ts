import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AnyAction} from "redux";
import uuid from "uuid-random";
import filter from "lodash/filter";
import {ErrorResponseData, Item, ItemState} from "../types";
import {Api} from "../../../Api";

const hasPrefix = (action: AnyAction, prefix: string) => action.type.startsWith(prefix);

const isPending = (action: AnyAction) => action.type.endsWith("/pending");
const isRejected = (action: AnyAction) => action.type.endsWith("/rejected");
const isFulfilled = (action: AnyAction) => action.type.endsWith("/fulfilled");

const isCompletedAction = (prefix: string) => (action: AnyAction) => hasPrefix(action, prefix) && (isRejected(action) || isFulfilled(action));
const isRejectedAction = (prefix: string) => (action: AnyAction) => hasPrefix(action, prefix) && isRejected(action);

const initialState: ItemState = {
  items: [],
  needAuth: false,
  loading: false
};

const loadItems = createAsyncThunk(
    "items/all",
    async (param, thunkAPI) => {
      return await Api.loadItems()
      .then(response => response.data)
      .catch(error => thunkAPI.rejectWithValue({status: error.response.status, message: error.message}))
    }
);

const addNewItem = createAsyncThunk(
    "items/add-new",
    async (text: string, thunkAPI) => {
      const item = {text: text, uid: uuid()}
      return await Api.addNewItem(item)
      .then(() => item)
      .catch(error => thunkAPI.rejectWithValue({status: error.response.status, message: error.message}))
    }
);

const removeItem = createAsyncThunk(
    "items/remove",
    async (uid: string, thunkAPI) => {
      return await Api.removeItem(uid)
      .then(() => uid)
      .catch(error => thunkAPI.rejectWithValue({status: error.response.status, message: error.message}))
    }
);

export const slice = createSlice({
  name: `ItemReducer`,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(loadItems.fulfilled, (state, action) => {
      state.items = action.payload;
    })
    .addCase(addNewItem.fulfilled, (state, action: PayloadAction<Item>) => {
      state.items = [...state.items, action.payload]
    })
    .addCase(removeItem.fulfilled, (state, action) => {
      state.items = filter(state.items, (item) => item.uid !== action.payload)
    })
    .addMatcher(isPending, (state) => {
      state.loading = true
    })
    .addMatcher(isFulfilled, (state) => {
      state.needAuth = false
    })
    .addMatcher(isCompletedAction("items"), (state) => {
      state.loading = false
    })
    .addMatcher(isRejectedAction("items"), (state, action: PayloadAction<ErrorResponseData>) => {
      const {status, message} = action.payload;
      if (status === 401) {
        state.needAuth = true
      }
      console.error("Error response [", message, "]")
    })
  },
});

export const asyncActions = {
  loadItems,
  addNewItem,
  removeItem
};

export default slice.reducer;
