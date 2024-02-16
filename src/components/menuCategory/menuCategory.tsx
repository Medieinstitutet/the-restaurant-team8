import { IMenuItem } from "../../models/IMenuItem";
import { MenuItem } from "../menuItem/MenuItem";
import "../menuCategory/menuCategory.scss";
import { IMenuImage } from "../../models/IMenuImage";

interface MenuCategoryProps {
  title: string;
  items: IMenuItem[];
  images?: IMenuImage[];
}

export const MenuCategory = ({ title, items, images }: MenuCategoryProps) => {
  return (
    <>
      <div className="menu-category">
        <h2 className="menu-category-title">{title}</h2>
        {items.map((item) => (
          <MenuItem key={item.Id} item={item} />
        ))}
        <div className="menu-category-images">
          {images?.map((image, imgIndex) => (
            <div key={imgIndex} className="menu-category-image">
              <img
                src={image.Src}
                alt={`Category ${title} image ${imgIndex}`}
              />
              <p className="menu-category-image-description">
                {image.Description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
