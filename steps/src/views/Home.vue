<template>
  <section class="row">
    <div class="col col-sm-2">
      <ul class="list-group">
        <router-link
          :to="'/?step=' + index"
          class="list-group-item"
          v-for="(step, index) in steps">{{index + 1}}: {{step.title}}</router-link>
      </ul>
    </div>
    <div class="col col-sm-10">
      <div class="card">
        <h1 class="card-header">Step {{+currentIndex + 1}}: {{currentStep.title}}</h1>
        <div class="card-body">
          <router-link v-if="currentIndex > 0" :to="'/?step=' + (+currentIndex - 1)" class="btn btn-danger float-left">Previous Step</router-link>
          <router-link v-if="currentIndex < steps.length - 1" :to="'/?step=' + (+currentIndex + 1)" class="btn btn-info float-right">Next Step</router-link>
        </div>
        <img v-if="currentStep.image" class="step-image" :src="currentStep.image">
      </div>
      <div class="card" v-for="(part, index) in currentStep.parts">
        <div class="card-body">
          <h1 class="card-text">{{index + 1}}: {{part.text}}</h1>
          <img v-if="part.image" class="step-image" :src="part.image">
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <router-link v-if="currentIndex > 0" :to="'/?step=' + (+currentIndex - 1)" class="btn btn-danger float-left">Previous Step</router-link>
          <router-link v-if="currentIndex < steps.length - 1" :to="'/?step=' + (+currentIndex + 1)" class="btn btn-info float-right">Next Step</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import steps from '@/steps';

export default {
  name: 'home',
  computed: {
    currentStep() {
      return this.steps[this.currentIndex];
    }
  },
  data: () => ({
    currentIndex: 0,
    steps
  }),
  watch: {
    '$route.query.step'() {
      if(this.$route.query.step) {
        this.currentIndex = this.$route.query.step;
      } else {
        this.currentIndex = 0;
      }
      window.scrollTo(0, 0);
    }
  },
  mounted() {
    if(this.$route.query.step) {
      this.currentIndex = this.$route.query.step;
    } else {
      this.currentIndex = 0;
    }
  }
}
</script>

<style>
.step-image {
  width: 100% !important;
  max-width: 700px;
  height: auto !important;
  display: block !important;
}
</style>
