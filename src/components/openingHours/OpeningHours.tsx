import './OpeningHours.scss'

export const OpeningHours = () => {

    return (
        <div id="openingHours" className='col'>
            <h3 style={{textAlign:"center"}}>Öppetider</h3>
            <div className="row">
                <div className="col">
                    <p>Måndag - Torsdag</p>
                    <p>Fredag</p>
                    <p>Lördag</p>
                    <p>Söndag</p>
                </div>
                <div className="col">
                    <p>11.00 - 20.00</p>
                    <p>11.00 - 22.00</p>
                    <p>12.00 - 22.00</p>
                    <p>12.00 - 20.00</p>
                </div>
            </div>
        </div>
    )
}