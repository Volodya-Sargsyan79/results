import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from "../store/reducer"

export const Date =()=> {

    const data = useSelector((state: any) => state.test_data.data.payload)
    const dispatch = useDispatch<any>()

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    return (
        <div>
            {
                data?.results.map((v:any, i:any)=>
                    <div key={i}>
                        <p>Date: {v.date} Units: {v.units} Revenue: {v.revenue}</p>
                    </div>
                )
            }
        </div>
    )
}