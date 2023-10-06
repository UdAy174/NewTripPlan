import Card from "./Card";


// Card function
function Tours({tours,removeTour}){
    return(
        <div className='container'>
            <div>
                <h2 className='title'> Plan with Love </h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour) => {
                        return <Card {...tour} removeTour={removeTour}></Card> //copy of tour passed using ...
                    })
                }
            </div>
        </div>
    )
}

export default Tours;