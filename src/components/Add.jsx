import React, { useState } from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/joy'
import { Container, TextField } from '@mui/material'
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Nav from './Nav';

function Add() {
    const [startdatevalue, setstartdatevalue] = useState(null);
    const [enddatevalue, setenddatevalue] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [summary, setSummary] = useState("");
    const [git, setGit] = useState("");
    const [other, setOther] = useState("");
    const stylo = {
        fontSize: '20px',
        marginLeft: '22rem',
        fontFamily: 'Poppins',
        paddingTop: '1rem',
    }
    const stylo1 = {
        width: '600px',
        padding: '10px 10px',
        outline: 'none',
        outlineColor: 'white',
        marginTop:'0.3rem',
        paddingTop:'7px',
        borderRadius: '4px',
        paddingBottom: '13px',
        border: '0.5px lightgray solid',
        fontFamily: 'Poppins',
    }
    const stylo2 = {
        fontSize: '20px',
        width: '10px',
        padding: '10px 10px',
        outline: 'none',
        outlineColor: 'white',
        borderRadius: '4px',
        paddingBottom: '10px',
        border: '0.5px lightgray solid',
        fontFamily: 'Poppins'
    }
    const handleSubmit =(event) => {
        event.preventDefault();
        localStorage.setItem('title',title)
        localStorage.setItem('description',description)
        localStorage.setItem('summary',summary)
        localStorage.setItem('git',git)
        localStorage.setItem('other',other)
        localStorage.setItem('startdatevalue',startdatevalue)
        localStorage.setItem('enddatevalue',enddatevalue)
        // localStorage.setItem('image',image)

    }
    return (
        <div>
            <Nav />

            <Container sx={{ bgcolor: "white", height: "100vh" }} maxWidth="xl" style={{ width: "100vw", paddingLeft: 0, paddingRight: 0 }}>

                <form action="" >

                    <Typography variant="h1" sx={{ color: 'black', marginBottom: '2rem', marginLeft: '21rem', fontFamily: 'Poppins', fontSize: 30 }}>New Hackathon Submission</Typography>

                    <div style={stylo}>
                        Title <br /> <input style={stylo1} type="text" name="" id="" placeholder='Title of your submission'
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }} />  <br /> <br />

                        Summary <br /><input style={stylo1} type="text" name="" id="" placeholder='A short summary of your submission (this will be visible with your submission' 
                         value={summary}
                         onChange={(e) => {
                             setSummary(e.target.value);
                         }}/>   <br /> <br />

                        Description <br /><textarea style={stylo1} name="" id="" placeholder='Write a long description of your project. You can describe your idea and approach here.' 
                         value={description}
                         onChange={(e) => {
                             setDescription(e.target.value);
                         }}/>  <br /> <br />

                        Cover Image <br />
                        <span style={{ color: 'gray', fontSize: '12px' }}>Minimum resolution 360px x 360px</span> <br />
                        <Button variant="contained" component="label" sx={{ width: '600px', backgroundColor: 'silver' }}>
                            Click to upload image here
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>


                        <div style={{ paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', maxWidth: '720px' }}>
                            <div>
                                Hackathon Start Date<br />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>

                                    <DatePicker sx={{ marginTop: '1rem' }}
                                        value={startdatevalue}
                                        onChange={(newValue) => setstartdatevalue(newValue)}

                                        renderInput={(props) => <TextField{...props} />}
                                    />

                                </LocalizationProvider>
                            </div>
                            <div>
                                Hackathon End Date <br />
                                <LocalizationProvider dateAdapter={AdapterDayjs}>

                                    <DatePicker sx={{ marginTop: '1rem' }}
                                        value={enddatevalue}
                                        onChange={(newValue) => setenddatevalue(newValue)}

                                        renderInput={(props) => <TextField{...props} />}
                                    />

                                </LocalizationProvider>
                            </div>
                            <br /> <br />

                        </div> <br />
                        Github Repository <br /><input style={stylo1} type="text" name="" id="" placeholder='Enter your submissions public GitHub repository link' 
                         value={git}
                         onChange={(e) => {
                             setGit(e.target.value);
                         }}/>   <br /> <br />
                        Other Links <br /><input style={stylo1} type="text" name="" id="" placeholder='You can upload a video demo or URL of you demo app here.'
                         value={other}
                         onChange={(e) => {
                             setOther(e.target.value);
                         }}/>   <br /> <br />

                    </div>

                </form>
                <div style={{ marginLeft: '17rem' }}>
                    <button id='up_sub' style={{ marginLeft: '5remp' }}
                    onClick={handleSubmit}>Upload Submission</button>
                </div>

            </Container>
        </div>

    )
}

export default Add