import './Header.scss'

interface IHeaderProps {
    title: string,
    imageUrl: string
}

export const Header = ({title, imageUrl}: IHeaderProps) => {

    return <>
    <header>
        <h1>{title}</h1>
        <img src={imageUrl} alt="header-bakgrund" />
    </header>
    </>
}