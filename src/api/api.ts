import axios from "./axios";

const api = {}

api.game = gid => axios.get('/game/game', { params: { gid } }); // 获取游戏数据
api.game_detail = gid => axios.get('/game/game_detail', { params: { gid } }); // 游戏详细资料
api.server = gid => axios.get('/game/server', { params: { gid } }); // 获取游戏伺服器
api.type = gid => axios.get('/game/type', { params: { gid } }); // 获取游戏列表
api.platform = data => axios.get('/game/platform', { params: { ...data } }); // 平台筛选游戏
api.platform2 = oa => axios.get('/Home/index/getNews', { params: { oa } }); // 平台筛选游戏

export default api