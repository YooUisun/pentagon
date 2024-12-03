import testimage from '../../assets/testimage.png'

let image1 = testimage;

let DcData = [

    // {
    //     id: '001',               // 같은운동 id값 contentData와 맞추기
    //     difficulty: 'easy',      // filter : easy / normal / hard
    //     name: '#운동이름#',       // 운동이름
    //     imageURL: image1,        // 이미지 URL
    //     content1: '',            // 운동 간단설명
    //     content2: '',            // 시작자세 설명
    //     content3: '',            // 운동동작 설명
    //     content4: '',            // 호흡법 설명
    //     content5: ''             // 주의사항 설명
    // }

    {
        id: '001',
        difficulty: 'easy',
        name: '푸시업',
        imageURL: image1,
        content1: '효과가 뛰어난 맨몸 운동이에요 손 너비가 좁아질수록 가슴 안쪽, 넓어질수록 가슴 바깥쪽에 자극을 줄 수 있어요!',
        content2:
            <div>
                <p>1. 팔을 어깨너비보다 조금 넓게 벌려 엎드려주세요.</p>
                <p>2. 코어에 힘을 주어 몸을 일직선으로 만들어주세요.</p>
            </div>,
        content3:
            <div>
                <p>1. 가슴이 바닥에 닿기 직전까지 내려가 주세요.</p>
                <p>2. 이때, 팔뚝(전완)은 바닥과 수직이 되어야 합니다.</p>
                <p>3. 가슴에 힘을 주어 시작 자세로 돌아오세요.</p>
            </div>,
        content4:
            <div>
                <p>팔을 구부릴 때 숨을 들이쉬고, 팔을 밀 때 숨을 내쉬세요.</p>
            </div>,
        content5:
            <div>
                <p>1. 어깨에 무리가 가지 않도록 내려갈 수 있는 만큼만 내려가 주세요.</p>
                <p>2. 엉덩이가 내려가지 않게 코어에 힘을 유지하세요.</p>
            </div>
    },

    {
        id: '002',
        difficulty: 'easy',
        name: '싯업',
        imageURL: image1,
        content1: '코어 전체에 효과적인 운동이에요. 하지만 잘못된 동작으로 할 경우에는 허리에 부상을 줄 수 있으니 허벅지로 강하게 고정한 후 정확한 자세로 수행해 주세요!',
        content2:
            <div>
                <p>1. 무릎을 세워 바닥에 누워주세요.</p>
                <p>2. 두 손은 이마 앞에 두거나, 머리를 감싸 지탱해줍니다.</p>
            </div>,
        content3:
            <div>
                <p>1. 앉은 자세가 될 수 있게 상체를 들어 올려주세요.</p>
                <p>2. 다시 천천히 시작 자세로 돌아오세요.</p>
            </div>,
        content4:
            <div>
                <p>상체를 올릴 때 숨을 내쉬고, 상체를 내릴 때 숨을 들이쉬세요.</p>
            </div>,
        content5:
            <div>
                <p>허리가 좋지 않은 분은 싯 업을 피해주시고, 크런치로 대체해주세요.</p>
            </div>
    },

    {
        id: '003',
        difficulty: 'normal',
        name: '#중급자운동이름#',
        imageURL: image1,
        content1: '효과가 뛰어난 맨몸 운동이에요 손 너비가 좁아질수록 가슴 안쪽, 넓어질수록 가슴 바깥쪽에 자극을 줄 수 있어요!',
        content2:
            <div>
                <p>1. 팔을 어깨너비보다 조금 넓게 벌려 엎드려주세요.</p>
                <p>2. 코어에 힘을 주어 몸을 일직선으로 만들어주세요.</p>
            </div>,
        content3:
            <div>
                <p>1. 가슴이 바닥에 닿기 직전까지 내려가 주세요.</p>
                <p>2. 이때, 팔뚝(전완)은 바닥과 수직이 되어야 합니다.</p>
                <p>3. 가슴에 힘을 주어 시작 자세로 돌아오세요.</p>
            </div>,
        content4:
            <div>
                <p>팔을 구부릴 때 숨을 들이쉬고, 팔을 밀 때 숨을 내쉬세요.</p>
            </div>,
        content5:
            <div>
                <p>1. 어깨에 무리가 가지 않도록 내려갈 수 있는 만큼만 내려가 주세요.</p>
                <p>2. 엉덩이가 내려가지 않게 코어에 힘을 유지하세요.</p>
            </div>
    }
];

export default DcData;