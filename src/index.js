import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

/* countmodifier 에서만 값을 수정 할 수 있음 */
const countModifier = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
};

/* 값을 저장하는 공간 */
const countStore = createStore(countModifier);

/* 값을 대입하는 코드 */
const onChange = () => {
    number.innerText = countStore.getState();
};

/* countmodifier 과 값을 이어주는 코드 */
// object 타입만 값이 들어갈 수 있음
const handleAdd = () => {
    countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
    countStore.dispatch({ type: MINUS });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
