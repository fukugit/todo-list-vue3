<template>
  <b-row>
    <b-col md="auto">
      <b-calendar v-model="value" @context="onContext" locale="en-US"></b-calendar>
    </b-col>
    <b-col>
      <p>Value: <b>'{{ value }}'</b></p>
      <p class="mb-0">Context:</p>
      <pre class="small">{{ context }}</pre>
    </b-col>
  </b-row>
  <button type="button" class="btn btn-primary">Primary</button>
  <div class="mb-5"></div>
</template>


<script setup>
import {ref} from 'vue';
let context = ref()
const value = ref()
const onContext = (ctx)=> {
  context.value = ctx
}
</script>

<style scoped>
</style>