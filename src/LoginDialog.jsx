import { Dialog, DialogContent, Typography } from '@mui/material'
import React from 'react'

const LoginDialog = (props) => {
    const { open, handleClose, email, password } = props;
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <Typography>
                    Email : {email === '' ? "No Data" : email}
                </Typography>
                <Typography>
                    Password : {password === '' ? "No Data" : password}
                </Typography>

            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog