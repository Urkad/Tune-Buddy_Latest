import {useEffect, useState} from "react";
import {User} from "../models/User";
import axios from "axios";


export default function useProfile() {
    const [profile, setProfile]= useState<User[]>([])

    useEffect(()=>{
        getProfile()
    },[])

    function getProfile(){
        axios.get("/api/profile")
            .then(respose =>{
                setProfile(respose.data)
            })
            .catch(console.error)
    }

    return{profile, getProfile}
}