import { IMenuItem } from "./IMenuItem";

export interface IMenuCategory {
    items: IMenuItem[];
    images?: string[];
}