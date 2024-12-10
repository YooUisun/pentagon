import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function StatatisticWorkInfo({ data, setData1 }) {

    function handleDel(index) {
        let newData = [...data];
        newData.splice(index, 1);
        setData1(newData); // 데이터 삭제 후 갱신
    }

    return (
        <>
            {data.map((item, index) => {
                return (
                    <div className="Memo" key={index}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div style={{ width: '25px' }}>{index + 1}</div>
                            <div>운동명 : {item.title}</div>
                            <div>운동 시간 : {item.time} 분</div>
                            <div>총 세트 수 : {item.sets}</div>
                            <div>총 무게 : {item.weight} kg</div>
                            <button onClick={() => handleDel(index)}>
                                <FontAwesomeIcon icon={faXmark} size="lg" />
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
