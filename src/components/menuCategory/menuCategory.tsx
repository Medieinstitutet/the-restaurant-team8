import { IMenuItem } from "../../models/IMenuItem";
import { MenuItem } from "../menuItem/MenuItem";
import "../menuCategory/menuCategory.scss";
interface MenuCategoryProps {
    title: string;
    items: IMenuItem[];
}

export const MenuCategory = ({ title, items }: MenuCategoryProps )  => {
    
    return (
        <>
        <div className="menu-category">
        <h2 className="menu-category-title">{title}</h2>
        {items.map((item) => (
            <MenuItem key={item.Id} item={item} />
        ))}
        </div>
        </>
    )
}