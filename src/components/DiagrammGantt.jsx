import { useEffect, useState } from "react";
import {useLocation } from 'react-router-dom'
import { Unity, useUnityContext } from "react-unity-webgl";
import { Button } from 'antd';

export default function GanttUnity(props) {

    const [matrix, setMatrix] = useState(null)

    const location = useLocation();
    const { state } = location;

    const [isLoad, setIsLoad] = useState({})

    const { isLoaded } = useUnityContext()
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "Build/public.loader.js",
        dataUrl: "Build/public.data.br",
        frameworkUrl: "Build/public.framework.js.br",
        codeUrl: "Build/public.wasm.br",
    });

    const request = (address, method, body) => {
        return (fetch(address, {
            method: method,
            headers: new Headers({ "Content-Type": "application/json" }),
            credentials: 'include',
            body: JSON.stringify(body)
            //body:body
        }))
    }

    function handlePauseButton(numberMachines, numberDetails, generalTime, sequence) {


        var json = JSON.stringify({
            numberMachines: numberMachines,
            numberDetails: numberDetails,
            generalTime: generalTime,
            sequence: sequence
        })
        sendMessage("EventHandler", "sendNumbersSeqToUnity", json);
        
    }

    function handleSetMatrix(matrix) {

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                var json = JSON.stringify({
                    numberEl: j,
                    element: matrix[i][j]
                })
                sendMessage("EventHandler", "sendMatrixToUnity", json);
            }
        }
    }

    function createDiagram() {
        sendMessage("EventHandler", "createDiagram");
    }

    function clickGetDataFromXL() {
        
        handlePauseButton(state.numberMachines, state.numberDetails, state.generalTime, state.sequence)
        handleSetMatrix(matrix)
        createDiagram()
    }

    async function getMatrix() {
        let address = 'https://localhost:7007/api/calculation/matrix'
        let obj = {
            sequence: state.sequence
        }
        const response = await request(address, 'PUT', obj)
        if (response.status == 200) {
            const json = await response.json()
            setMatrix(json)
        }
        
    }

    window.GetIsLoad = function (data) {
        const parsedData = JSON.parse(data);


        console.log(parsedData.isLoad);// Массив данных из Unity

        setIsLoad(parsedData.isLoad)

    };

    useEffect(() => {
        getMatrix()
    }, [])

    
    useEffect(() => {
        setTimeout(() => {
            clickGetDataFromXL()
        }, 3000)
    }, [isLoad])

    return (
        <>
            <h3>{state.name}</h3>
            {(state.sequence).slice(0, -1).replace(/ /g, "-")}
            <div>
                <Unity
                    unityProvider={unityProvider}
                    style={{ width: 1000, height: 450 }}
                    id="unityContainer"
                />
            </div>
            
            

        </>
    )
}