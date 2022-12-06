export type Item = {
    uid: string
    text: string
};

export type FieldErrorType = {
    field: string;
    error: string
};

export type ErrorResponse = {
    rejectValue: { errors: Array<string>; fieldsErrors?: Array<FieldErrorType> };
};

export type ErrorResponseData = {
    status: number,
    message: string
};

export interface ItemState {
    items: Item[],
    needAuth: boolean,
    loading: boolean
}