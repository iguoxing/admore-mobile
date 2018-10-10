<template>
    <header class="phone-banner top-nav-phone">
        <img class="banner-logo" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/assets/img/home/frontend/logo_b.png">
        <div class="phone-nav">
          <img class="banner-group" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home%2Fv3%2Fimg%2Fcommon%2Fgroup_btn.png">
          <!-- <ul class="nav-list">
              <li class="nav-item"><a class="item-link" href="/ad/asou">ASO</a></li>
              <li class="nav-item"><a class="item-link" href="/ad/miniprogram">小程序推广</a></li>
              <li class="nav-item"><a class="item-link" href="/ad/video">视频广告</a></li>
              <li class="nav-item"><a class="item-link" href="/partner">多点推客</a></li>
              <li class="nav-item"><a class="item-link" href="/download">下载APP</a></li>
              <li class="nav-item"><a class="item-link" href="/business">推客中心</a></li>
              <li class="nav-item"><a class="item-link" href="">控制台</a></li>
              <li class="nav-item active"><a class="item-link" href="/register">免费注册</a></li>
          </ul> -->
        </div>
        
    </header>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome'
    }
  },
  created () {}
}
</script>
<style lang="less">
.phone-banner{
  position: fixed;
  top: 0;
  z-index: 10;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: .18rem .3rem;
  background: #fff;
  border-bottom: solid .01rem #eaeaea;
  .banner-logo{
    width: .63rem;
    height: .17rem;
  }
  .phone-nav{
    position: relative;
    .banner-group{
      width: .17rem;
      height: .15rem;
    }
    .nav-list{
      position: absolute;
      list-style: none;
      left:-3.75rem;
      width: 3.75rem;
      box-shadow: 0 .28rem .15rem 0 rgba(0, 0, 0, 0.21);
      background-color: #fff;
      .nav-item{
        padding: .16rem 0 .15rem;
        border-bottom: solid .01rem #ededed;
        .item-link{
          color: #696969;
          text-decoration: none;
          font-size: .16rem;
          font-weight: 500;
        }
      }
      .nav-item.active{
        .item-link{
          color: #0b91ff;
        }
      }
    }
  }
}

</style>



