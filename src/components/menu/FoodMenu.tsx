import { MenuCategory } from "../menuCategory/MenuCategory"
import menuData from '../menu/menu.json';

const categoryNames: { [key: string]: string } = {
    Category1: "Förrätter",
    Category2: "Tandoori & Sizlar",
    Category3: "Vegetariska rätter",
    Category4: "Barnmeny",
  };

export const FoodMenu = () => {
    // console.log(menuData);
    return (
        <>
          {Object.entries(menuData).map(([CategoryName, items], index) => (
        <MenuCategory
          key={index}
          title={categoryNames[CategoryName]}
          items={items}
        />
      ))}
        </>
    )
}