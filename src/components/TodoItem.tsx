import React from "react";

const TodoItem: React.FC<{text:string,onRemove: (text:string | null)=>void}> = (props) => 
{
    const onClickHandler = (event:React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        props.onRemove(event.currentTarget.textContent);
    }
    return <li onClick={onClickHandler}>{props.text}</li>
};

export default TodoItem;