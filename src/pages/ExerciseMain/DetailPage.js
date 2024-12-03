import '../../assets/DetailPage.css'
import testimage from '../../assets/testimage.png'
import ExDescription from './ExDescription';
import ExContentBox from './ExContentBox';
import { useState } from 'react';
import DcData from './DcData';

function DetailPage() {
    let image = testimage;

    let [contentData, setContentData] = useState([
        {
            id: '001',
            name: '푸시업',
            imageURL: image,
            content: '설명',
            flag: true
        },

        {
            id: '002',
            name: '싯업',
            imageURL: image,
            content: '설명',
            flag: false
        }
    ]);
    
        // 운동가이드 설명칸 데이터
        // 해당 난이도 객체들만 dcData로 복사
        let [dcData, setDcData] = useState(DcData.filter(DcData => DcData.difficulty == 'easy'));
        
        // contentData.flag : true인 id값 가져오기
        let [idValue, setidValue] = useState(
            contentData.filter(item => item.flag === true).map(item => item.id)
        );
        const getId = ()=>{
            setidValue(contentData.filter(item => item.flag === true).map(item => item.id));
        }

    return (
        <>
            <div className='mn-container'>
                <div className='page-title'>
                    <h1>초급자 코스</h1>
                </div>
                <div className='contentWrap'>
                    {/* 운동 컴포넌트 */}
                    {
                        contentData.map((item, index)=>{
                            return (
                                <ExContentBox
                                    contentData={contentData}
                                    setContentData={setContentData}
                                    index={index}
                                    getId={getId}
                                />
                            )
                        })
                    }
                </div>

                {/* description 컴포넌트 */}
                {
                    dcData.map((item, index)=>{
                        return (
                            item.id == idValue ?
                            <ExDescription
                                dcData={dcData}
                                setDcData={setDcData}
                                index={index}
                            /> : null
                        )
                    })
                }
            </div>

        </>
    )
}

export default DetailPage;