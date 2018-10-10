<template>
  <!-- 底部 -->
    <section class="phone-footer">
      <h5 class="footer-title">北京市朝阳区朝阳路85号院5号楼C座</h5>
      <div class="footer-number">
        <img class="phone-img" src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/home%2Fv3%2Fimg%2Findex%2Fphone.svg">
        010-57239005
      </div>
      <div class="footer-right">
        Copyright © 2016.多点科技 All rights reserved. ICP证：京12011038号-8
      </div>
    </section>
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
.phone-footer{
  text-align: left;
  padding: 0 .3rem;
  font-weight: 500;
  .footer-title{
    margin-bottom: .04rem;
    opacity: 0.5;
    font-size: .12rem;
    color: #3d3f48;
  }
  .footer-number{
    display: flex;
    align-items: center;
    margin-bottom: .46rem;
    height: .17rem;
    font-size: .12rem;
    font-weight: 500;
    color: #b3b9c1;
    .phone-img{
      margin-right: .08rem;
      width: .12rem;
      height: .13rem;
    }
  }
  .footer-right{
    position: relative;
    margin-bottom: .55rem;
    margin-left: -.36rem;
    width: 3.8rem;
    opacity: 0.5;
    transform: scale(0.8);
    font-size: .1rem;
    color: #687484;
  }
}
</style>



