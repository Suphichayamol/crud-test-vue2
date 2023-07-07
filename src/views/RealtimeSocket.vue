<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Bitkub Data</h1>
    <div v-if="loading" class="text-gray-500">Loading...</div>
    <div v-else>
      <h2 class="text-xl font-bold mb-2">BTC-THB Trade:</h2>
      <ul>
        <li v-for="trade in btcTrades" :key="trade.id">{{ trade.price }} THB</li>
      </ul>
      <h2 class="text-xl font-bold mt-4 mb-2">ETH-THB Trade:</h2>
      <ul>
        <li v-for="trade in ethTrades" :key="trade.id">{{ trade.price }} THB</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      btcTrades: [],
      ethTrades: [],
    };
  },
  mounted() {
    this.$options.sockets.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.pair === 'THB_BTC') {
        this.btcTrades = data.trades;
      } else if (data.pair === 'THB_ETH') {
        this.ethTrades = data.trades;
      }

      if (this.loading) {
        this.loading = false;
      }
    };

    this.$options.sockets.onopen = () => {
      console.log('Connected to Bitkub WebSocket');
    };

    this.$options.sockets.onclose = () => {
      console.log('Disconnected from Bitkub WebSocket');
    };
  },
};
</script>

<style>
/* CSS สำหรับกำหนดรูปแบบต่าง ๆ */
</style>
