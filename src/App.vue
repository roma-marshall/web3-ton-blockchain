<template>
  <div>
    <TonConnectUIProvider :options="options">
      <TonConnect />
    </TonConnectUIProvider>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TonConnect from './components/TonConnect.vue'
import { TonConnectUIProvider } from '@townsquarelabs/ui-vue'
const options = ref({ manifestUrl: window.location.href + 'tonconnect-manifest.json' })
</script>