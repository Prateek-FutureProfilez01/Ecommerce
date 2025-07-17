import Card from "../common/Card";
import Chair from '../Json/chair.json'

function Potfolio() {
    console.log("Chair" ,Chair)
    return (<>
    <Card  product={Chair?.product} className="border-5"/>
       </>)
}

export default Potfolio;