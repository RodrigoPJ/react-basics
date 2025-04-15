import { forwardRef, useImperativeHandle, useRef } from "react";

export const Input = forwardRef(({label, click}, ref) => {
    const textArea = useRef();
    useImperativeHandle(ref, ()=>{
        return {
            clear() {
                textArea.current.value = '';
            },
            getValue() {
                return textArea.current.value;
            }
        }
    });
    function onEnter(e) {        
        if (e.keyCode === 13) {
            e.preventDefault();
            click();
        }
    }

    return(
        <div className="todo-input">
            <label htmlFor="todo-input">{label}</label>
            <textarea onKeyDown={onEnter} id="todo-input" ref={textArea}></textarea>
            <button onClick={click}>Add</button>
        </div>
    )
});
