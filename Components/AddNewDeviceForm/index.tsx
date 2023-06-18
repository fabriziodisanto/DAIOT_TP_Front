import React, {useState} from "react"
import Link from 'next/link'
import {Button, Paper, TextField} from "@mui/material"
import {Box} from "@mui/system";
import {addNewDeviceRequest} from "../../utils";
import {useRouter} from "next/router";

export const AddNewDeviceForm = () => {
    const router = useRouter();
    const onBack = () => {
        router.back();
    }

    const [deviceId, setDeviceId] = useState('')
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (deviceId && name && location) {
            addNewDeviceRequest({deviceId, name, location, topic: `esp32/status/${deviceId}`})
            onBack()
        }
    }

    return (
        <Link href={'/add'}>
            <Paper elevation={3} style={{margin: 10, padding: 20}}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="deviceId"
                            value={deviceId}
                            onInput={e => setDeviceId(e.target.value)}
                        />
                        <TextField
                            required
                            id="outlined"
                            label="Name"
                            value={name}

                            onInput={e => setName(e.target.value)}

                        />
                        <TextField
                            required
                            id="outlined"
                            label="Location"
                            value={location}
                            onInput={e => setLocation(e.target.value)}

                        />
                    </div>
                </Box>
                <Button
                variant="outlined"
                onClick={handleSubmit}
            >
                Save
            </Button>
                <Button
                variant="outlined"
                onClick={onBack}
            >
                Back
            </Button>
            </Paper>
        </Link>
    )
}
export default AddNewDeviceForm;
