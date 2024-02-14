import { IMenuItem } from "../../models/IMenuItem";
import { MenuItem } from "../menuItem/MenuItem";
import "../menuCategory/menuCategory.scss";

interface MenuCategoryProps {
  title: string;
  items: IMenuItem[];
  images?: string[];
}

export const MenuCategory = ({ title, items, images }: MenuCategoryProps) => {
  return (
    <>
      <div className="menu-category">
        <h2 className="menu-category-title">{title}</h2>
        {items.map((item) => (
          <MenuItem key={item.Id} item={item} />
        ))}
        { images?.map((image, imgIndex) => (
            <img key={imgIndex} src={image} alt={`Category ${title} image ${imgIndex}`}/>
        ))}
      </div>
    </>
  );
};
