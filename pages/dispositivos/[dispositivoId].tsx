import React, {useState} from "react"
import type {NextPage} from 'next'
import {useRouter} from 'next/router'
import {useDispositivoById, useDispositivoList} from "./../../api"
import {Layout} from "./../../Components"
import {Paper, Typography, Button} from "@mui/material"
import {MyChart} from "../../Components/Chart";
import {turnOffRequest, turnOnRequest} from "../../utils";

interface ItemProps {
    item: any;
}

export const Item = ({item}: ItemProps) => {
    const {_id, __v, ...allValues} = item || {};
    const keys = Object.keys(allValues || {});
    return (

        <Paper elevation={3} style={{marginTop: 20, marginBottom: 20, padding: 20}}>

            {
                keys?.map((key) => {
                    const value = item[key];
                    if (key == 'myStatus') {
                        return (<div key={key} style={{display: "flex"}}>
                            <Typography variant="h6" style={{fontWeight: "bold"}}>Status</Typography>
                            <Typography variant="h6">: {value ? 'ACTIVE':'INACTIVE'}</Typography>
                        </div>
                        )
                    }
                    return (
                        <div key={key} style={{display: "flex"}}>
                            <Typography variant="h6" style={{fontWeight: "bold"}}>{key}</Typography>
                            <Typography variant="h6">: {value}</Typography>
                        </div>
                    );
                })
            }

        </Paper>

    )
}

const DispositivoId: NextPage = () => {
    const router = useRouter();
    const {dispositivoId} = router.query;
    const {dispositivo} = useDispositivoById(dispositivoId);
    // @ts-ignore
    const {dispositivos} = useDispositivoList();
    const [myStatus, setMyStatus] = useState(dispositivos?.find((disp: any) => disp._id === dispositivoId)?.active)
    const onBack = () => {
        router.back();
    }
    const changeStatus = (myStatus: any, dispositivoId: any) => {
        dispositivoId && myStatus ? turnOffRequest(dispositivoId) : turnOnRequest(dispositivoId)
        setMyStatus(!myStatus)
    }
    const data = {
        // @ts-ignore
        temperature: dispositivo && dispositivo.map((entry) => entry.temperature),
        // @ts-ignore
        humidity: dispositivo && dispositivo.map((entry) => entry.humidity),
        // @ts-ignore
        timestamp: dispositivo ? dispositivo.map((entry) => entry.ts) : [],
    }
    // @ts-ignore
    return (
        <Layout>
            <Item
                item={dispositivo ? { ...dispositivo[dispositivo.length - 1], myStatus: myStatus} : {}}
            />
            <MyChart
                temperature={data.temperature}
                humidity={data.humidity}
                timestamp={data.timestamp}
            />
            <Button
                variant="outlined"
                onClick={() => changeStatus(myStatus, dispositivoId)}
            >
                {
                    myStatus ? 'TURN OFF' : 'TURN ON'
                }
            </Button>
            <Button
                variant="outlined"
                onClick={onBack}
            >
                Back
            </Button>
        </Layout>
    )
}

export default DispositivoId;
