<template>
  <div class="bg-gray-100 p-5 md:grid md:grid-cols-5 md:gap-6">
    <div class="mt-5 md:mt-0 md:col-span-3">
      <div class="bg-white p-10">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span
              class="
                block
                text-base text-center text-indigo-600
                font-semibold
                tracking-wide
                uppercase
              "
              >Download</span
            >
          </h1>
          <p class="mt-8 text-center text-gray-500 leading-8">
            Your business card designs are complete and ready to download. Use
            the following links to download:
          </p>
          <ul class="list-disc text-center">
            <li v-for="(link, index) in downloadLinks" :key="index">
              <a :href="link.src" download target="_blank">
                {{ link.alt }}
              </a>
            </li>
          </ul>
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
      downloadLinks: [],
    }
  },
  mounted() {
    this.getImageLinks()
  },
  methods: {
    getImageLinks() {
      const holder = document.getElementById('card-holder')

      if (holder === null) {
        setTimeout(() => {
          this.getImageLinks()
        }, 1000)
        return
      }

      const images = holder.getElementsByTagName('img')

      if (images === null) {
        setTimeout(() => {
          this.getImageLinks()
        }, 1000)
        return
      }

      for (let image of images) {
        if (image.src) {
          this.downloadLinks.push({
            alt: image.alt,
            src: image.src,
          })
        }
      }

      if (this.downloadLinks.length < 2) {
        setTimeout(() => {
          this.getImageLinks()
        }, 1000)
        return
      }
    },
  },
}
</script>