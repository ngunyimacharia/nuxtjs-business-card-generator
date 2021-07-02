<template>
  <div>
    <Header />
    <Steps class="my-5" />
    <div class="bg-gray-100 p-5 md:grid md:grid-cols-5 md:gap-6">
      <div class="mt-5 md:mt-0 md:col-span-3">
        <Nuxt />
      </div>
      <div class="md:col-span-2">
        <CardPreview />
      </div>
    </div>
  </div>
</template>