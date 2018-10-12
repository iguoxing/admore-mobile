<template>
  <div class="mobile-aso">
    <pageHeader></pageHeader>
    <!-- banner content-->
    <section class="aso-content">
      <div class="mobile-banner">
        <h5 class="banner-title">策略+流量<br>ASO全案解决专家</h5>
        <a class="banner-btn">立即推广</a>
        <a class="banner-btn btn-new">立即推广</a>
      </div>

      <div class="aso-use flex-center-center">
          <label>正在使用的客户</label>
          <div class="flex-center-center">
              <img class="use-app" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/assets/img/home/custom/icon_100.jpg">
              <img class="use-app" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/assets/img/home/custom/icon_103.jpg">
              <img class="use-app" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/assets/img/home/custom/icon_101.jpg">
              <img class="use-app" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/assets/img/home/custom/icon_104.jpg">
              <img class="use-app" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/assets/img/home/custom/icon_111.jpg">
          </div>
      </div>
      <!-- 我们的优势 -->
      <article class="content-good">
          <div class="content-title">我们的优势</div>
          <div class="good-item">
              <img class="good-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/img/asou/us_1.png">
              <div class="good-title">全面的 AppStore 榜单和关键词数据</div>
              <div class="good-info">
                  多点是专业的 ASO 数据监测和分析平台，具备专业的榜单和关键词数据抓取分析技术，为您的优化决策提供可靠保证
              </div>
          </div>
          <div class="good-item active">
              <img class="good-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/img/asou/us_2.png">
              <div class="good-title">智能ASO诊断分析工具</div>
              <div class="good-info">
                  我们具备专业的关键词诊断分析工具，能够针对多维度给出专业建议，帮助您在关键词上比竞品领先一程
              </div>
          </div>
          <div class="good-item active">
              <img class="good-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/img/asou/us_3.png">
              <div class="good-title">针对性跟踪和优化能力</div>
              <div class="good-info">
                  针对您的竞品，我们提供全面的信息采集和报告，榜单、关键字覆盖、排名、评分、评论，面面俱到,知己知彼，百战不殆
              </div>
          </div>
          <div class="good-item">
              <img class="good-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/img/asou/us_4.png">
              <div class="good-title">专业服务和技术团队</div>
              <div class="good-info">
                  由业内资深优化师/工程师组成的服务和技术团队，具备丰富的优化经验和实操经验，帮助您迅速解决推广过程中遇到的各种问题
              </div>
          </div>
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
.mobile-aso{
  font-size: .2rem;
  .mobile-banner{
    text-align: center;
    background-image: linear-gradient(178deg, #7284ff, #49a5ff);
    .banner-title{
      margin-top: .07rem;
      margin-bottom: .26rem;
      line-height: 1.5;
      font-weight: 400;
    }
    .banner-btn{
      margin-bottom: .16rem;
    }
    .banner-btn.btn-new{
      background: transparent;
      color: #fcfcfd;
      border: solid .02rem #e4e4e4;
    }
  }
  .aso-content{
    margin-top: .64rem;
    .aso-use{
      flex-direction: column;
      padding: .3rem 0 .4rem;
      border-bottom: solid .01rem rgba(151, 151, 151, 0.1);
      label{
        margin-bottom: .2rem;
        font-size: .18rem;
        font-weight: 500;
        letter-spacing: -0.004rem;
        color: #667282;
      }
      .use-app{
        margin-right: .12rem;
        width: .48rem;
        border-radius: .12rem;
      }
      .use-app:last-child{margin-right: 0;}
    }
    .content-good{
      padding: .4rem .3rem;
      border-bottom: solid .01rem rgba(151, 151, 151, 0.1);
      .content-title{
        margin-bottom: .3rem;
        font-size: .24rem;
        font-weight: 500;
        line-height: 1.25;
        color: #464e59;
      }
      .good-item{
        margin-bottom: .24rem;
        box-sizing: border-box;
        height: 3.34rem;
        padding: .4rem 0.3rem 0;
        text-align: center;
        border-radius: .05rem;
        box-shadow: 0 .12rem .24rem -.2rem rgba(37, 34, 62, 0.5);
        border: solid .01rem #e3e3e3;
        background-color: #fff;
        .good-icon{
          margin-bottom: .23rem;
          width: .98rem;
        }
        .good-title{
          margin-bottom: .2rem;
          font-size: .16rem;
          font-weight: 600;
          line-height: 1.78;
          letter-spacing: -0.004rem;
          color: #464e59;
        }
        .good-info{
          text-align: left;
          opacity: 0.6;
          font-size: .11rem;
          line-height: 1.86;
          color: #000;
        }
      }
      .good-item:nth-child(odd){
        background-image: linear-gradient(to left, #fbfcfd, #f5f7f9);
      }
      
    }
  }
}


.mobile-banner{
  padding: .3rem;
  text-align: left;
  background-image: linear-gradient(172deg, #9b6fff, #6c92ff);
  color: #fff;
  font-weight: 400;
  .banner-title{
    position: relative;
    margin-top: 0;
    margin-bottom: .18rem;
    line-height: 1.31;
    font-size: .26rem;
    .banner-title-icon{
      position: absolute;
      top: -0.1rem;
      right: .4rem;
      width: .48rem;
    }
  }
  .banner-content{
    margin-bottom: .2rem;
    font-size: .13rem;
    line-height: 1.69;
  }
  .banner-content:last-child{margin-bottom: 0}
  .banner-btn{
    display: block;
    margin: 0 auto .11rem;
    width: 1.8rem;
    height: .42rem;
    line-height: .42rem;
    border-radius: .04rem;
    box-shadow: 0 .08rem .1rem 0 #4385e8;
    border: solid .01rem #e4e4e4;
    background-image: linear-gradient(to bottom, #ffffff, #f5f7f9);
    font-size: .16rem;
    font-weight: 500;
    color: #008bff;
  }
}




</style>



