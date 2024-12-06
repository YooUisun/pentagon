export default function StatatisticWorkInfo({ data, setData }) {

    // data배열 삭제기능 버튼 추가
    function handleDel(index) {
        let newData = [ ...data ];
        newData.splice(index, 1);
        setData(newData);
    }

    return (

        <>
            {
                data.map((item, index) => {

                    return (
                        <div style={{ display: 'flex', flexDirection: 'row' } }>

                            <div style={ {display: 'flex', flexDirection: 'row'} }>
                                <div>{index + 1}</div> 
                                <div>운동명 : {item.title}</div>
                                <div>운동 시간 : {item.time} 분</div>
                                <div>총 세트 수 : {item.sets}</div>
                                <div>총 무게 : {item.weight} kg</div>
                            </div>

                            <button onClick={handleDel}>X</button>

                        </div>
                    )
                })
            }
        </>
    )
}