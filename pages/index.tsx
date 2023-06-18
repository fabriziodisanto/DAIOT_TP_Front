import React from "react"
import type {NextPage} from 'next'
import {useDispositivoList} from "./../api"
import {Item, ItemProps, Layout} from "./../Components"
import {Button, Paper} from "@mui/material";
import Link from "next/link";

const Home: NextPage = () => {
    const {dispositivos} = useDispositivoList();
    return (
        <Layout>
            <Paper elevation={3} style={{margin: 10, padding: 20}}>
                <Link href={'/add'}>
                    <Button variant="contained" size="large">
                        Add new device
                    </Button>
                </Link>
            </Paper>
            {
                dispositivos?.map((element: ItemProps, index: number) => <Item key={index}
                                                                               deviceId={element.deviceId}
                                                                               name={element.name}
                                                                               location={element.location}
                                                                               id={element._id}
                                                                               active={element.active}
                />)
            }
        </Layout>
    )
}

export default Home
