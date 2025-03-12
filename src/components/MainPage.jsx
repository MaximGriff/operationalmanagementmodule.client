import { Button, Input, message, Statistic } from 'antd';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '@ant-design/v5-patch-for-react-19';
import Card from "./AlrorithmCard" 

export default function MainPage() {

    const [numberMachinesDetails, setNumberMachinesDetailes] = useState({
        numberMachines: 0,
        numberDetails: 0
    })

    const [sequences, setSequences] = useState({
        seqFirstGeneral: "",
        seqSecondGeneral: "", 
        seqThirtyGeneral: "", 
        seqFourthGeneral: "", 
        seqFifthGeneral: "", 
        seqSum1: "", 
        seqSum2: "", 
        seqDifference: ""
    })

    const [times, setTimes] = useState({
        timeFirstGeneral: 0,
        timeSecondGeneral: 0,
        timeThirtyGeneral: 0,
        timeFourthGeneral: 0,
        timeFifthGeneral: 0,
        timeSum1: 0,
        timeSum2: 0,
        timeDifference: 0
    })

    const navigate = useNavigate();

    const filePath = useRef(null);

    const [messageApi, contextHolder] = message.useMessage();

    const success_set = () => {
        messageApi.open({
            type: 'success',
            content: 'Матрица сгенерирована',
        });
    };

    const success_get = () => {
        messageApi.open({
            type: 'success',
            content: 'Матрица получена из файла',
        });
    };

    const request = (address, method, body) => {
        return (fetch(address, {
            method: method,
            headers: new Headers({ "Content-Type": "application/json" }),
            credentials: 'include',
            body: JSON.stringify(body)
            //body:body
        }))
    }

    const requestNoBody = (address, method) => {
        return (fetch(address, {
            method: method,
            headers: new Headers({ "Content-Type": "application/json" }),
            credentials: 'include',
            
        }))
    }

    async function clickSetDataIntoXL() {
        let address = 'https://localhost:7007/api/matrix'
        let obj = {
            filePath: filePath.current.input.value
        };
        const response = await request(address, 'POST', obj)
        if (response.status == 200) {
            console.log("EEE")
            success_set()
            
        }
    }

    async function clickGetDataFromXL() {
        let address = 'https://localhost:7007/api/matrix'
        let obj = {
            filePath: filePath.current.input.value
        };
        const response = await request(address, 'PUT', obj)
        if (response.status == 200) {
            
            success_get()
            const json = await response.json();
            setNumberMachinesDetailes({
                numberDetails: json[0].length - 1,
                numberMachines: json.length - 1
            })

        }
    }

    async function getSequence(address, parameter, parameterTimes){
        let tempAddress = 'https://localhost:7007/api/algorithm/' + address

        let tempSequence = "";
        const response = await requestNoBody(tempAddress, 'GET')
        if (response.status == 200) {
            
            const json = await response.text();
            
            setSequences(prevSequence => ({
                ...prevSequence,
                [parameter]: json
            }));

            tempSequence = json
        }
        const body2 = {
            sequence: tempSequence
        }

        const response2 = await request('https://localhost:7007/api/calculation', 'PUT', body2)
        if (response2.status == 200) {
            const json2 = await response2.text()
            setTimes(prevTimes => ({
                ...prevTimes,
                [parameterTimes]: json2
            }));
            //openGantt(numberMachinesDetails.numberMachines, numberMachinesDetails.numberDetails, json2, sequences[parameter])
        }
    }

    const openGantt = (numberMachines, numberDetails, generalTime, sequence, name) => {
        const dataToSend = {
            numberMachines: numberMachines,
            numberDetails: numberDetails,
            generalTime: generalTime,
            sequence: sequence, 
            name: name
        }
        

        navigate('/gantt', { state: dataToSend })
    }

    const containsNumber = (obj, num) => {
        return Object.values(obj).some(value => value === num);
    };
    async function calculationAllMatrix() {
        
        await getSequence("first", 'seqFirstGeneral', 'timeFirstGeneral')
        await getSequence("second", 'seqSecondGeneral', 'timeSecondGeneral')
        await getSequence("thirty", 'seqThirtyGeneral', 'timeThirtyGeneral')
        await getSequence("fourth", 'seqFourthGeneral', 'timeFourthGeneral')
        await getSequence("fifth", 'seqFifthGeneral', 'timeFifthGeneral')
        await getSequence("sum-el-no-last", 'seqSum1', 'timeSum1')
        await getSequence("sum-el-no-first", 'seqSum2', 'timeSum2')
        await getSequence("difference", 'seqDifference', 'timeDifference')
    }

   
    useEffect(() => {
        
        clickGetDataFromXL()
            
        
        
    }, [])
    

    return (

        <>
            {contextHolder}
            <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center"}}>
                <div>
                    <Input ref={filePath} style={{ "width": "100%"}} defaultValue="C:\Users\grise\OneDrive\Рабочий стол\SimpleMatrix.xlsx" />
                    <div>
                        <Button type='primary' style={{ "margin": "10px" }} onClick={clickSetDataIntoXL}>Записать данные в Excel</Button>
                        <Button type='primary' onClick={clickGetDataFromXL}>Получить данные из Excel</Button>

                    </div>
                    <div style={{ "display": "flex" }} >
                        <Statistic style={{ "marginInline": "30px" }} title="Количество деталей" value={numberMachinesDetails.numberDetails} />
                        <Statistic style={{ "marginInline": "30px" }} title="Количество станков" value={numberMachinesDetails.numberMachines} />
                    </div>
                    

                    <Button onClick={calculationAllMatrix}>Подсчитать все алгоритмы</Button>
                </div>
                

                <Card title="Первое обобщение Джонсона" content={times.timeFirstGeneral}
                    getSequence={() => getSequence("first", 'seqFirstGeneral', 'timeFirstGeneral')}
                    diagrammGantt={() => openGantt(numberMachinesDetails.numberMachines, numberMachinesDetails.numberDetails, times.timeFirstGeneral, sequences.seqFirstGeneral, "Первое обобщение Джонсона") } />

                <Card title="Второе обобщение Джонсона" content={times.timeSecondGeneral}
                    getSequence={() => getSequence("second", 'seqSecondGeneral', 'timeSecondGeneral')}
                    diagrammGantt={() => openGantt(numberMachinesDetails.numberMachines, numberMachinesDetails.numberDetails, times.timeSecondGeneral, sequences.seqSecondGeneral, "Второе обобщение Джонсона")} />                

                <Card title="Третье обобщение Джонсона" content={times.timeThirtyGeneral}
                    getSequence={() => getSequence("thirty", 'seqThirtyGeneral', 'timeThirtyGeneral')}
                    diagrammGantt={() => openGantt(numberMachinesDetails.numberMachines, numberMachinesDetails.numberDetails, times.timeThirtyGeneral, sequences.seqThirtyGeneral, "Третье обобщение Джонсона")} />               

                <Card title="Четвертое обобщение Джонсона" content={times.timeFourthGeneral}
                    getSequence={() => getSequence("fourth", 'seqFourthGeneral', 'timeFourthGeneral')}
                    diagrammGantt={() => openGantt(numberMachinesDetails.numberMachines, numberMachinesDetails.numberDetails, times.timeFourthGeneral, sequences.seqFourthGeneral, "Четвертое обобщение Джонсона")}
                />

                <Card title="Пятое обобщение Джонсона" content={times.timeFifthGeneral}
                    getSequence={() => getSequence("fifth", 'seqFifthGeneral', 'timeFifthGeneral')}
                    diagrammGantt={() => openGantt(numberMachinesDetails.numberMachines, numberMachinesDetails.numberDetails, times.timeFifthGeneral, sequences.seqFifthGeneral, "Пятое обобщение Джонсона")}
                />

                <Card title="Первый метод Петрова-Соколицина" content={times.timeSum1}
                    getSequence={() => getSequence("sum-el-no-last", 'seqSum1', 'timeSum1')}
                    diagrammGantt={() => openGantt(numberMachinesDetails.numberMachines, numberMachinesDetails.numberDetails, times.timeSum1, sequences.seqSum2, "Метод суммы без последнего элемента Петрова-Соколицина")}
                />

                <Card title="Второй метод Петрова-Соколицина" content={times.timeSum2}
                    getSequence={() => getSequence("sum-el-no-first", 'seqSum2', 'timeSum2')}
                    diagrammGantt={() => openGantt(numberMachinesDetails.numberMachines, numberMachinesDetails.numberDetails, times.timeSum2, sequences.seqDifference, "Метод суммы без первого элемента Петрова-Соколицина")}
                />

                <Card title="Третий метод Петрова-Соколицина" content={times.timeDifference}
                    getSequence={() => getSequence("difference", 'seqDifference', 'timeDifference')}
                    diagrammGantt={() => openGantt(numberMachinesDetails.numberMachines, numberMachinesDetails.numberDetails, times.timeDifference, sequences.seqDifference, "Метод разности Петрова-Соколицина")}
                />
                
            </div>
            
        </>
    )
}