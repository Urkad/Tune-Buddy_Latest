import {NewEvent} from "../models/Event";
import {ChangeEvent, useState} from "react";
import {Button, TextField} from "@mui/material";


export type AddEventProps={
    addEvent:(newEvent: NewEvent)=> Promise<any>
}
export default function AddEvent(props:AddEventProps){

    const [name,setName]=useState<string>("")


    function onNameChange(event:ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
    }

    function onSaveClick(){
        props.addEvent({name:name})
            .then(()=>{
                setName("")
            })
    }

    return(
        <div>
            <TextField placeholder={"name"} value={name} onChange={onNameChange}/>
            <Button size={"large"} variant={"contained"} onClick={onSaveClick}>Save</Button>
        </div>
    )
}