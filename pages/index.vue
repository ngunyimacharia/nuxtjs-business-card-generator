<template>
  <div class="bg-gray-100 p-5 md:grid md:grid-cols-5 md:gap-6">
    <div class="mt-5 md:mt-0 md:col-span-3">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Upload logo
            </h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">
              Upload your company's logo. It's going to be used on the business
              card's back side.
            </p>
          </div>
          <hr class="my-10" />
          <input
            v-if="!uploading"
            type="file"
            accept=".jpeg,.jpg,.png,image/jpeg,image/png"
            aria-label="upload image button"
            @change="selectFile"
          />
          <div v-else>Please wait, upload in progress</div>
        </div>
      </div>
    </div>
    <div class="md:col-span-2">
      <CardPreview />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uploading: false,
    }
  },
  methods: {
    async selectFile(e) {
      this.uploading = true

      const file = e.target.files[0]

      /* Make sure file exists */
      if (!file) return

      /* create a reader */
      const readData = (f) =>
        new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(f)
        })

      /* Read data */
      const data = await readData(file)

      /* upload the converted data */
      const instance = await this.$cloudinary.upload(data, {
        folder: 'business-card-generator/logo-uploads',
        uploadPreset: 'business-card-logo-uploads',
      })

      this.$store
        .dispatch('changeLogo', instance)
        .then(() => this.$router.push('/details'))
        .finally(() => (this.uploading = false))
    },
  },
}
</script>
