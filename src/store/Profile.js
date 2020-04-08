import AvatarImg from '../image/avatar.png';

const initialState = {
    chUserTitle: 'نام نام خانوادگی',
    avatar: AvatarImg,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {

        default:
            return state;
    }

}