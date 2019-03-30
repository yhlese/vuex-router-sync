import AssetsConfig from './router.assets.config';
import MemberConfig from './router.member.config';
const Main = {
  name: 'main',
  path: '/',
  desc: 'main主页面'
}

export default {
  Main,
  Assets: {
    ...AssetsConfig
  },
  Member: {
    ...MemberConfig
  }
}
