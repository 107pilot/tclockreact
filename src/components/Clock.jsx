import React, { useState } from "react";

function Clock() {
    const now = new Date().toLocaleTimeString("en-US", { hour12: false });
    setInterval(updateTime, 1000);
    const [time, setTime] = useState(now);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString("en-US", { hour12: false });
        setTime(newTime);
    }

    return (
        <div className="container">
            <h1 className="time">{time}</h1>
        </div>
    );
}

export default Clock;