import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


export default function StatatisticWorkInfo({ data1, setData1 }) {

    // data배열 삭제기능 버튼 추가
    function handleDel(index) {
        let newData = [ ...data1 ];
        newData.splice(index, 1);
        setData1(newData);
    }

    console.log(data1);


    return (

        <>
            {
                data1.map((item, index) => {

                    return (
                        <div className="Memo" key={index}>

                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <div style={{ width: '25px' }}>{index + 1}</div>
                                <div>운동명 : {item.title}</div>
                                <div>운동 시간 : {item.time} 분</div>
                                <div>총 세트 수 : {item.sets}</div>
                                <div>총 무게 : {item.weight} kg</div>

                                <button
                                    style={{
                                        width: '30px',
                                        height: '30px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                    onClick={() => handleDel(index)} // index 값을 handleDel 함수로 전달
                                >
                                    <FontAwesomeIcon icon={faXmark} size="lg" /> {/* FontAwesome 아이콘 */}
                                    {/* x표시 */}
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}