import '../../assets/DetailPage.css'
import ExDescription from './ExDescription';
import ExContentBox from './ExContentBox';
import { useState } from 'react';
import DcData from './DcData';
import {DetailModal, DetailModalTitle, DetailModalText, DetailModalTab} from './DetailModal';

import benchpress from '../../assets/benchpress.jpg';
import deadlift from '../../assets/deadlift.jpg';
import stepup from '../../assets/stepup.jpg';

function DetailPage02() {

    // easy : 푸시업, 싯업
    // normal : 벤치프레스, 데드리프트, 밴드스텝업
    // hard : 벤치프레스, 바벨스쿼트, 바벨로우

    // 운동 컴포넌트에 들어갈 데이터(ExContentBox)
    const [contentData, setContentData] = useState([
        {
            id: '003',
            name: '벤치프레스',
            imageURL: benchpress,
            content: '대흉근, 삼두근',
            flag: true
        },

        {
            id: '004',
            name: '데드리프트',
            imageURL: deadlift,
            content: '광배근, 둔근, 전완근',
            flag: false
        },

        {
            id: '005',
            name: '밴드스텝업',
            imageURL: stepup,
            content: '허벅지, 종아리',
            flag: false
        }
    ]);
    
    // 운동가이드 설명칸 데이터 필터링
    const [dcData, setDcData] = useState(DcData.filter(DcData => DcData.difficulty == 'normal'));
        
    // contentData.flag : true인 id값 가져오기
    const [idValue, setidValue] = useState(
        contentData.filter(item => item.flag === true).map(item => item.id)
    );
    const getId = ()=>{
        setidValue(contentData.filter(item => item.flag === true).map(item => item.id));
    }

    // Modal창 열림/닫힘
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = ()=>{ setIsModalOpen(!isModalOpen); }

    return (
        <>
            <div className='mn-container'>
                <div className='page-title'>
                    <h1>중급자 프로그램</h1>
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
                        onClick={toggleModal}
                    >Modal</button>
                </div>

                {/* 모달창 */}
                {isModalOpen && (
                    <DetailModal toggleModal={toggleModal}>
                        <DetailModalTab>
                            <DetailModalTitle>1일차</DetailModalTitle>
                            <DetailModalText>스트레칭</DetailModalText>
                            <DetailModalText>벤치프레스 2세트</DetailModalText>
                            <DetailModalText>5분 휴식</DetailModalText>
                            <DetailModalText>데드리프트 2세트</DetailModalText>
                            <DetailModalText>5분 휴식</DetailModalText>
                            <DetailModalText>밴드스텝업 5세트</DetailModalText>
                        </DetailModalTab>

                        <DetailModalTab>
                            <DetailModalTitle>2일차</DetailModalTitle>
                            <DetailModalText>스트레칭</DetailModalText>
                            <DetailModalText>벤치프레스 3세트</DetailModalText>
                            <DetailModalText>5분 휴식</DetailModalText>
                            <DetailModalText>데드리프트 3세트</DetailModalText>
                        </DetailModalTab>

                        <DetailModalTab>
                            <DetailModalTitle>3일차</DetailModalTitle>
                            <DetailModalText>스트레칭</DetailModalText>
                            <DetailModalText>벤치프레스 1세트</DetailModalText>
                            <DetailModalText>10분 휴식</DetailModalText>
                            <DetailModalText>데드리프트 3세트</DetailModalText>
                            <DetailModalText>밴드스텝업 1세트</DetailModalText>
                        </DetailModalTab>
                    </DetailModal>
                )}
            </div>

        </>
    )
}

export default DetailPage02;