<template>
  <div class="wrapper">
    <div class="container text-left">
      <div class="row mb-1">
        <div class="col-12">
          <TodoHeader></TodoHeader>
        </div>
      </div>
      <div class="row mb-1">
        <div class="col-12">
          <AnimeSamples />
        </div>
      </div>
      <div class="row mb-1">
        <div class="col-12">
          <CustomDirective />
        </div>
      </div>
      <div class="row mb-1">
        <div class="col-12">
          <BarChart />
        </div>
      </div>
      <div class="row mb-1">
        <div class="col-12">
          <BootStrap />
        </div>
      </div>
      <div class="row mb-1">
        <div class="col-12">
          <CheatSheet></CheatSheet>
        </div>
      </div>
      <div class="row mb-1">
        <div class="col-12">
          <TodoFooter></TodoFooter>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TodoHeader from "../TodoHeader.vue";
import TodoFooter from "../TodoFooter.vue";
import AnimeSamples from "../AnimeSample.vue";
import CustomDirective from "../CustomDirective.vue";
import BarChart from "../BarChart.vue";
import BootStrap from "../BootStrap.vue";
import CheatSheet from "../CheatSheet.vue";

</script>

<style>
</style>
