<template>
  <div class="wrapper">
    <h1>Sample Codes</h1>
      <router-link
        to="/"
        class="sub-link">
        Go back to top
      </router-link>
    <AnimeSamples />
    <CustomDirective />
    <BarChart />
    <BootStrap />
  </div>
</template>

<script setup>
import AnimeSamples from "../AnimeSample.vue";
import CustomDirective from "../CustomDirective.vue";
import BarChart from "../BarChart.vue";
import BootStrap from "../BootStrap.vue";

</script>

<style>
  .sub-link {
    display: block;
    text-decoration: none;
    color: blueviolet;
    margin-bottom: 10px;
  }
</style>
