
import menuData from '../components/menu/menu.json';
import { MenuCategory } from '../components/menuCategory/menuCategory';


export const Menu = () => {
    return (
        <>
        {Object.entries(menuData).map(([CategoryName, items], index) => {
           <MenuCategory key= {index} title={CategoryName} items={items} />
        })}
        </>
    )
   
}