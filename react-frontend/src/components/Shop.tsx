// @ts-ignore
import dog from '../css/img/dog.jpg'
// @ts-ignore
import cat from '../css/img/cat.jpg'

export default function Shop() {

    return (

        <div className="wrapper">

            <div className="side left">
                <div className="image">
                    <img className="img-fluid px-0 mx-0" src={dog} alt="It would be a dog"/>
                </div>
            </div>
            <div className="side right">
                <div className="image">
                    <img className="img-fluid px-0 mx-0" src={cat} alt="It would be a cat"/>
                </div>
            </div>

        </div>

    )
}

