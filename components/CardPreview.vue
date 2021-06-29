<template>
  <div class="h-full flex flex-col justify-around items-center">
    <!-- Front side of card  -->
    <cld-image
      public-id="business-card-generator/assets/business-card-template"
      crop="fill"
      alt="Front side of business card"
    >
      <!-- Name -->
      <cld-transformation
        :overlay="`text:poppins_64_bold:Jane Doe,co_rgb:000000`"
        gravity="north_west"
        x="80"
        y="80"
      />

      <!-- Position -->
      <cld-transformation
        :overlay="`text:poppins_42:Director,co_rgb:000000`"
        gravity="north_west"
        x="80"
        y="160"
      />
      <!-- Location -->
      <cld-transformation
        :overlay="`fetch:${icons.pin}`"
        gravity="north_west"
        x="80"
        y="280"
        width="40"
      />
      <cld-transformation
        :overlay="`text:poppins_24_light:123 Main Street New York NY 10030,co_rgb:000000`"
        gravity="north_west"
        x="150"
        y="290"
      />
      <!-- Phone -->
      <cld-transformation
        :overlay="`fetch:${icons.smartphone}`"
        gravity="north_west"
        x="80"
        y="350"
        width="40"
      />
      <cld-transformation
        :overlay="`text:poppins_24_light:012 345 678,co_rgb:000000`"
        gravity="north_west"
        x="150"
        y="360"
      />
      <!-- Email -->
      <cld-transformation
        :overlay="`fetch:${icons.mail}`"
        gravity="north_west"
        x="80"
        y="420"
        width="40"
      />
      <cld-transformation
        :overlay="`text:poppins_24_light:email@example.com,co_rgb:000000`"
        gravity="north_west"
        x="150"
        y="430"
      />
      <!-- Web -->
      <cld-transformation
        :overlay="`fetch:${icons.globe}`"
        gravity="north_west"
        x="80"
        y="500"
        width="40"
      />
      <cld-transformation
        :overlay="`text:poppins_24_light:${encodeURIComponent(
          'example.com'
        )},co_rgb:000000`"
        gravity="north_west"
        x="150"
        y="510"
      />
      <!-- QR Code -->
      <cld-transformation
        :overlay="`fetch:${qrCodeLink}`"
        gravity="south_east"
        x="80"
        y="80"
        width="200"
      />
    </cld-image>

    <!-- Back side of card  -->
    <cld-image
      public-id="business-card-generator/assets/business-card-template"
      width="336"
      height="192"
      crop="fill"
      alt="Front side of business card"
    >
    </cld-image>
  </div>
</template>

<script>
export default {
  data() {
    return {
      details: {
        location: '123 Main Street, New York, NY 10030',
        website: 'example.com',
      },
      icons: {
        globe:
          'https://res.cloudinary.com/kmashytski/image/upload/v1624938606/business-card-generator/assets/globe-icon.png',
        mail: 'https://res.cloudinary.com/kmashytski/image/upload/v1624938364/business-card-generator/assets/mail-icon.png',
        pin: 'https://res.cloudinary.com/kmashytski/image/upload/v1624937477/business-card-generator/assets/pin-icon.png',
        smartphone:
          'https://res.cloudinary.com/kmashytski/image/upload/v1624937998/business-card-generator/assets/smartphone-icon.png',
      },
    }
  },
  computed: {
    qrCodeLink() {
      return `https://qrtag.net/api/qr_4.png?url=https://${this.details.website}`
    },
  },
}
</script>