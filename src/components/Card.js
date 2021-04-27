import {useState, useEffect} from 'react';
import Spinner from './Spinner';
import percentToDegrees from '../utils/percentToDegrees';
import './Card.css';

function Card(props){
    const [percent, setPercent] = useState(0)
    const [spinAngle, setSpinAngle] = useState(100);
    const [spinning, setSpinning] = useState(false);
    const [spinInterval, setSpinInterval] = useState();

    const handleChangeSpin = (percentComplete) => {
        if(percentComplete === 100){
            clearInterval(spinInterval);
        }
        setSpinAngle(percentToDegrees(percentComplete));
    }

    const onStartClick = () => {
        if(!spinning){
            if(percent < 100){
                setSpinning(true);
                setSpinInterval(setInterval(() => {
                    setPercent(percent => percent + 1);
                    handleChangeSpin(percent);
                    console.log("Interval", percent);
                },300))
            } else {
                setSpinning(false);
                clearInterval(spinInterval);
            }
        }
    }

    const onEndClick = () => {
        //do I need this?
        if(spinning){
            setSpinning(false);
            clearInterval(spinInterval);          
        }
    }

    useEffect(() => {
        //set the iniial value
        handleChangeSpin(percent);
    })

    return (
        <div className="spinner-card">
            <Spinner
            x={75}
            y={75}
            radius={40}
            startAngle={0}
            endAngle={spinAngle}
            color="blue"
            centerValue={percent + "%"}
            rotate={90}
            ></Spinner>
            <div className="card-buttons">
                <button onClick={onStartClick}>Start</button>
                <button onClick={onEndClick}>End</button>
            </div>

        </div>
    )
}

export default Card;