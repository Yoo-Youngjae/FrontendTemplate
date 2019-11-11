import * as actionTypes from './actionTypes';
import { push } from 'connected-react-router';
import axios from 'axios'

export const loginUser_ = (user) => {
    return {
        type: actionTypes.LOGIN,
        uid: user.id,
        username: user.username,
        nickname: user.nickname,
    };
};
export const loginUser = (user) => {
    return dispatch => {
        return axios.post('/api/user/signin/',user)
            .then(res => {
                dispatch(loginUser_(res.data));
                dispatch(push('/feverstart'));

            })
            .catch(()=>{
            })
    };
};