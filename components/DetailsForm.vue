<template>
  <form action="#" method="POST" @submit.prevent="submit">
    <div class="shadow sm:rounded-md sm:overflow-hidden">
      <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Update Details
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Fill in your personal and contant details
          </p>
        </div>
        <hr class="my-10" />
        <div>
          <label for="full_name" class="block text-sm font-medium text-gray-700"
            >Full name:</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="full_name"
              id="full_name"
              v-model="details.full_name"
              required
              class="
                shadow-sm
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                sm:text-sm
                border-gray-300
                rounded-md
              "
              placeholder="Jane Doe"
            />
          </div>
        </div>
      </div>
      <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
        <div>
          <label for="position" class="block text-sm font-medium text-gray-700"
            >Position:</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="position"
              id="position"
              v-model="details.position"
              required
              class="
                shadow-sm
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                sm:text-sm
                border-gray-300
                rounded-md
              "
              placeholder="Chief Executive Officer"
            />
          </div>
        </div>
      </div>
      <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
        <div>
          <label
            for="phone_number"
            class="block text-sm font-medium text-gray-700"
            >Phone Number:</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              v-model="details.phone_number"
              required
              class="
                shadow-sm
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                sm:text-sm
                border-gray-300
                rounded-md
              "
              placeholder="012 345 678"
            />
          </div>
        </div>
      </div>
      <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email:</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="email"
              id="email"
              v-model="details.email"
              required
              class="
                shadow-sm
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                sm:text-sm
                border-gray-300
                rounded-md
              "
              placeholder="email@example.com"
            />
          </div>
        </div>
      </div>
      <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
        <div>
          <label for="website" class="block text-sm font-medium text-gray-700"
            >Website:</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="website"
              id="website"
              v-model="details.website"
              required
              class="
                shadow-sm
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                sm:text-sm
                border-gray-300
                rounded-md
              "
              placeholder="example.com"
            />
          </div>
        </div>
      </div>
      <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
        <div>
          <label for="address" class="block text-sm font-medium text-gray-700"
            >Address:</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="address"
              id="address"
              v-model="details.address"
              required
              class="
                shadow-sm
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                sm:text-sm
                border-gray-300
                rounded-md
              "
              placeholder="123 Main Street, New York, NY 10030"
            />
          </div>
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
</template>

<script>
export default {
  data() {
    return {
      details: {
        full_name: '',
        position: '',
        address: '',
        phone_number: '',
        email: '',
        website: '',
      },
    }
  },
  methods: {
    submit() {
      this.$store
        .dispatch('updateDetails', this.details)
        .then(() => this.$router.push('/customize'))
    },
  },
}
</script>