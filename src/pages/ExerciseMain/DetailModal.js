import '../../assets/DetailModal.css'

function DetailModal( {toggleModal} ) {

    // 배경 클릭했을 때만 Modal닫기
    const backgroundClick = (event)=>{
        if(event.target.className === 'background') {
            toggleModal();
        }
    }

    return (
        <div className='background' onClick={backgroundClick}>
            <div className='modal-container'>
                <div className='changeDay left'>◀</div>
                <div className='modalTitle'>
                    <h3>1일차</h3>
                </div>

                <div className='changeDay right'>▶</div>
            </div>
        </div>
    )
}

export default DetailModal;