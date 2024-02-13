
import { Header } from '../components/header/Header';
import menuData from '../components/menu/menu.json';
import { MenuCategory } from '../components/menuCategory/menuCategory';
import HeaderImage from '../images/menu_header.png'

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
    <Header title = "Meny" imageUrl={HeaderImage} />
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
