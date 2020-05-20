import {LOGIN, SET_MEMBER_INFO} from './mutation-types'

export default {

    [LOGIN](state, {userInfo}) {
        state.userInfo = userInfo;
    },
    [SET_MEMBER_INFO](state, {vip}) {
        state.userStatus = vip.userStatus;
        state.vipLevel = vip.vipLevel;
    }

}
