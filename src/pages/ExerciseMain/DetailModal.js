import '../../assets/DetailModal.css';
import { useState } from 'react';

function DetailModal({ children, toggleModal }) {
    // 배경 클릭 시 Modal 닫기
    const backgroundClick = (event) => {
        if (event.target.className === 'background') {
            toggleModal();
        }
    };
    
    // 현재 탭
    const [currentTab, setCurrentTab] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    
    // ▶ 클릭 시 다음 탭으로 이동
    const nextTab = () => {
        if (currentTab < children.length - 1) {
            setCurrentTab(currentTab + 1);
            setIsAnimating(true);
        }
    };
    
    // ◀ 클릭 시 이전 탭으로 이동
    const prevTab = () => {
        if (currentTab > 0) {
            setCurrentTab(currentTab - 1);
            setIsAnimating(true);
        }
    };

    // 애니메이션 상태 리셋
    const handleAnimationEnd = () => {
        setIsAnimating(false);
    };

    return (
        <div className="background" onClick={backgroundClick}>
            <div className="modal-container">
                <div className="changeTab left" onClick={prevTab}>◀</div>
                <div className="changeTab right" onClick={nextTab}>▶</div>

                {/* 현재 탭만 출력 */}
                <div
                    className={"tabWrap" + (isAnimating ? " animating" : "")}
                    onAnimationEnd={handleAnimationEnd}
                >
                    {children[currentTab]}
                </div>

                <div className="indicator-container">
                    {children.map((item, index) => {
                        return(
                            <div key={index} className={"indicator" + (index === currentTab ? " active" : "")}></div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

// Modal Tab 생성
const DetailModalTab = ({ children }) => {
    return (
        <div className="tab">
            {children}
        </div>
    );
};

const DetailModalTitle = ({ children }) => {
    return (
        <div className="modalTitle">
            <h3>{children}</h3>
        </div>
    );
};

const DetailModalText = ({ children }) => {
    return (
        <div className="modalText">
            {children}
        </div>
    );
};

export { DetailModal, DetailModalTitle, DetailModalText, DetailModalTab };
