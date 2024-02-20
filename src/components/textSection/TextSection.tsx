interface ITextSectionProps{
    headline: string,
    text: string

}

export const TextSection = ({headline, text}: ITextSectionProps) => {
  return (
    <div style={{width: "80vw", textAlign: "center", margin: "auto"}}>
      <h2>{headline}</h2>
      <p>
        {text}
      </p>
    </div>
  );
};
