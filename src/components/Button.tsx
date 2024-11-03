import React from "react";

type Message = {
    message: string;
}

export const ButtonDefault = ({message}:Message) =>{
    return (
        <button className="px-8 p-1 rounded-md bg-slate-950 hover:bg-slate-700 transition-all
        duration-150 text-gray-200">{message}.</button>
    )
}