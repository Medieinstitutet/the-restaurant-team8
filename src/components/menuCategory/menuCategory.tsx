import { MenuItem } from "../menuItem/MenuItem";
import "./menuCategory.scss";
import { IMenuCategory } from "../../models/IMenuCategory";

export const MenuCategory = ({ title, items, images }: IMenuCategory) => {
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
