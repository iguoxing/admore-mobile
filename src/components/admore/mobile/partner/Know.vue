<template>
  <div class="mobile-know">
    <pageHeader></pageHeader>
    <nav class="second-menu flex-center-center">
      <a class="menu-item active">了解推客</a>
      <a class="menu-item">任务与奖励</a>
      <a class="menu-item">资料与动态</a>
    </nav>

    <!-- banner content-->
    <section class="know-content">
      <div class="mobile-banner">
        <h5 class="banner-title">多点推荐返利计划</h5>
        <div class="banner-content">
          成为多点广告官方推广大使：客户前一万投放量每笔订<br>
          单返现 | 30日到账<br>
          做激励广告链条的顶级受益人
        </div>
        <a class="banner-btn">免费成为 多点推客</a>
      </div>
      <!-- 特点介绍 -->
      <article class="partner-points">
          <div class="points-item points-1">
              <img class="points-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/cooperation/icon-1.png"></img>
              <h3 class="points-title">利益抓手</h3>
              <div class="points-sub-title">
                  分享专属 55 折优惠券，高效获客！
              </div>
              <a href="${ctx}/partner/task" class="points-link">任务与奖励</a>
          </div>
          <div class="points-item">
              <img class="points-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/cooperation/icon-2.png"></img>
              <h3 class="points-title">10%返利</h3>
              <div class="points-sub-title">客户用券首购直接返利！</div>
              <a href="${ctx}/partner/task" class="points-link">任务与奖励</a>
          </div>
          <div class="points-item">
              <img class="points-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/cooperation/icon-3.png"></img>
              <h3 class="points-title">赋能支持</h3>
              <div class="points-sub-title">了解多点广告业务，掌握获客绝学！</div>
          </div>
          <div class="points-padding"></div>
      </article>

      <!-- 推广流程 -->
      <h3 class="know-title">推广流程</h3>
      <article class="know-spread">
          <div class="spread-item">
              <div class="spread-sub-title">1. 成为多点推客</div>
              <div class="spread-info">注册账号，加入多点推客团队。</div>
              <img class="spread-arrow" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/cooperation/arrow.png">
          </div>
          <div class="spread-item">
              <div class="spread-sub-title">2. 分享专属优惠</div>
              <div class="spread-info">在您的个人中心获取专属链接，分享专属优惠券。</div>
              <img class="spread-arrow" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/cooperation/arrow.png">
          </div>
          <div class="spread-item">
              <div class="spread-sub-title">3. 获得推广返利</div>
              <div class="spread-info">客户在 30 天内首购，获得首款应用每笔订单 10% 返利，新品永久5%返利！</div>
              <img class="spread-arrow" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/cooperation/arrow.png">
          </div>
          <div class="spread-item last">
              <div class="spread-sub-title">4. 每单 30 天到账</div>
              <div class="spread-info">按单结算，每笔订单完成满 30 天自动提醒到账。</div>
          </div>
          <div class="spread-padding"></div>
      </article>

      <!-- 推客攻略 -->
      <h3 class="know-title">推广流程</h3>
      <article class="know-strateges">
        <div class="strateges-item strateges-1">
            <div class="strateges-sub-title">
                优惠券大礼包
            </div>
            <div class="strateges-third-title">推客利益</div>
            <div class="strateges-info">通过优惠券礼包与潜在买家建立推广关系，买家首购持续返利！</div>
            <div class="strateges-third-title">买家利益</div>
            <div class="strateges-info">获得推客分享的专属优惠券，更低价购买服务！</div>
            <a class="strateges-link">查看礼包></a>
            <img class="strateges-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/cooperation/strategy-1.png">
        </div>
        <div class="strateges-item strateges-2">
            <div class="strateges-sub-title">赋能学习支持</div>
            <div class="strateges-third-title">优质资料</div>
            <div class="strateges-info">高效了解市场行情与多点广告三大业务，以及优秀推客经验分享！</div>
            <div class="strateges-third-title">关注公众号：</div>
            <div class="strateges-info">及时获取最新行业动态。快捷、精准获客！</div>
             <a class="strateges-link">查看资料></a>
            <img class="strateges-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home%2Fv3%2Fimg%2Fpartner%2Flearn_code.png">
        </div>
        <div class="strateges-item strateges-3">
            <div class="strateges-sub-title">多点官方支持</div>
            <div class="strateges-third-title">添加官方客服，专人 1对1 解决您的所有疑问</div>
            <img class="strateges-code" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/cooperation/offical_code.png">
            <img src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v2/img/cooperation/strategy-3.png" class="strateges-icon">
        </div>
      </article>

      <!-- 底部banner -->
      <article class="know-profit">
          <div class="profit-title">成为多点广告<br>官方推广大使</div>
          <div class="profit-sub-title">做激励广告链条的顶级受益人</div>
          <a class="profit-btn" href="${site_host}/ambregister" target="_blank">免费成为 <label> 多点推客</label></a>
      </article>
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
.mobile-know{
  font-size: .2rem;
  .mobile-banner{
    text-align: center;
    background-image: linear-gradient(176deg, #54a4ff, #4297ff);
    .banner-title{margin-bottom: .15rem;}
    .banner-content{margin-bottom: .36rem;}
  }
  .know-content{
    .partner-points{
      display: -webkit-box;
      overflow-x: scroll;
      -webkit-overflow-scrolling:touch;
      margin-top:.3rem;
      .points-item{
        margin-right: .14rem;
        width: 2.1rem;
        height: 2.7rem;
        border-radius: .056rem;
        box-shadow: 0 .11rem .21rem -.13rem rgba(0, 0, 0, 0.23);
        border: solid 0.007rem #e3e3e3;
        background-color: #fff;
        .points-icon{
          margin: .35rem auto .15rem;
          height: .69rem;
        }
        .points-title{
          margin: 0 auto .075rem;
          font-size: .17rem;
          font-weight: 600;
          color: #1069ff;
        }
        .points-sub-title{
          margin: 0 auto .21rem;
          width: 1.68rem;
          height: .39rem;
          text-align: left;
          font-size: .13rem;
          line-height: 1.56;
          color: #000;
        }
        .points-link{
          font-size: .13rem;
          font-weight: 500;
          line-height: 1.89;
          color: #0064ff;
        }
      }
      .points-item:first-child{
        margin-left: .3rem;
      }
      .points-item.last{
        margin-left: .3rem;
      }
      .points-padding{
        width: .16rem;
      }
    }

  }
  .know-spread{
    position: relative;
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling:touch;
    margin-top: .18rem;
    padding: .31rem 0;
    box-shadow: inset 0 -0.005rem 0 0 #cdcdcd, inset 0 0.005rem 0 0 #cdcdcd;
    background-image: linear-gradient(to bottom, #fbfcfd, #f5f7f9);
    .spread-item{
      position: relative;
      margin-right: .7rem;
      width: 1.54rem;
      height: 1.44rem;
      padding: .26rem .18rem 0 .18rem;
      box-sizing: border-box;
      border-radius: .06rem;
      box-shadow: 0 .07rem .14rem -.09rem rgba(210, 220, 231, 0.56);
      background-color: #fff;
      .spread-sub-title{
        margin-bottom: .11rem;
        font-size: .15rem;
        font-weight: 500;
        color: #000;
      }
      .spread-info{
        text-align: left;
        opacity: 0.6;
        font-size: .13rem;
        line-height: 1.56;
        color: #000;
      }
      .spread-arrow{
        position: absolute;
        right: -.5rem;
        top: .65rem;
      }
    }
    .spread-item:first-child{margin-left: .3rem;}
    .spread-item.last{margin-right: .3rem;}
    .spread-padding{
      width: .01rem;
    }
  }
  .know-strateges{
    margin-top: .3rem;
    .strateges-item{
      position: relative;
      margin: 0 auto .3rem;
      width: 3.15rem;
      height: 5.47rem;
      text-align: left;
      padding-top: .3rem;
      border-radius: .03rem;
      border: solid .03rem #e9debd;
      background-color: #fff;
      .strateges-sub-title{
        margin-bottom: .3rem;
        text-align: center;
        font-size: .24rem;
        font-weight: 500;
        color: #000;
      }
      .strateges-third-title,
      .strateges-info{
        margin-left: .3rem;
        margin-bottom: .3rem;
        font-size: .18rem;
        line-height: 1.61;
        color: #000;
      }
      .strateges-info{
        margin-bottom: .33rem;
        color: rgba(0, 0, 0, 0.5);
      }
      .strateges-icon{
        position: absolute;
        bottom: 0;
        right: 0;
      }
      .strateges-link{
        display: block;
        margin-top: 1.67rem;
        margin-left: .3rem;
        font-size: .18rem;
        line-height: 1.89;
        color: #0064ff;
      }
      .strateges-code{
        display: block;
        margin: 0.45rem auto 0;
        text-align: center;
        width: 1.69rem;
      }
    }
    .strateges-item.strateges-2{
      .strateges-icon{
        height: 1.92rem;
      }
    }
  }
  .know-profit{
      display: flex;
      width: 100%;
      min-height: 3.68rem;
      background: url(https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/partner/become_banner.jpg) 0 0 no-repeat;
      background-size: cover;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      -webkit-background-size: cover;
      .profit-title{
        margin-bottom: .2rem;
        font-size: .36rem;
        line-height: 1.25;
        text-align: center;
        color: #00151b;
      }
      .profit-sub-title{
        margin-bottom: .4rem;
        opacity: 0.3;
        font-size: .22rem;
        line-height: 1.27;
        text-align: center;
        color: #00151b;
      }
      .profit-btn{
        display: block;
        margin: 0 auto;
        width: 2.2rem;
        height: .53rem;
        line-height: .53rem;
        border-radius: .03rem;
        border: solid .01rem #4a98ff;
        background-color: #0063e5;
        text-decoration: none;
        font-size: .18rem;
        color: #fff;
      }
  }
  .know-title{
    margin-top: .4rem;
    margin-bottom: 0;
    font-size: .24rem;
    font-weight: 500;
    line-height: 1.25;
    color: #464e59;
  }
}


</style>



