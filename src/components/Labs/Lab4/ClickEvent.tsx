import React from "react";

const hello = () => {
    alert("Hello World!");
};

const lifeIs = (good: string) => {
    alert(`Life is ${good}`);
};

export default function ClickEvent() {
    return (
        <div id="wd-click-event">
            <h2>Click Event</h2>
            <button
                onClick={hello}
                id="wd-hello-world-click"
                className="btn btn-primary me-2">
                Hello World!
            </button>

            <button
                onClick={() => lifeIs("Good!")}
                id="wd-life-is-good-click"
                className="btn btn-success me-2">
                Life is Good!
            </button>

            <button
                onClick={() => {
                    hello();
                    lifeIs("Great!");
                }}
                id="wd-life-is-great-click"
                className="btn btn-warning">
                Life is Great!
            </button>
            <hr />
        </div>
    );
} 