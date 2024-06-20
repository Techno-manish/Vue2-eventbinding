new Vue({
    el: "#app",
    data: {
      count: 0,
    },
    // spelling mistake in methods used method instead
    methods: {
      increaseCount() {
        this.count++;
      },
      decreaseCount() {
        this.count--;
      },
      reset() {
        this.count = 0;
      }
    }
  })