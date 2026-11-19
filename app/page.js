"use client";

import { useState } from "react";

export default function Home() {
    var [count, setCount] = useState(0);

    return (
        <div>
            <h1>Welcome to Next.js</h1>

            <p>This is my first Next.js application.</p>

            <h2>Counter: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <button onClick={() => setCount(count - 1)}>
                Decrease
            </button>
        </div>
    );
}