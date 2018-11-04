<template>
  <div class="fan-ling" :style="{width: width, height: height}">
    <el-row>
      <el-col :span="24">
        <div class="logo">
          <img src="../../assets/avatar_fl.jpg" :class="{'img-active': imgBool}" @mouseover="imgMove">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'fanLing',
  data () {
    return {
      imgBool: false,
      width: null,
      height: null,
      timer: true
    }
  },
  created () {
    this.getWidthheight()
  },
  mounted () {
    window.onresize = () => {
      this.getWidthheight()
    }
  },
  methods: {
    imgMove () {
      this.imgBool = !this.imgBool
    },
    // 获取浏览器高度宽度
    getWidthheight () {
      if (this.timer) {
        this.timer = false
        let w = window.innerWidth
        let h = window.innerHeight
        this.width = w + 'px'
        this.height = h + 'px'
        setTimeout(() => {
          this.timer = true
        }, 400)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fan-ling{
  // width: 100%;
  // height: auto;
  background-color: #1d3849;
  .logo{
    width: 80px;
    height: 80px;
    margin: 0 auto;
    img{
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      transition: all .5s;
      cursor: pointer;
      &.img-active{
        transform: translateX(-160px);
      }
    }
  }
}
</style>
