<template>
    <router-view></router-view>
</template>
 
 
<script lang='ts' setup>
import {provide, ref ,reactive} from "vue"
</script>
 

<style>
:root {
  /* 元素背景色 */
  --theme_bg_color: #fff;
/* body背景色 */
  --them_bg_body:#f4f4f4;
  /* 背景的阴影 */
  --theme_bg_shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  /* 字体颜色 */
  --theme_color: #4a4a4a;

  --theme_nav:#cfcfcf;

  --theme_li:rgb(230, 230, 230);
}
*{
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
    box-sizing: border-box;
}
body{
    background-color: var(--them_bg_body);
    transition: 0.5s;
}
ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
}
a{
    list-style: none;
}
.bgc-light{
    color:#000;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.bgc-dark{
    color:#fff;
    background-color: #171d20;
    box-shadow: 0 2px 12px 0 rgba(194, 194, 194, 0.912);
}
</style>
