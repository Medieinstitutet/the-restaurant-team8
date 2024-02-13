import { IMenuItem } from "../../models/IMenuItem"
import "../menuItem/MenuItem.scss"

interface MenuItemProps {
    item: IMenuItem;
}

export const MenuItem = ({ item }:MenuItemProps ) => {
    
    return (
        <div className="menu-item">
            <h3 className="menu-item-name">{item.Name}</h3>
            <p className="menu-item-description">{item.Description}</p>
            <p className="menu-item-price">Pris: {item.Price} {item.Currency}</p>
        </div>
    )
}