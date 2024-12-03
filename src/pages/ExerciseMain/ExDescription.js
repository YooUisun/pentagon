import '../../assets/DetailPage.css'

function ExDescription({ dcData, setDcData, index }) {

    return (
        <div className='dc-container'>
            <img
                className='dcImg'
                src={dcData[index].imageURL}
            ></img>
            <div className='dcText'>
                {dcData[index].content1}
            </div>
            <h1>{dcData[index].name} 운동 가이드</h1>

            <h2>시작 자세</h2>
            {dcData[index].content2}
            {/* 
                <div>
                    <p> {content2} </p>
                </div>
            */}

            <h2>운동 동작</h2>
            {dcData[index].content3}

            <h2>호흡법</h2>
            {dcData[index].content4}

            <h2>주의사항</h2>
            {dcData[index].content5}
        </div>
    )
}

export default ExDescription;