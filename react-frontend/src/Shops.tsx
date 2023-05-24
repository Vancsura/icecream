// @ts-ignore
import dog from './css/img/dog.jpg'
// @ts-ignore
import cat from './css/img/cat.jpg'

export default function Shops() {

    return (

        <div className="wrapper">
            <div className="left">
                <div className="image dog">
                    <img src={dog} alt="It would be a dog"/>
                </div>
            </div>
            <div className="right">
                <div className="image cat">
                    <img src={cat} alt="It would be a cat"/>
                </div>
            </div>

        </div>
    )
}