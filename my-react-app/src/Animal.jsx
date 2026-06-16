import App from "./App.jsx"
function Animal(){
    return (
        <>
        <h1>Animals</h1>
        <div style={{ display:"flex",gap:"20px"}}>
        <p style={{textAlign:"justify"}}>

        Animals first appeared in the fossil record in the late Cryogenian period 
            and diversified in the subsequent Ediacaran period in what is known as the Avalon explosion.
             Nearly all modern animal phyla first appeared in the fossil record as 
             marine species during the Cambrian explosion,
             which began around 539 million years ago (Mya),
            and most classes during the Ordovician radiation 485.4 Mya.
            Common to all living animals, 6,331 groups of genes have been identified
            that may have arisen from a single common ancestor that lived about 
            650 Mya during the Cryogenian period.
            </p>
            <img 
            src="https://i.pinimg.com/736x/a5/78/03/a57803e6f37f73382bf89b007a4b5954.jpg" alt="animal" />
            </div>
            <App></App>
        </>
    );
}
export default Animal;