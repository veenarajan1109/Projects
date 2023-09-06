import React, { useContext } from 'react';
import {a} from "./indexContext"

export default function Files2() {
    const b=useContext(a)
  return (
    <div>
        <h1>
            <ol>
                {b.map((q)=><li>{q}</li>)}
            </ol>
        </h1>

    </div>
  )
}
