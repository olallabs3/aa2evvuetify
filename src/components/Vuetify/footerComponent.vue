<template>
  <v-card height="100px">
    <v-footer
      v-bind="localAttrs"
      :padless="padless"
    >
      <v-card
        flat
        tile
        width="100%"
        class="red lighten-1 text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
          <a v-for="icon in icons" :key="icon.enlace"></a>
            <v-icon size="24px">
              {{ icon.icono }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Actividad aprendizaje 2 Ev</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <v-row
      align="center"
      justify="center"
      class="ma-12"
    >
      <v-col
        cols="12"
        md="8"
      >
    
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {icono: 'mdi-twitter'},
        {icono: 'mdi-instagram'},
        {icono: 'mdi-facebook'},
        {icono: 'mdi-twitch'},
      ],
      items: [
        'default',
        'absolute',
        'fixed',
      ],
      padless: true,
      variant: 'absolute',
    }),
    computed: {
      localAttrs () {
        const attrs = {}

        if (this.variant === 'default') {
          attrs.absolute = false
          attrs.fixed = false
        } else {
          attrs[this.variant] = true
        }
        return attrs
      },
    },
  }
</script>