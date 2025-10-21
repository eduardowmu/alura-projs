import React from "react";
import { useInterval } from "../hooks/use-interval";
import { Button } from "./button";
import { Timer } from "./timer";

interface Props {
    pomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number;
}

export function PomodoroTimer(props: Props) {
    const [mainTime, setMainTime] = React.useState(props.pomodoroTime);

    useInterval(() => {
        setMainTime(mainTime - 1)
    }, 1000);//1 segundo de delay

    //return <div>Olá mundo {secondsToTime(mainTime)}</div>;
    return (
        <div className="pomodoro">
            <h2>You are: working</h2>
            <Timer mainTime={mainTime}/>
            <div className="controls">
                <Button text="teste" onClick={() => console.log('clicked')}></Button>
                <Button text="teste" onClick={() => console.log('clicked')}></Button>
                <Button text="teste" onClick={() => console.log('clicked')}></Button>
            </div>

            <div className="details">
                <p>Testando...</p>
                <p>Testando...</p>
                <p>Testando...</p>
                <p>Testando...</p>
            </div>
        </div>
    )
}