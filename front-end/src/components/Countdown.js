import React, { useState, useRef, useEffect } from "react";
import classes from '../styling/styling-modules/Countdown.module.css'

const Countdown = ()=> {
    const [ time, setTime ] = useState({
        days: null,
        hours: null,
        minutes: null,
        seconds: null
    });

    let interval = useRef();

    const startTimer = ()=> {
        const countDownDate = new Date("May 1, 2023 00:00:00").getTime();

        interval = setInterval(()=> {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            }

            setTime({
                days,
                hours,
                minutes,
                seconds
            });
        }, 1000);
    };

    useEffect(()=> {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

    return (
        <div className={classes.countdown}>
            <section className={classes.elements}>
                <p>{time.days}</p>
                <span>DAYS</span>
            </section>
            <section className={classes.elements}>
                <p>{time.hours}</p>
                <span>HOURS</span>
            </section>
            <section className={classes.elements}>
                <p>{time.minutes}</p>
                <span>MINUTES</span>
            </section>
            <section className={classes.elements}>
                <p>{time.seconds}</p>
                <span>SECONDS</span>
            </section>
        </div>
    );
}

export default Countdown;
