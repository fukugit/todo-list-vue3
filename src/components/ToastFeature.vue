<script>
  export default {
    data() {
      return {
        toastCount: 0
      }
    },
    methods: {
      makeToast(append = false) {
        this.toastCount++
        this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
          title: 'BootstrapVue Toast',
          variant: 'primary',
          toaster: 'b-toaster-top-right',
          solid: true,
          autoHideDelay: 5000,
          appendToast: append
        })
      }
    }
  }
</script>
