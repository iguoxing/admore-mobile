<template>
  <div class="mobile-news">
    <pageHeader></pageHeader>
    <nav class="second-menu flex-center-center">
      <a class="menu-item">了解推客</a>
      <a class="menu-item">任务与奖励</a>
      <a class="menu-item active">资料与动态</a>
    </nav>

    <!-- banner content-->
    <section class="news-content">
      <div class="mobile-banner">
        <h5 class="banner-title">资料与动态</h5>
        <div class="banner-content">
          成为多点广告官方推广大使：客户前一万投放量每笔订<br>
          单返现 | 30日到账<br>
          做激励广告链条的顶级受益人
        </div>
      </div>

      <article class="news-lists">
          <h3 class="news-title">文章</h3>
          <div>
              <a class="news-item">
                  <img class="news-banner" src="https://img.zi.com/images/2018/1/4/upload/5760d54b0cf265667285598d_e3fec3d0-822f-49e3-8d8b-ae664a7f10a3.jpg">
                  <div class="news-info-title">旅游－去哪儿旅行：带你穷游中国，体验国内五大省钱旅游胜地！体验国内五大省钱旅游胜地！五大省钱旅游胜地！体验国内五大省钱旅游胜地！</div>
              </a>
              <a class="news-item">
                  <img class="news-banner" src="https://img.zi.com/images/2018/1/4/upload/5760d54b0cf265667285598d_e3fec3d0-822f-49e3-8d8b-ae664a7f10a3.jpg">
                  <div class="news-info-title">旅游－去哪儿旅行：带你穷游中国，体验国内五大省钱旅游胜地！体验国内五大省钱旅游胜地！五大省钱旅游胜地！体验国内五大省钱旅游胜地！</div>
              </a>
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
.mobile-news{
  font-size: .2rem;
  .mobile-banner{
    text-align: center;
    background-image: linear-gradient(355deg, #42b8ff, #2d73c1);
    .banner-title{margin-top:.14rem;margin-bottom: .2rem;}
    .banner-content{margin-bottom: .4rem!important;}
  }
  .news-content{
    border-bottom: solid .01rem #f6f6f6;
    .news-lists{
      padding:.4rem .3rem;
      .news-title{
        margin: 0 auto .29rem;
        width: 100%;
        padding-bottom: .3rem;
        border-bottom: solid .01rem #f6f6f6;
        font-size: .24rem;
        font-weight: 500;
        line-height: 1.25;
        color: #464e59;
      }
      .news-item{
        display: block;
        margin-bottom: .3rem;
        width: 3.15rem;
        box-shadow: 0 .11rem .21rem -.18rem rgba(37, 34, 62, 0.5);
        border: solid 0.01rem #e3e3e3;
        background-color: #fff;
        .news-banner{
          width: 3.15rem;
        }
        .news-info-title{
          display: -webkit-box;
          margin: .12rem .14rem;
          height: .44rem;
          overflow: hidden;
          text-align: left;
          color: #000;
          text-overflow: ellipsis;
          font-weight: 500;
          font-size: .16rem;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
    
  }
}




</style>



