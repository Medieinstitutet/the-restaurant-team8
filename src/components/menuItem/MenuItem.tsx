import { IMenuItem } from "../../models/IMenuItem"

interface MenuItemProps {
    item: IMenuItem;
}

export const MenuItem = ({ item }:MenuItemProps ) => {
    return (
        <div>
            <h3>{item.Name}</h3>
            <p>{item.Description}</p>
            <p>Price: {item.Price} {item.Currency}</p>
        </div>
    )
}