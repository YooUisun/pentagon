
function ExContentBox( {contentData, setContentData, index, getId} ) {

    return (
        <>
            <div
                className={'contContainer' + (contentData[index].flag ? ' active' : '')}
                onClick={() => {
                // 버튼 누른 인덱스 flag = true
                // 다른 인덱스들은 모두 false로 바꾸기
                let temp = [...contentData];
                temp.map((item, idx)=>{
                    temp[idx].flag = false;
                })
                temp[index].flag = true;
                getId();
                setContentData(temp);
            }}>
                <div className='contTitle'>{contentData[index].name}</div>
                <img
                    className='contImg'
                    src={contentData[index].imageURL}
                ></img>
                <div className='contText'>{contentData[index].content}</div>
            </div>
        </>
    )
}

export default ExContentBox;