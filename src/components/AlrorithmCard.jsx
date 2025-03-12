import {Card, Button } from "antd"

export default function AlgorithCard(props) {

    const actions = [
        <Button onClick={props.diagrammGantt}>Диаграмма Ганта</Button>
    ];

    return (
        <>
            <Card title={props.title} actions={actions} extra={<a onClick={props.getSequence}>Рассчитать время</a>} style={{ width: 600 }}>
                Общее время обработки всех деталей: {parseFloat(props.content).toFixed(2) }
            </Card>
        </>
    )
}