import { useState, useEffect } from 'react'

function Box(props) { // id, onClick, value
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(props.value);
      }, [props.value]);

    return (
        <button id={props.id} onClick={props.onClick}>
            {value}
        </button>
    )
}

export default Box
