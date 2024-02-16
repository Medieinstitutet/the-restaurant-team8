import { MenuCategory } from "../menuCategory/menuCategory";
import menuJson from "../menu/menu.json";
import { IMenuData } from "../../models/IMenuData";

const menuData: IMenuData = menuJson;
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
      {Object.entries(menuData).map(([CategoryName, categoryData], index) => (
        <MenuCategory
          key={index}
          title={categoryNames[CategoryName]}
          items={categoryData.items}
          images={categoryData.images}
        />
      ))}
    </>
  );
};
