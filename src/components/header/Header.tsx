import "./Header.scss";

interface IHeaderProps {
  title: string;
  imageUrl: string;
}

export const Header = ({ title, imageUrl }: IHeaderProps) => {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <div className="headerImgContainer">
          <img src={imageUrl} alt="header-bakgrund" />
        </div>
      </header>
    </>
  );
};
