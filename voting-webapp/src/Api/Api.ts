const API_BASE_URL = "https://localhost:44345/index.html" ;

const CANVAS_API_URL = API_BASE_URL + "Canvas/";

export const getArray = async () =>
{
    const response = await fetch(CANVAS_API_URL + "GetCanvas",
    {
        headers: 
        {
            Accept: "application/json",
        },
    }).then((res) => res.json()).then(res => JSON.parse(res));
    return response;
}

export interface ModifyProps
{
    position : { row: number, col: number},
    colour: string
}

export const modifyArray = async ({ position: {row, col }, colour}: ModifyProps) =>
{
    const body = JSON.stringify( {row: row, column: col, hex: colour});
    await fetch(CANVAS_API_URL + "UpdateCell", 
    {
        body,
        headers: 
        {
            Accept: "*/*",
            "Content-Type": "application/json",
        },
        method: "PUT"
    });
}