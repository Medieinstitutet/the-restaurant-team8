import menuJson from "../menu/menu.json";
import { IMenuData } from "../../models/IMenuData";
import { MenuCategory } from "../menuCategory/menuCategory";
import './FoodMenu.scss'
const menuData: IMenuData = menuJson;

export const FoodMenu = () => {
  // console.log(menuData);
  return (
    <>
      <div className="foodMenu">
        {menuData.categories.map((category, index) => (
          <MenuCategory
            key={index}
            title={category.title}
            items={category.items}
            images={category.images}
          />
        ))}
      </div>
    </>
  );
};
