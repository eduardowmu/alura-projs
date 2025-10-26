import React, { useEffect, useCallback } from "react";
import { useInterval } from "../hooks/use-interval";
import { Button } from "./button";
import { Timer } from "./timer";
import { secondsToTime } from "../utils/seconds-to-time";

const bellStart = require('../sounds/106-101586.mp3');
const bellFinish = require('../sounds/gatre-101240.mp3');

const audioStart = new Audio(bellStart);
const audioFinish = new Audio(bellFinish);

interface Props {
    pomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number;
}

export function PomodoroTimer(props: Props) {
    const [mainTime, setMainTime] = React.useState(props.pomodoroTime);
    const [timeCounting, setTimeCounting] = React.useState(false);
    const [working, setWorking] = React.useState(false);
    const [resting, setResting] = React.useState(false);
    const [cyclesQtdManager, setCyclesQtdManager] = React.useState(new Array(props.cycles - 1).fill(true));

    const [completedCycles, setCompletedCycles] = React.useState(0);
    const [fullWorkingTime, setFullWorkingTime] = React.useState(0);
    const [pomodorosNumber, setPomodorosNumber] = React.useState(0);

    useInterval(() => {
        setMainTime(mainTime - 1)
        if(working) setFullWorkingTime(fullWorkingTime + 1);
    }, timeCounting ? 1000 : null);//1 segundo de delay

    const configureWork = useCallback(() => {
        setTimeCounting(true);
        setWorking(true);
        setResting(false);
        setMainTime(props.pomodoroTime);
        audioStart.play();
    }, [
        setTimeCounting,
        setWorking,
        setResting,
        setMainTime,
        props.pomodoroTime,
    ]);

    const configureRest = useCallback((long: boolean) => {
        setTimeCounting(true);
        setWorking(false);
        setResting(true);
        
        if(long) {
            setMainTime(props.longRestTime);
        } else {
            setMainTime(props.shortRestTime);
        }

        audioFinish.play();
    }, [
        setTimeCounting,
        setWorking,
        setResting,
        setMainTime,
        props.longRestTime,
        props.shortRestTime,
    ]);

    useEffect(() => {
        if(working) document.body.classList.add('working');
        if(resting) document.body.classList.remove('resting');
        if(mainTime > 0) return;
        if(working && cyclesQtdManager.length > 0) {
            configureRest(false);
            cyclesQtdManager.pop();
        } else if(working && cyclesQtdManager.length <= 0) {
            configureRest(true);
            setCyclesQtdManager(new Array(props.cycles - 1).fill(true));
            setCompletedCycles(completedCycles + 1);
        }
        if(working) setPomodorosNumber(pomodorosNumber + 1);
    }, [
        working, 
        resting, 
        mainTime,
        cyclesQtdManager,
        pomodorosNumber,
        completedCycles,
        configureRest, 
        setCyclesQtdManager, 
        configureWork,
        props.cycles,
    ]);

    //return <div>Olá mundo {secondsToTime(mainTime)}</div>;
    return (
        <div className="pomodoro">
            <h2>You are: {working ? 'Working' : 'Resting'}</h2>
            <Timer mainTime={mainTime}/>
            <div className="controls">
                <Button text="Work" onClick={() => configureWork()}></Button>
                <Button text="Rest" onClick={() => configureRest(false)}></Button>
                <Button 
                    className={!working && !resting ? 'hidden' : ''}
                    text={timeCounting ? 'Pause' : 'Play'} 
                    onClick={() => setTimeCounting(!timeCounting)}>
                </Button>
            </div>

            <div className="details">
                <p>Concluded cycles: {completedCycles}</p>
                <p>Worked time(h): {secondsToTime(fullWorkingTime)}</p>
                <p>Concluded Pomodoros: {completedCycles}</p>
            </div>
        </div>
    )
}