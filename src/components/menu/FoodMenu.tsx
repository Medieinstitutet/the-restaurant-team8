import { MenuCategory } from "../menuCategory/MenuCategory";
import menuJson from "../menu/menu.json";
import { IMenuData } from "../../models/IMenuData";

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
