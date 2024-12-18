import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function StatatisticWorkInfo({ selData, handleDeleteWorkout }) {

    function handleDel(index) {
        let newData = [...selData];
        newData.splice(index, 1);
        handleDeleteWorkout(newData); // 데이터 삭제 후 갱신
    }

    return (
        <>
            {selData.map((item, index) => {
                return (
                    <div className="Memo" key={index}>

                        <div className='Memo_contentBox'>
                            <div className='Memo_Number'>{index + 1}</div>
                            <div style={ {width : '30%'}}>운동명 : {item.title}</div>
                            <div style={ {width : '20%'}}>운동 시간 : {item.time} 분</div>
                            <div style={ {width : '15%'}}>총 세트 수 : {item.sets}</div>
                            <div style={ {width : '15%'}}>총 무게 : {item.weight} kg</div>
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
