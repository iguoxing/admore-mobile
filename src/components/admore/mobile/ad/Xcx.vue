<template>
  <div class="mobile-xcx">
    <pageHeader></pageHeader>
    <nav class="second-menu flex-center-center">
      <a class="menu-item active">小程序</a>
      <a class="menu-item">视频广告</a>
    </nav>

    <!-- banner content-->
    <section>
      <div class="mobile-banner">
        <h5 class="banner-title">为你的小程序，获取<br>更多用户</h5>
        <div class="banner-content">直接获取你的新用户，任何类型预算级别的小程序都有机会。</div>
      </div>
      <div class="xcx-content">
        <article class="content-aim">
            <div class="content-title">帮你达成营销目标</div>
            <div class="aim-item">
                <img class="aim-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/img/miniprogram/aim_1.svg">
                <div>
                  <label class="aim-title">免费</label>
                  <div class="aim-info">再小的程序也能获取免费流量</div>
                </div>
            </div>
            <div class="aim-item">
                <img class="aim-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/img/miniprogram/aim_2.svg">
                <div>
                  <label class="aim-title">1000万</label>
                  <div class="aim-info">千万级流量入口，无偿提供服务</div>
                </div>
            </div>
            <div class="aim-item">
                <img class="aim-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/img/miniprogram/aim_3.svg">
                <div>
                  <label class="aim-title">迅捷</label>
                  <div class="aim-info">无门槛极速接入，推广就要先人一步</div>
                </div>
            </div>
            <div class="aim-item">
                <img class="aim-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/img/miniprogram/aim_4.svg">
                <div>
                  <label class="aim-title">高效</label>
                  <div class="aim-info">高效率的推广，带来更多流量和转化</div>
                </div>
            </div>
        </article>

        <article class="pro-state">
            <div class="content-title">产品形态</div>
              <div class="state-item">
                  <img class="state-img" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/miniprogram/banner_1.png">
                  <div class="state-title">每一个小程序，都有机会获得流量</div>
                  <div class="state-info">所有小程序在广场可以获得均等的曝光机会，发挥小程序自身的亮点，以获得用户青睐。</div>
              </div>
              <div class="state-item">
                  <img class="state-img" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/miniprogram/banner_2.png">
                  <div class="state-title">同步展示·PC小程序商店</div>
                  <div class="state-info">同步的展示机会，确保流量不浪费。</div>
              </div>
        </article>

        <article class="they-say">
            <div class="content-title">产品形态</div>
            <div class="they-content">
                <div class="they-item">
                    <img class="they-banner" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/miniprogram/they_1.png">
                    <div class="they-type">教育</div>
                    <div class="they-title">我们用7天时间获得了种子用户</div>
                    <div class="they-info">
                        <img class="they-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/miniprogram/zuiqiang.png">
                        <label class="they-name">试你最强</label>
                    </div>
                </div>
                <div class="they-item">
                    <img class="they-banner" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/miniprogram/they_2.png">
                    <div class="they-type">游戏</div>
                    <div class="they-title">冷启动不易，好在我们找对了用户</div>
                    <div class="they-info">
                        <img class="they-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/miniprogram/choujiang.jpeg">
                        <label class="they-name">小区抽奖</label>
                    </div>
                </div>
                <div class="they-item">
                    <img class="they-banner" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/miniprogram/they_3.png">
                    <div class="they-type">应用</div>
                    <div class="they-title">为数不多的小程序流量，挺值</div>
                    <div class="they-info">
                        <img class="they-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/miniprogram/quanzi.jpg">
                        <label class="they-name">圈子</label>
                    </div>
                </div>
            </div>
        </article>

      </div>

    </section>

    <pageFooter></pageFooter>
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
  .mobile-banner{
    .banner-content{padding-bottom: .5rem;}
  }
  .xcx-content{
    padding:0;
    .content-title{
      margin: .4rem auto;
      font-size: .24rem;
      font-weight: 500;
      line-height: 1.25;
      text-align: center;
      color: #464e59;
    }
    .content-aim{
      border-bottom: solid .01rem rgba(151, 151, 151, 0.1);
      .aim-item{
        display: flex;
        align-items: center;
        justify-content:left;
        margin-bottom: .3rem;
        padding-left: .47rem;
        text-align: left;
        color: #464e59;
        font-weight: 500;
        .aim-icon{
          margin-right: .3rem;
          width: .6rem;

        }
        .aim-title{
          margin-bottom: .02rem;
          font-size: .18rem;
        }
        .aim-info{
          opacity: 0.5;
          font-size: .12rem;
        }
      }

    }
    .pro-state{
      .state-item{
        color: #515863;
        .state-img{
          margin-bottom: .3rem;
          width: 3rem;
        }
        .state-title{
          margin-bottom: .16rem;
          font-size: .16rem;
          font-weight: 500;
          letter-spacing: -0.005rem;
        }
        .state-info{
          width: 3rem;
          margin: 0 auto .4rem;
          opacity: 0.5;
          font-size: .12rem;
          line-height: 1.67;
          letter-spacing: -0.002rem;
        }
      }

    }
    .they-say{
      padding: .4rem .3rem .5rem;
      background-image: linear-gradient(to bottom, #fbfcfd, #f5f7f9);
      box-shadow: inset 0 -0.5px 0 0 #cdcdcd, inset 0 0.5px 0 0 #cdcdcd;
      .they-content{
        
        .they-item{
          position: relative;
          margin-bottom: .3rem;
          text-align: left;
          border-radius: .055rem;
          background-color: #fff;
          font-weight: 500;
          .they-banner{
            position: absolute;
            right: 0;
            width: 2.4rem;
          }
          .they-type{
            margin-bottom: .07rem;
            padding-top: 2.26rem;
            padding-left: .16rem;
            font-size: .12rem;
            letter-spacing: -0.002rem;
            color: #1069ff;
          }
          .they-title{
            margin-bottom: .09rem;
            padding-left: .16rem;
            font-size: .15rem;
            letter-spacing: -0.003rem;
            color: #000;
          }
          .they-info{
            display: flex;
            align-items: center;
            height: .69rem;
            padding-left: .16rem;
            background-color: #fff;
            box-shadow: inset 0 .01rem 0 0 rgba(227, 227, 227, 0.5);
            .they-icon{
              margin-right: .13rem;
              width: .37rem;
            }
            .they-name{
              font-size: .16rem;
              letter-spacing: -0.003rem;
              color: #000;
            }
          }
        }
      }
    }
  }
}

</style>