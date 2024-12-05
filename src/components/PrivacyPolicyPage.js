import React from 'react';
import './PrivacyPolicyPage.css'; //css 스타일
import Header from './Header';
import Footer from './Footer';

function PrivacyPolicyPage() {
    return (
    <>
    <Header/>
        <div className="privacy-policy-container">
            <h2 className="Privacy-policy-title">개인정보 처리방침</h2>
                <p className="privacy-policy-text">
                    주식회사 펜타곤(이하 ‘회사’라 한다)은 관련 법령에 따라 정보주체의 개인정보를 보호하고, 
                    이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 
                    다음과 같이 개인정보 처리방침을 수립 및 공개합니다.
                </p>
            <h3 className="Privacy-section-title">제1조 (개인정보의 처리목적)</h3>
                <p className="privacy-policy-text">
                    회사는 다음의 목적을 위하여 개인정보를 처리합니다.
                </p>
                <ul className="privacy-policy-list">
                    <li>1. 회원 가입 및 관리</li>
                    <li>2. 회사 서비스 제공</li>
                    <li>3. 마케팅 및 광고에 활용</li>
                    <li>4. 서비스 효과 분석</li>
                    <li>5. 서비스 제공에 따른 요금정산 및 추심</li>
                    <li>6. 문의사항 및 고충처리, 공지사항 전달</li>
                </ul>
            <h3 className="Privacy-section-title">제2조 (처리하는 개인정보 항목 및 수집방법)</h3>
                <p className="privacy-policy-text">회사는 다음의 개인정보 및 서비스 이용에 필요한 
                                                    정보 항목을 처리하고 있습니다.
                </p>
                <ul className="privacy-policy-list">
                    <li>1. 정보주체가 회원 가입시 입력 또는 정보주체의 동의로 제3자 등으로부터 제공받음</li>
                    <li>2.서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집: 
                        IP주소, 쿠키, MAC주소, 서비스이용기록, 방문기록, 접속 로그</li>
                    <li>3.고충처리 과정에서 정보주체로부터 수집: 이름, ID, 휴대전화번호</li>
                </ul>

            <h3 className="Privacy-section-title">제3조 (개인정보의 처리 및 보유기간)</h3>
                <p className="privacy-policy-text">회사는 회원의 탈퇴 시 회원의 개인정보를 즉시 파기합니다. 
                다만, 다음의 사유에 해당하는 경우에는해당 기간 종료시까지 보존합니다.
                </p>
                <ul className="privacy-policy-list">
                    <li>1.서비스 이용 관련 개인정보(로그인기록) 보존 근거 : 통신비밀보호법 보존 기간 : 3개월</li>
                    <li>2.계약 또는 청약철회 등에 관한 기록 보존 근거 : 전자상거래 등에서의 소비자보호에 관한 법률상보존 기간 : 5년</li>
                    <li>3.대금결제 및 재화 등의 공급에 관한 기록 보존 근거 : 전자상거래 등에서의 소비자보호에 관한법률상 보존 기간 : 5년</li>
                    <li>4.소비자의 불만 또는 분쟁처리에 관한 기록 보존 근거 : 전자상거래 등에서의 소비자보호에 관한법률상 보존 기간 : 3년</li>
                    <li>5.전자금융 거래에 관한 기록 보존 근거 : 전자금융거래법상 보존 기간 : 5년</li>
                </ul>
                <p className="privacy-policy-text">위 제1항에도 불구하고 회사는 회원의 탈퇴 시 회원의 서비스 이용정보에 대해서는 법령에 위반되지않는 범위에서 회원이 동의한 회사의 이용약관에 따라 보존할 수 있습니다.</p>

            <h3 className="Privacy-section-title">제4조 (개인정보의 제3자 제공)</h3>
                <p className="privacy-policy-text">회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 
                    정보주체의 동의를 받거나 법률의 특별한 규정이 있는 경우에만 개인정보를 제3자에게 제공합니다.</p>

            <h3 className="Privacy-section-title">제5조 (정보주체의 권리․의무 및 행사방법)</h3>
            <p className="privacy-policy-text">① 정보주체는 회사에 대해 언제든지 다음 
                각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</p>
                <ul className="privacy-policy-list">
                    <li>1.개인정보 열람요구</li>
                    <li>2.오류 등이 있을 경우 정정 요구</li>
                    <li>3.삭제요구</li>
                    <li>4.처리정지 요구</li>
                </ul>
                <p className="privacy-policy-text">② 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편을 통하여 하실 수 있으며, 
                    회사는 이에 대해 지체없이 조치하겠습니다.</p>
                <p className="privacy-policy-text">③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는
                    회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.</p>
                <p className="privacy-policy-text">④ 제1항에 따른 권리 행사는 
                    정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 회사에 위임장을 제출하셔야 합니다.</p>
                <p className="privacy-policy-text">⑤ 정보주체는 개인정보 보호법 등 관계법령을 위반하여 
                    회사가 처리하고 있는 정보주체 본인이나 타인의 개인정보 및 사생활을 침해하여서는 아니됩니다.</p>

            <h3 className="Privacy-section-title">제6조 (개인정보의 파기)</h3>
            <p className="privacy-policy-text">① 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 
                개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.</p>
            <p className="privacy-policy-text">② 정보주체로부터 동의 받은 개인정보 보유기간이 경과하거나 
                처리목적이 달성되었음에도 불구하고 제3조에 기재된 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 
                해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.</p>
            <p className="privacy-policy-text">③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.</p>
                <ul className="privacy-policy-list">
                    <li>1. 파기절차 : 회사는 파기 사유가 발생한 개인정보를 선정하고,
                        회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.</li>
                    <li>2. 파기방법 : 회사는 전자적 파일 형태로 기록 및 저장된 개인정보는 기록을 재생할 수 없도록
                        기술적 방법을 이용하여 파기하며, 종이 문서에 기록 및 저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.</li>
                </ul>

                <h3 className="Privacy-section-title">제7조 (개인정보의 안전성 확보조치)</h3>
                <p className="privacy-policy-text">회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
                    <ul className="privacy-policy-list">
                        <li>1. 기술적 조치 : 회원의 개인정보는 비밀번호에 의해 보호되며, 
                        중요한 데이터는 파일 및 전송 데이터를 암호화하거나 
                        파일 잠금 기능을 사용하는 등의 별도 보안기능을 통해 보호하고 있습니다.</li>
                        <li>2. 관리적 조치 : 개인정보관련 취급 직원은 담당자에 한정시켜 최소화 하고
                        개인정보보호 의무에 관해 정기적인 교육을 실시하며 
                        접근 권한을 관리하는 등 관리적 대책을 시행하고 있습니다.</li>
                    </ul>

                <h3 className="Privacy-section-title">제8조 (개인정보 자동 수집 장치의 설치∙운영 및 거부에 관한 사항)</h3>
                <p className="privacy-policy-text">① 회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해
                    이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.</p>
                <p className="privacy-policy-text">② 쿠키는 웹사이트 등을 운영하는데 이용되는 서버가 
                    이용자의 모바일 기기에게 보내는 소량의 정보이며 
                    이용자들의 모바일 기기내 저장공간 등에 저장되기도 합니다.</p>
                        <ul className="privacy-policy-list">
                            <li>가. 쿠키의 사용목적: 이용자의 접속 빈도나 방문 시간 등을 분석,
                            이용자의 서비스 사용 패턴 파악 및 자취 추적,
                            각종 방문 횟수 파악 등을 통해 보안 관리 및 서비스 이용 개선에 이용</li>
                            <li>나. 쿠키의 설치∙운영 및 거부 : 서비스 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다.
                            따라서, 이용자는 쿠키가 저장될 때마다 확인을 거치거나, 
                            아니면 모든 쿠키의 저장을 거부할 수 있습니다. 
                            단, 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</li>
                        </ul>
                <p className="privacy-policy-text">③ 회사는 비개인식별정보를 통해 서비스 효율성을 제고하고 사용자 경험을 향상시키고 있습니다.</p>

<h3 className="Privacy-section-title">제9조 (개인정보 보호책임자)</h3>
<p className="privacy-policy-text">① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
    개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여
    아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
    <p className="privacy-policy-text">▶ 개인정보 보호책임자</p>
    <p className="privacy-policy-text">성명 : 유의선</p>
    <p className="privacy-policy-text">직책 : 대표이사</p>
    <p className="privacy-policy-text">연락처 : 010-1234-5678, pentagon@pentagon.co.kr</p>
    <p className="privacy-policy-text">※ 개인정보 보호 담당부서로 연결됩니다.</p>
    <p className="privacy-policy-text">② 정보주체께서는 회사의 서비스(또는 사업)을 이용하시면서
        발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을
        개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.
        회사는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.</p>

        <h3 className="Privacy-section-title">제10조 (개인정보 열람청구)</h3>

        <p className="privacy-policy-text">정보주체는 개인정보보호법에 따른 개인정보의 열람 청구를
            아래의 부서에 할 수 있습니다.
            회사는 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.</p>

            <p className="privacy-policy-text">▶ 개인정보 열람청구 접수 & 처리 부서</p>

            <p className="privacy-policy-text">부서명 : 펜타곤(Pentagon)</p>

            <p className="privacy-policy-text">담당자 : 강태양</p>

            <p className="privacy-policy-text">연락처 : 010-1234-5678, sun@pentagon.co.kr</p>

            <h3 className="Privacy-section-title">제11조 (개인정보 처리방침의 적용일 및 변경)</h3>
            <p className="privacy-policy-text">이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 공지할 것입니다.</p> 
        </div>
        <Footer/>
        </>
    )
}

export default PrivacyPolicyPage;