import arcCalculations from '../utils/arcCalculations';
import {spinnerPropTypes} from '../utils/spinnerProps';

function Spinner({
    x,
    y,
    radius,
    startAngle,
    endAngle,
    color,
    centerValue,
    size,
    rotate
}){

    return (
        <div>
            <svg height={size} width={size} xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 150 150"
                preserveAspectRatio="xMidYMid meet">
                <g>
                    <path d={arcCalculations(x,y,radius,1,360)}
                        stroke="#cccccc" fill="transparent" strokeWidth="3" />
                    <path d={arcCalculations(x,y,radius,startAngle,endAngle)}
                        stroke={color} fill="transparent" strokeWidth="3"
                        transform={`rotate(${rotate},${x},${y})`}/>
                    <text x="50%" y="50%" textAnchor="middle" stroke="#ccc" strokeWidth="1px" dy=".3em">
                        {centerValue}
                    </text>
                </g>
            </svg>
        </div>
    );
}

Spinner.propTypes = spinnerPropTypes;
Spinner.displayName = "Spinner";

export default Spinner;