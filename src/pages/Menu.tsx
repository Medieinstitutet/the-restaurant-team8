
import menuData from '../components/menu/menu.json';
import { MenuCategory } from '../components/menuCategory/menuCategoryenuCategory';

const categoryNames: { [key: string]: string } = {
  Category1: "Förrätter",
  Category2: "Tandoori & Sizlar",
  Category3: "Vegetariska rätter",
  Category4: "Barnmeny",
};

export const Menu = () => {
  console.log(menuData);
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
  );
};
