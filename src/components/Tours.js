import Card from "./Card";

// Card function
function Tours({tours}){
    return(
        <div>
            <div>
                <h2> Plan with Love </h2>
            </div>
            <div>
                {
                    tours.map((tour) => {
                        return <Card {...tour}></Card> //copy of tour passed using ...
                    })
                }
            </div>
        </div>
    )
}

export default Tours;