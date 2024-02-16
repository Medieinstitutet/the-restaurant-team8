import { IMenuImage } from "./IMenuImage";
import { IMenuItem } from "./IMenuItem";

export interface IMenuCategory {
    items: IMenuItem[];
    images?: IMenuImage[];
}