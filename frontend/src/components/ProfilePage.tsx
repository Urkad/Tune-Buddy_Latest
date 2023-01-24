import React, {ChangeEvent, useEffect, useState} from "react";
import {User} from "./models/User";
import SingleImageUploadComponent from "./Upload";
import useProfile from "./hooks/useProfile";
import {Button} from "@mui/material";
import Parts from "./Parts/Parts";
import {TuningPart} from "./models/TuningPart";
import { v4 as uuid } from 'uuid';
import AddParts from "./Parts/AddParts";
import axios from "axios";
export type ProfileProps={
    user: User
    setUser:(user:User)=> void
}

export default function ProfilePage(props:ProfileProps){
    const [edit, setEdit] = useState<boolean>(false)
    const [carImage, setCarImage] = useState<string>(props.user.car.img)
    const [desc, setDesc] = useState<string>(props.user.car.description)
    const [tuningParts, setTuningParts] =  useState<Array<TuningPart>>(props.user.car.tuningParts)
    const {updateImages}= useProfile()

    function onDescChange(event:ChangeEvent<HTMLInputElement>){
        setDesc(event.target.value)

    }

    useEffect(() => {
        axios.get("/api/users/"+ props.user.id)
            .then(response => {
                props.setUser(response.data)
            })
            .catch(console.error)
    }, [])

    function onEditClick(){
        setEdit(!edit)
        if (edit) {
            let _user = props.user
            _user.car.description = desc
            _user.car.tuningParts = tuningParts

            _user.car.img = carImage
            updateImages(_user)
            props.setUser(_user)
        }
    }

    function onPartsRemove(id: string) {
        setTuningParts(tuningParts.filter(p => p.id !== id))
    }

    function onPartsAdd(name: string, shopUrl: string) {
        setTuningParts(tuningParts.concat(
            {id: uuid(), name: name, shopUrl: shopUrl}
        ))
    }

    return(
        <div>
            <p>Profile page</p>
            <img src={props.user.car.img}/>
            <Button size={"small"} variant={"contained"} onClick={onEditClick}>{edit ? "Save" : "Edit"}</Button>
            { edit ?  <SingleImageUploadComponent setCarImg={setCarImage}/> : null }
            <h2>{props.user.name}</h2>
            <input type="text" disabled={!edit} value={desc} onChange={onDescChange}/>
            { edit ? <AddParts addEvent={onPartsAdd}/> : null}
            <div>{tuningParts.map(part=><Parts part={part} editable={edit} removeEvent={onPartsRemove}/>)}</div>
        </div>
        )
}