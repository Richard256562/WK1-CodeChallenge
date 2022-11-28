// Program that inputs speed of a car
// For every 5kms above speed limit give the driver one demerit point
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
        // Print number of demerit points
    }
}
console.log(speedDetector(75))