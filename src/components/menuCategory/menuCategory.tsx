import { IMenuItem } from "../../models/IMenuItem";
import { MenuItem } from "../menuItem/MenuItem";

interface MenuCategoryProps {
    title: string;
    items: IMenuItem[];
}

export const MenuCategory = ({ title, items }: MenuCategoryProps )  => {
    return (
        <>
        <h2>{title}</h2>
        {items.map(item => {
            <MenuItem key={item.Id} item={item} />
        })}
        </>
    )
}