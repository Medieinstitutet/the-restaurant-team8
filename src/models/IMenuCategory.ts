import { IMenuImage } from "./IMenuImage";
import { IMenuItem } from "./IMenuItem";

export interface IMenuCategory {
    title: string;
    items: IMenuItem[];
    images?: IMenuImage[];
}