import React, {useState} from 'react';
import {Button, Grid, TextField} from '@material-ui/core';
import './NamePage.css';
import { Link } from 'react-router-dom'
import { IUserInput} from '../../Common/Interfaces'

interface ISearchBoxProps
{
    SetUserInput: (a: IUserInput) => void;
}

function Name(props: ISearchBoxProps)
{
    const [InputQuery, setInputQuery] = useState<string | null>("");
    const handleInputQueryChange = (s: string | null) =>
    {
        setInputQuery(s);
    }
    const [HasFocus, setHasFocus] = useState<boolean>(false);
    
    const handleSubmit = () =>
    {
        if (InputQuery?.length !== 0 && InputQuery !== null && InputQuery !== "")
        {
            let UserInput: IUserInput = 
            {
                InputQuery: InputQuery
            }
            props.SetUserInput(UserInput);
        } else{
            setHasFocus(false);
        }
    }
    
    return (
        <div className="background">
            <div className="SearchBoxContainer">
                <div className="title">
                    <h2>Hello there,</h2>
                    <h4>What's your name?</h4>
                </div>
                
                <Grid className="search" container spacing={1}>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-full-width"
                            label="Name"
                            variant="outlined"
                            style = {{width: '70%'}} 
                            onClick={() => setHasFocus(true)}
                            value={InputQuery}
                            size="small"
                            onChange={e => handleInputQueryChange(e.target.value)}
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/">
                            <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </div>
    
    )
}
export default Name
