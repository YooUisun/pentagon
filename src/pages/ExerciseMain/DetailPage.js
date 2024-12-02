import '../../assets/DetailPage.css'
import testimage from '../../assets/testimage.png'
import ExDescription from './ExDescription';
import { useState } from 'react';


function DetailPage() {
    // process.env.PUBLIC_URL
    let image = testimage;

    let [contentData, setContentData] = useState([
        {
            name: '운동이름',
            imageURL: '',
            content: '설명',
            flag: true
        }
    ]);

    return (
        <>
            <div className='mn-container'>
                <div className='page-title'>
                    <h1>초급자 코스</h1>
                </div>
                <div className='contentWrap'>
                    <div className='contContainer' onClick={()=>{
                        let temp = [...contentData];
                        temp[0].flag = temp[0].flag ? false : true;
                        setContentData(temp);
                        console.log(contentData[0].flag);

                        // ++ 다른 index false로 바꾸기
                    }}>
                        <div className='contTitle'>{contentData[0].name}</div>
                        <img
                            className='contImg'
                            src={image}
                        ></img>
                        <div className='contText'>{contentData[0].content}</div>
                    </div>

                    <div className='contContainer'>
                        <div className='contTitle'>운동이름</div>
                        <img
                            className='contImg'
                            src={image}
                        ></img>
                        <div className='contText'>설명</div>
                    </div>
                </div>

                {
                    <ExDescription />
                }
            </div>

        </>
    )
}

export default DetailPage;