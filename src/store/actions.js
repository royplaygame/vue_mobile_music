import {LOGIN, SET_MEMBER_INFO} from './mutation-types'

export default {

    login({commit}, userInfo) {
        commit(LOGIN, {userInfo})
    },
    setMemberInfo({commit}, vip) {
        commit(SET_MEMBER_INFO, {vip})
    },
    buyVip({commit}, vip) {
        // mock api
        setTimeout(() => {
            // modify state
            commit(SET_MEMBER_INFO, {vip})
        }, 1000)
    }
}
