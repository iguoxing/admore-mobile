<template>
    <header class="phone-banner top-nav-phone">
        <img class="banner-logo" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/assets/img/home/frontend/logo_b.png">
        <img class="banner-group" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home%2Fv3%2Fimg%2Fcommon%2Fgroup_btn.png">
        <!-- <ul class="nav1">
            <li class="hvr-sweep-to-bottom"><a class="hvr-item" href="${site_host}/ad/asou">ASO</a></li>
            <li class="hvr-sweep-to-bottom"><a class="hvr-item" href="${site_host}/ad/miniprogram">小程序推广</a></li>
            <li class="hvr-sweep-to-bottom"><a class="hvr-item" href="${site_host}/ad/video">视频广告</a></li>
            <li class="hvr-sweep-to-bottom"><a class="hvr-item" href="${site_host}/partner">多点推客</a></li>
            <li class="hvr-sweep-to-bottom"><a class="hvr-item" href="${site_host}/download">下载APP</a></li>
            <li class="hvr-sweep-to-bottom login"><a class="hvr-item" href="${site_host}/business">推客中心</a></li>
            <li class="hvr-sweep-to-bottom login"><a class="hvr-item" href="${console_host}">控制台</a></li>
            <li class="last register"><a class="hvr-item" href="${site_host}/register">免费注册</a></li>
        </ul> -->
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
  .banner-group{
    width: .17rem;
    height: .15rem;
  }
}

</style>



