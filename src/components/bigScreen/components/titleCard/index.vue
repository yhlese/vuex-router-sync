<!--
 * @Author: your name
 * @Date: 2020-11-27 15:42:20
 * @LastEditTime: 2020-11-27 16:46:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hlb-faceid\src\views\bigScreen\components\titleCard\index.vue
-->

<template>
  <div class="show-box">
    <div class="shoadow-content">
      <div class="title"
           v-if="title">
        <h3>{{title}}</h3>
      </div>
      <div class="main-content"
           :class="{'calc-height':title}">
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: ''
  }
}
</script>

<style lang="sass" scoped>
%icon-bottom
  position: absolute
  content: ''
  display: inline-block
  border-bottom: 2px solid  #8CFFE0
  width: 8px
  height: 8px
  bottom: 0
%icon-top
  position: absolute
  content: ''
  display: inline-block
  border-top: 2px solid  #8CFFE0
  width: 8px
  height: 8px
  top: 0

.show-box
  display: flex
  height: 100%
  width: 100%
  .shoadow-content
    border: 1px solid #1c5080
    background: rgba(100, 116, 211, 0.1)
    position: relative
    width: 100%
    &:after
      @extend %icon-top
      border-right: 2px solid #8CFFE0
      right: 0
      bottom: 0

    &:before
      @extend %icon-top
      border-left: 2px solid #8CFFE0
      left: 0

    .title
      padding: 17px 22px

      font-family: FZLTCHJW
      font-weight: normal
      color: #FFFFFF
      h3
        border-left: 3px solid #8CFFE0
        padding-left: 10px
        font-size: 21px
        letter-spacing: 1px
    .main-content
      padding: 0 22px 17px
      position: relative

      &:after
        @extend %icon-bottom
        border-right: 2px solid #8CFFE0
        right: 0

      &:before
        @extend %icon-bottom
        border-left: 2px solid #8CFFE0
        left: 0
      .content
        // padding: 17px 22px
    .calc-height
      height: calc(100% - 78px)
</style>