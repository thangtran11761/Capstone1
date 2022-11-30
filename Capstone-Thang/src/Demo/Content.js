import { useReducer, useMemo, useCallback, memo, useRef, useEffect, useLayoutEffect, useState} from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client';

// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)

// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch

// Init state
const initState = 0

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// reducer
// là 1 hàm
// nhận và trả ra
// nhận state hiện tại và hành động => state mới
const reducer = (state, action) => {
    switch(action) {
        case UP_ACTION: return state + 1
        case DOWN_ACTION: return state - 1
        default: throw new Error('Invalid action')
    }
}

// Dispatch

function Content () {

    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div style={{padding: '0 20px' }}>
            <h1>useReducer</h1>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>
        </div>    
    )
}

export default Content