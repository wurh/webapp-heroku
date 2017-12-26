<template>
  <section class="container">
    <mt-header fixed title="电商应用"></mt-header>

    <section id="index-list" class="index-list">
		   <div class="page-title">
	          <div class="top-title-wrapper">
			     <img src="https://m-static-global.vip.com/image/wave@2x-e887563dd5.png" alt="">
			     <p class="top-title">Flash Sale</p>
				 <img src="https://m-static-global.vip.com/image/wave@2x-e887563dd5.png" alt="">
			  </div>
	          <p class="sub-title">Starts Every Morning at 6am PDT</p>
	       </div>
          <div id="index-topics-box" class="index-topics-box">
            <ul id="latestevents" class="index-topics-wrap">
              <li class="index-topics-last">
                <div @click="toList" title="Make the street a catwalk | Booty">
                  <img class="lazy-lable" src="https://img-global.vip.com/photos/activity/20171220/o1c1rtsov97Kym6MTfA618oyOAa-NW_K.jpg" data-src="https://img-global.vip.com/photos/activity/20171220/o1c1rtsov97Kym6MTfA618oyOAa-NW_K.jpg" data-width="750" data-height="440" style="display: inline-block; width: 375px; height: 220px;">
                  <div class="index-topic-wrap">
                    <p class="index-topic-title">Make the street a catwalk | Booty</p>
                    <span class="activeThirdName">
                      UP TO 60% OFF
                    </span>
                    <p class="topic-time topic-countdown topic-countdown-latestevents" data-remaintime="346691551" data-label="15142741102190" data-timerstart="true">Ends in 4 days</p>
                  </div>
                </div>
              </li>
            </ul> 
          </div>
	    </section>
  </section>
</template>

<script>
import indexData from "../mock/home";

export default {
  data() {
    return {
      items: indexData.items
    };
  },
  components: {},
  methods:{
      toList(){
          console.log('tiao le !!!');
          this.$router.push({ path: '/list/list' })
      }
  }
};
</script>

<style scoped>
.index-list{
  margin-top: 80px;
}
.page-title {
    background: #fff;
    padding: 1.29rem;
}
.page-title .top-title-wrapper {
    text-align: center;
    margin-bottom: .29rem;
}
.page-title .top-title-wrapper img {
    display: inline-block;
    width: 2.86rem;
    height: 1.07rem;
    vertical-align: middle;
}
.page-title .top-title-wrapper p {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    vertical-align: middle;
    display: inline-block;
}
.page-title .sub-title {
    font-size: 1.07rem;
    color: #666;
    text-align: center;
}
menu, ol, ul {
    list-style: none;
}
layoutImg.off {
    display: none;
}
.layoutImg {
    color: #ccc;
    background: #efefef;
    font-size: 1.5625rem;
    font-weight: 700;
    text-align: center;
}
.index-topic-wrap {
    padding: .75rem 0;
    background-color: #fff;
    text-align: center;
}
.index-topic-wrap .index-topic-title {
    font-size: 1rem;
    color: #333;
    text-align: center;
    font-weight: 700;
    margin-bottom: .3rem;
    line-height: 1.19rem;
    min-height: 1.19rem;
}
.index-topic-wrap .activeThirdName {
    margin-right: .75rem;
}
.index-topic-wrap span {
    font-size: .81rem;
    color: #f22796;
}
.index-topic-wrap .topic-time {
    font-size: .81rem;
    color: #999;
    line-height: 1rem;
    min-height: 1rem;
    display: inline-block;
}
.index-topics-last div{
  text-align: center
}
</style>

