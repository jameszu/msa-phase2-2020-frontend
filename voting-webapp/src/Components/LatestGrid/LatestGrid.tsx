import React, { useEffect, useState } from 'react';
import { modifyArray, ModifyProps} from '../../Api/Api';
import CircularProgress from '../CircularProgress/CircularProgress';
import Grid from '../Grid/Grid';

const LatestGrid = () =>
{
    const [ colourArray, setColourArray ] = useState<string[][]>([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => 
    {
        if ( colourArray.length > 0 && isLoading ) setIsLoading(false);
    }, [isLoading, colourArray])

    useEffect(() => 
    {
        const makeArrayRequest = async () =>
        {
        }
        makeArrayRequest();
        setInterval(makeArrayRequest, 10000);
    }, []);

    const modifyColour = async (props: ModifyProps) =>
    {
        await modifyArray(props);
    }

    return isLoading ? <CircularProgress /> : <Grid colourArray={colourArray} canEdit={true} modifyArray={modifyColour} />
}

export default LatestGrid;