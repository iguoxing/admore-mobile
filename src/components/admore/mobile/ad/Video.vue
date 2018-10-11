<template>
  <div class="mobile-xcx">
    <page-header></page-header>
    <nav class="second-menu flex-center-center">
      <a class="menu-item">小程序</a>
      <a class="menu-item active">视频广告</a>
    </nav>

    <!-- banner content-->
    <section>
      <div class="mobile-banner">
        <h5 class="banner-title">直击要害的视频广告</h5>
        <div class="banner-content">不同于以往视频广告侧重品牌影响，尝试通过潜移默化的方式让用户记住产品，多点视频广告更专注于将用户聚焦在特殊的广告。</div>
        <div class="banner-content">场景下，直击要害，激发用户对广告内容保持高度关注，进而直接产生转化。</div>
      </div>
      <div class="video-content">
        <article class="video-points">
            <div class="points-item">
                <div class="points-title">1亿+</div>
                <div class="points-sub-title">平均月活跃用户</div>
            </div>
            <div class="points-item">
                <div class="points-title">10%+</div>
                <div class="points-sub-title">专化水平</div>
            </div>
            <div class="points-item">
                <div class="points-title">40 min+</div>
                <div class="points-sub-title">日均播放时长</div>
            </div>
            <div class="points-item">
                <div class="points-title">70%</div>
                <div class="points-sub-title">20-40中青年群体</div>
            </div>
        </article>
        <h3 class="content-title">产品形态</h3>
        <h6 class="content-sub-title">设定一个问题，用户会带着问题播放视频<br>甚至主动反复重播</h6>
        <article class="video-main">
            <div class="main-item">
                <div class="item-content">
                    <img class="main-img" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/video/main_1.png">
                    <div class="item-number">
                        <span class="number-info">01</span>
                        <div class="item-info">
                            <div class="main-item-title">带着问题看视频</div>
                            <div class="main-sub-title">设定一个问题，用户会带着问题播放视频，甚至主动反复重播</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-item">
                <div class="item-content">
                    <div class="item-number">
                        <span class="number-info">02</span>
                        <div class="item-info">
                            <div class="main-item-title">直接转化</div>
                            <div class="main-sub-title">展现您最具吸引力的活动，直接在这里产生转化</div>
                        </div>
                    </div>
                    <img class="main-img" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/video/main_2.png">
                </div>
            </div>
        </article>
        <h3 class="content-title">可以借助视频分发这些</h3>
        <div class="video-hand">
            <div class="hand-item">
                <img class="hand-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/video/share_1.svg">
                <div class="hand-title">爆款产品</div>
            </div>
            <div class="hand-item">
                <img class="hand-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/video/share_2.svg">
                <div class="hand-title">折扣优惠</div>
            </div>
            <div class="hand-item">
                <img class="hand-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/video/share_3.svg">
                <div class="hand-title">新品尝鲜</div>
            </div>
            <div class="hand-item">
                <img class="hand-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/video/share_4.svg">
                <div class="hand-title">试用体验</div>
            </div>
        </div>
      </div>

    </section>

    <page-footer></page-footer>
  </div>
</template>
<script>
import pageHeader from '@/components/admore/mobile/base/Header';
import pageFooter from '@/components/admore/mobile/base/Footer';

export default {
  data () {
    return {
      msg: 'Welcome'
    }
  },
  created () {},
  components:{
    pageHeader,pageFooter
  }
}
</script>
<style lang="less">
// 小程序推广
.mobile-xcx{
  font-size: .2rem;
  .video-content{
    padding: .3rem 0 .8rem;
    border-bottom: solid .01rem #f6f6f6;
    .video-points{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .points-item{
          box-sizing: border-box;
          margin-bottom: .115rem;
          width: 1.51rem;
          padding-top: .38rem;
          border-radius: .032rem;
          box-shadow: 0 .08rem .16rem -.13rem rgba(37, 34, 62, 0.5);
          background-color: #fff;
          border: solid 0.007rem #e3e3e3;
          text-align: center;
          color: #464e59;
          .points-title{
            margin-bottom: .05rem;
            font-size: .23rem;
            font-weight: 600;
            letter-spacing: -0.005rem;
          }
          .points-sub-title{
            margin-bottom: .37rem;
            opacity: 0.5;
            font-size: .076rem;
            font-weight: 500;
            line-height: 1.86;
            letter-spacing: -0.002rem;
          }
        }
        .points-item:nth-child(odd){
          margin-right: .108rem;
        }
    }
    .content-title{
      margin-top: .405rem;
      margin-bottom: 0;
      font-size: .24rem;
      font-weight: 500;
      line-height: 1.25;
      text-align: center;
      color: #464e59;
    }
    .content-sub-title{
      margin-top: .11rem;
      font-size: .12rem;
      font-weight: 400;
      line-height: 1.67;
      text-align: center;
      color: #464e59;
    }
    .video-main{
      .main-item{
        background-image: linear-gradient(to bottom, #fbfcfd, #f5f7f9);
        .item-content{
          display: flex;
          .main-img{
            margin-top: .45rem;
            width: 1.42rem;
            height: 1.96rem;
          }
          .item-number{
            position: relative;
            padding-top: .1rem;
            padding-left: .16rem;
            .number-info{
              font-size: 1.37rem;
              font-weight: bold;
              text-align: center;
              color: #f1f2f5;
            }
            .item-info{
              position: absolute;
              top: 1.44rem;
              text-align: left;
              color: #464e59;
              .main-item-title{
                margin-bottom: .1rem;
                font-size: .14rem;
                font-weight: 500;
                letter-spacing: -0.003rem;
              }
              .main-sub-title{
                width: 1.48rem;
                font-size: .12rem;
                font-weight: 400;
                line-height: 1.5;
                letter-spacing: -0.002rem;
                color: #464e59;
              }
            }
          }
          
        }
      }
      .main-item:first-child{
        .main-img{
          margin-left: .37rem;
        }
        .item-info{
          top: 1.27rem;
          .main-sub-title{
            width: 1.31rem;
          }
        }
      }
    }
    .video-hand{
      display: flex;
      margin-top: .3rem;
      padding: 0 .3rem;
      .hand-item{
        margin-right: .36rem;
        .hand-icon{
          margin-bottom: .1rem;
          height: .5rem;
        }
        .hand-title{
          font-size: .12rem;
          font-weight: 500;
          letter-spacing: -0.002rem;
          color: #464e59;
        }
      }
      .hand-item:last-child{
        margin-right: 0;
      }
    }
  }
}

.second-menu{
  margin-top: .56rem;
  height: .5rem;
  font-size: .15rem;
  font-weight: 500;
  color: #667282;
  border-bottom: solid .01rem #eaeaea;
  .menu-item{
    margin-right: .5rem;
  }
  .menu-item.active{color: #008bff;}
  .menu-item:last-child{
    margin-right: 0;
  }

}

.mobile-banner{
  padding: .3rem;
  text-align: left;
  background-image: linear-gradient(174deg, #7b6ef7, #c689f1);
  color: #fff;
  font-weight: 400;
  .banner-title{
    margin-top: 0;
    margin-bottom: .18rem;
    line-height: 1.31;
    font-size: .26rem;
  }
  .banner-content{
    margin-bottom: .2rem;
    font-size: .13rem;
    line-height: 1.69;
  }
  .banner-content:last-child{margin-bottom: 0}
}



</style>



