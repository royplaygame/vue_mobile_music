export default {
    memberInfo(state) {
        switch (state.userStatus) {
            case 0:
                return '普通会员';
                // eslint-disable-next-line no-unreachable
                break;
            case 1:
                return 'VIP会员';
                // eslint-disable-next-line no-unreachable
                break;
            case 2:
                return '高V会员';
                // eslint-disable-next-line no-unreachable
                break;
            case 3:
                return '超V会员';
                // eslint-disable-next-line no-unreachable
                break;
            default:
                return '普通会员';
        }
    }
}
