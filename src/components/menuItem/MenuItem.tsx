import { IMenuItem } from "../../models/IMenuItem"

import "../menuItem/MenuItem.scss"

interface IMenuItemProps {
    item: IMenuItem;
}

export const MenuItem = ({ item }:IMenuItemProps ) => {
    
    return (
        <div className="menu-item">
            <h3 className="menu-item-name">{item.Id}. {item.Name} {item.Hot && <span className="hot-item">{item.Hot}</span>}</h3>
            <p className="menu-item-description">{item.Description}</p>
            <p className="menu-item-price">Pris: {item.Price} {item.Currency}</p>
        </div>
    )
}