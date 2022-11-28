// Program that inputs speed of a car
// if speed is 80 print 2 points
// more than 12 points license suspended
let speed;
function speedDetector(speed){
    if(speed < 70){
        return 'Ok'
    }else if(speed >= 70){
        let velocity = (speed - 70) / 5
        if (velocity > 12){
            return ("License suspended")
        }else{
            return ("Demerit: " + velocity)
        }
    }
}
console.log(speedDetector(80))