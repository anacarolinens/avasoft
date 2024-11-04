<template>
  <div
    v-if="visible"
    :class="[toastClass, 'toast']"
    role="alert"
    tabindex="-1"
  >
    <div class="flex p-4">
      {{ message }}

      <div class="ms-auto">
        <button
          @click="closeToast"
          type="button"
          class="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100"
          aria-label="Close"
        >
          <span class="sr-only">Close</span>
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18" />
            <path d="M6 6 18 18" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'success', // Opções: 'success', 'error', etc.
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  mounted() {
    setTimeout(this.closeToast, 5000); // Toast fecha após 5 segundos
  },
  computed: {
    toastClass() {
      return {
        'fixed top-4 right-4 max-w-xs rounded-xl shadow-lg text-sm text-white font-bold': true,
        'bg-green-500': this.type === 'success',
        'bg-red-500': this.type === 'error',
        'bg-blue-500': this.type === 'info',
        'bg-yellow-500': this.type === 'warning',
      };
    },
  },
  methods: {
    closeToast() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.toast {
  z-index: 1000;
  margin-top: 60px; /* Um valor maior que o da navbar */
}

</style>