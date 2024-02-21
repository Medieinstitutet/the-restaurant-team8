import menuJson from "../menu/menu.json";
import { IMenuData } from "../../models/IMenuData";
<<<<<<< HEAD
import { MenuCategory } from "../menuCategory/menuCategory";
import './FoodMenu.scss'
=======
import { MenuCategory } from "../menuCategory/MenuCategory";

>>>>>>> admin-style
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
