export type Item = {
    uid: string
    text: string
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
