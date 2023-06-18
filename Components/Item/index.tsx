import React from "react"
import Link from 'next/link'
import { Paper, Typography } from "@mui/material"



export interface ItemProps {
    deviceId?: any;
    name?: any;
    location?: any;
    active?: any;
    id?: any;
    _id?: any;
}
export const Item = ({ deviceId, name, location, id, active }: ItemProps) => {
    return (
        <Link href={`/dispositivos/${id}`}>
            <Paper elevation={3} style={{ margin: 10, padding: 20 }}>
                <div style={{ display: "flex" }}>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>Name</Typography>
                    <Typography variant="h6">: {name}</Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>Device Id</Typography>
                    <Typography variant="h6">: {deviceId}</Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>Location</Typography>
                    <Typography variant="h6">: {location}</Typography>
                </div>
                <div style={{ display: "flex" }}>
                    <Typography variant="h6" style={{ fontWeight: "bold" }}>Status</Typography>
                    <Typography variant="h6">: {active ? 'ACTIVE':'INACTIVE'}</Typography>
                </div>
            </Paper>
        </Link>
    )
}
export default Item;