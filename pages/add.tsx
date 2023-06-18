import React from "react"
import type {NextPage} from 'next'
import {AddNewDeviceForm, Layout} from "../Components"


const AddNewDevice: NextPage = () => {
    return (
        <Layout>
            <AddNewDeviceForm/>
        </Layout>
    )
}

export default AddNewDevice;
