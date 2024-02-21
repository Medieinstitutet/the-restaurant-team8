import "./TextSection.scss";

interface ITextSectionProps {
  headline: string;
  text: string;
}

export const TextSection = ({ headline, text }: ITextSectionProps) => {
  return (
    <div className="textSection">
      <h2>{headline}</h2>
      <p>{text}</p>
    </div>
  );
};
