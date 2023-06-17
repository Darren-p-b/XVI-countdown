import { useEffect, useState} from "react";

// countdown function taking in release date as a prop
// the useState will be the countdown based on current time versus release date
function CountdownClock(){
    const [countdown, setCountdown] = useState(null);

    // useEffect to update the countdown every second
        // current time takes the current time
        // release time calculates the difference between the current time and the release date prop
    useEffect(() => {
        const releaseDate = new Date("2023-06-22T00:00:00");
        const currentTime = new Date()
        

        // setInterval is running the following function every second
            // updatedTimeDifference is the difference between the release date and the current time
            // new Date() is the current time when the browser is opened and thereby the function is ran
            // if the updatedTimeDifference is less than or equal to 0, the countdown is over and the interval is cleared
            // the countdown will then display a string when the countdown is complete
        // Otherwise
            // the countdown will display the days, hours, minutes, and seconds until the release date
            // Days is taking the difference between the release date and the current time and dividing it by the number of milliseconds in a day - math floor will round down to the nearest whole number as a result of the other variables being whole numbers.
            // Math.floor will be used across all variables as we're counting down to the next whole number
        // The countdown will be updated every second - printing out the updated time difference through string interpolation
        // The 1000 at the end is specifying how often this function will run - in this case, every second
        const intervalId = setInterval(() => {
            const updatedTimeDifference = releaseDate - currentTime;
            if (updatedTimeDifference <= 0) {
                clearInterval(intervalId);
                setCountdown("Valisthea is here, reign above all in War. The War of the Eikons.");
            } else {
                const days = Math.floor(updatedTimeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((updatedTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((updatedTimeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((updatedTimeDifference % (1000 * 60)) / 1000);
            setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
          }
        }, 1000);

        return () => {
            clearInterval(intervalId);
          };
        }, );

        return ( 
            <div>
                <h1>{countdown}</h1>
            </div>
        )};

export default CountdownClock;