import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox(id) {
    const opciones = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ]

    return (
        <Autocomplete
            disablePortal
            id={id}
            options={opciones}
            sx={{ width: "20 rem" }}
            renderInput={(params) => <TextField {...params} label="Cantidad" />}
        />
    );
}

