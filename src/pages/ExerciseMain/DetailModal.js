import '../../assets/DetailModal.css'
import { useState, useEffect } from 'react';

function DetailModal( {children, toggleModal} ) {

    // 배경 클릭시 Modal닫기
    const backgroundClick = (event)=>{
        if(event.target.className === 'background') {
            toggleModal();
        }
    };

    return (
        <div className='background' onClick={backgroundClick}>
            <div className='modal-container'>
                <div className='changeDay left'>◀</div>
                <div className='changeDay right'>▶</div>

                {children}
            </div>
        </div>
    )
}

const DetailModalTitle = ({children})=>{
    return(
        <div className='modalTitle'>
            <h3>{children}</h3>
        </div>
    )
};

const DetailModalText = ({children})=>{
    return(
        <div className='modalText'>
            {children}
        </div>
    )
}

// Modal Tab생성
const DetailModalTab = ({children})=>{
    return(
        <div className='tab'>
            {children}
        </div>
    )
}

// export default DetailModal;

export {DetailModal, DetailModalTitle, DetailModalText, DetailModalTab};