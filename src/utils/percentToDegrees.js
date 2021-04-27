export default function percentToDegrees(percent){
    //convert percent to decimal
    const decimal = percent / 100;
    //convert to degrees - round up
    return Math.ceil(decimal * 360);
}