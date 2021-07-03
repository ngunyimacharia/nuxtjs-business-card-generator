<template>
  <div class="bg-gray-100 p-5 md:grid md:grid-cols-5 md:gap-6">
    <div class="mt-5 md:mt-0 md:col-span-3">
      <form action="#" method="POST" @submit.prevent="submit">
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Customize
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Adjust the feel of the cards as you like
              </p>
            </div>
            <hr class="my-10" />
            <div>
              <label for="font" class="block text-sm font-medium text-gray-700"
                >Accent Color</label
              >
              <v-swatches v-model="customize.accent" inline></v-swatches>
            </div>
          </div>

          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              class="
                inline-flex
                justify-center
                py-2
                px-4
                border border-transparent
                shadow-sm
                text-sm
                font-medium
                rounded-md
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
              "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="md:col-span-2">
      <CardPreview />
    </div>
  </div>
</template>

<script>
import VSwatches from 'vue-swatches'

export default {
  components: { VSwatches },
  data() {
    return {
      customize: {
        accent: '',
      },
    }
  },
  methods: {
    submit() {
      this.$store
        .dispatch('updateCustomization', this.customize)
        .then(() => this.$router.push('/download'))
    },
  },
}
</script>