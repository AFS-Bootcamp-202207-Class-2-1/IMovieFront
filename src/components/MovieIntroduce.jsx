import React from 'react';
import detail_introduce_icon from '../assets/iconfont/detail_introduce_icon.png'

const MovieIntroduceHeader = () => {
    return (
        <div>
            <div className="movie-introduce-header">
                <img src={detail_introduce_icon} alt="logo" className="movie-introduce-icon"/>
                <h4>剧情简介</h4>
            </div>
            <div className="movie-introduce-body">
                        高分火爆热映中！古天乐亲任总监制！华语科幻年度震撼巨献！机甲大战外星生物，硬核守护家园！ 未来世界地球污染严重，一枚外太空陨石突如其来，
                    带着外星生命体潘朵拉降临人间，袭击人类。空战部队泰来（古天乐饰）与队长郑重生（刘青云饰）前往执行拯救地球的任务，却遭遇前所未见的怪物袭击，
                    机甲军团与外星异形生物展开超燃大战，千难万难誓死捍卫家园，上演了一场酣畅淋漓的激爽对决。然而，在牺牲队友身上意外发现的神秘信号，让泰来开始
                    思考真相到底是什么，难道真正致命的并不是眼前的一切，而是自己身后迷雾之中一场巨大的阴谋…
            </div>
        </div>
    );
};

export default MovieIntroduceHeader;