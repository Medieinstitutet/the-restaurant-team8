import menuJson from "../menu/menu.json";
import { IMenuData } from "../../models/IMenuData";
import { MenuCategory } from "../menuCategory/menuCategory";

const menuData: IMenuData = menuJson;

export const FoodMenu = () => {
  // console.log(menuData);
  return (
    <>
      {menuData.categories.map((category, index) => (
        <MenuCategory
          key={index}
          title={category.title}
          items={category.items}
          images={category.images}
        />
      ))}
    </>
  );
};
