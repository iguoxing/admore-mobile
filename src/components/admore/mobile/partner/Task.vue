<template>
  <div class="mobile-task">
    <pageHeader></pageHeader>
    <nav class="second-menu flex-center-center">
      <a class="menu-item">了解推客</a>
      <a class="menu-item active">任务与奖励</a>
      <a class="menu-item">资料与动态</a>
    </nav>

    <!-- banner content-->
    <section class="task-content">
      <div class="mobile-banner">
        <h5 class="banner-title">
          任务与奖励
          <img class="banner-title-icon" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home/v3/img/partner/itry.png">
        </h5>
        <div class="banner-content">
          成为多点广告官方推广大使：客户前一万投放量每笔订<br>
          单返现 | 30日到账<br>
          做激励广告链条的顶级受益人
        </div>
        <a class="banner-btn">立即推广</a>
      </div>

      <!-- 任务描述 -->
      <article class="task-list">
          <div class="task-item">
              <div class="task-title">新客首购奖励</div>
              <div class="task-info">新客定义：从未购买过多点广告产品的客户</div>
              <div class="task-line"></div>
              <h4 class="task-des">前一万量奖励0.2元</h4>
          </div>
          <div class="task-item">
              <div class="task-title">产品首购奖励</div>
              <div class="task-info">产品首购：客户从未投放过的产品</div>
              <div class="task-line"></div>
              <h4 class="task-des">前一万量奖励0.1元/个</h4>
          </div>
          <div class="task-item">
              <div class="task-title">推客首推奖励</div>
              <div class="task-info">首推定义：从未成单过的多点推客首次成单</div>
              <div class="task-line"></div>
              <h4 class="task-des">参与 1000元 抽奖</h4>
          </div>
          <div class="task-item">
              <div class="task-title">特殊任务奖励</div>
              <div class="task-info">计划给多点推客们限量的特殊任务奖励</div>
              <div class="task-line"></div>
              <h4 class="task-des">敬请期待</h4>
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
.mobile-task{
  font-size: .2rem;
  .mobile-banner{
    text-align: center;
    background-image: linear-gradient(178deg, #7284ff, #49a5ff);
    .banner-title{margin-bottom: .15rem;}
    .banner-content{margin-bottom: .36rem;}
  }
  .task-content{
    border-bottom: solid .01rem #f6f6f6;
    .task-list{
      padding: .43rem .3rem .6rem;
      .task-item{
        margin-bottom: .3rem;
        padding: .4rem .3rem 0;
        border-radius: .06rem;
        box-shadow: 0 .15rem .3rem -.25rem rgba(37, 34, 62, 0.5);
        border: solid .01rem #e3e3e3;
        background-color: #fff;
        .task-title{
          margin-bottom: .15rem;
          font-size: .24rem;
          font-weight: 500;
          color: #000;
        }
        .task-info{
          margin-bottom: .4rem;
          height: .56rem;
          text-align: left;
          font-size: .16rem;
          line-height: 1.75;
          color: rgba(0, 0, 0, 0.5);
        }
        .task-line{
          margin: 0 auto;
          width: 1.18rem;
          border-top: dashed  .02rem #e3e3e3;
        }
        .task-des{
          margin:.4rem 0;
          font-size: .2rem;
          color: #000;
        }
      }
      .task-item:nth-child(even){
        background-image: linear-gradient(to left, #fbfcfd, #f5f7f9);
      }
      .task-item:last-child{margin-bottom: 0;}
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



