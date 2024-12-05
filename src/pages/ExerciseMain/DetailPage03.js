import '../../assets/DetailPage.css'
import testimage from '../../assets/testimage.png'
import ExDescription from './ExDescription';
import ExContentBox from './ExContentBox';
import { useState } from 'react';
import DcData from './DcData';
import {DetailModal, DetailModalTitle, DetailModalText, DetailModalTab} from './DetailModal';

function DetailPage03() {
    let image = testimage;

    // easy : 푸시업, 싯업
    // normal : 벤치프레스, 데드리프트, 밴드스텝업
    // hard : 벤치프레스, 바벨스쿼트, 바벨로우

    // 운동 컴포넌트에 들어갈 데이터(ExContentBox)
    let [contentData, setContentData] = useState([
        {
            id: '006',
            name: '벤치프레스',
            imageURL: image,
            content: '설명',
            flag: true
        },

        {
            id: '007',
            name: '바벨스쿼트',
            imageURL: image,
            content: '설명',
            flag: false
        },

        {
            id: '008',
            name: '바벨로우',
            imageURL: image,
            content: '설명',
            flag: false
        }
    ]);
    
    // 운동가이드 설명 데이터 필터링
    let [dcData, setDcData] = useState(DcData.filter(DcData => DcData.difficulty == 'hard'));
    
    // contentData.flag : true인 id값 가져오기
    let [idValue, setidValue] = useState(
        contentData.filter(item => item.flag === true).map(item => item.id)
    );
    const getId = ()=>{
        setidValue(contentData.filter(item => item.flag === true).map(item => item.id));
    }

    // Modal창 열림/닫힘
    let [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = ()=>{ setIsModalOpen(!isModalOpen); }

    return (
        <>
            <div className='mn-container'>
                <div className='page-title'>
                    <h1>숙련자 프로그램</h1>
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

                {/* 모달 버튼 */}
                <div className='btnContainer'>
                    <button
                        type='button'
                        style={{width: '100px', height: '50px'}}
                        onClick={toggleModal}
                    >Modal</button>
                </div>

                {/* 모달창 */}
                {isModalOpen && (
                    <DetailModal toggleModal={toggleModal}>
                        <DetailModalTab>
                            <DetailModalTitle>
                                제목1
                            </DetailModalTitle>
                            <DetailModalText>
                                tab1 text1
                            </DetailModalText>
                            <DetailModalText>
                                tab1 text2
                            </DetailModalText>
                        </DetailModalTab>

                        <DetailModalTab>
                            <DetailModalTitle>
                                제목2
                            </DetailModalTitle>
                            <DetailModalText>
                                tab2 text1
                            </DetailModalText>
                            <DetailModalText>
                                tab2 text2
                            </DetailModalText>
                        </DetailModalTab>

                        <DetailModalTab>
                            <DetailModalTitle>
                                제목3
                            </DetailModalTitle>
                            <DetailModalText>
                                tab3 text1
                            </DetailModalText>
                            <DetailModalText>
                                tab3 text2
                            </DetailModalText>
                        </DetailModalTab>
                    </DetailModal>
                )}
            </div>

        </>
    )
}

export default DetailPage03;