<script setup>
import { ref, computed, onMounted } from 'vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';
import { useOrderStore } from '@/stores/useOrderStore';
import CheckoutSteps from '@/components/CheckoutSteps.vue';
import OrderInfo from '@/components/OrderInfo.vue';
import PaymentInfo from '@/components/PaymentInfo.vue';
import Footer from '@/components/Footer.vue';

const route = useRoute();
const orderStore = useOrderStore();
const orderData = ref();

// 訂單 id
const id = computed(() => route.params.orderId);

const getOrder = async () => {
  await orderStore.getOrder(id.value);
  orderData.value = orderStore.orderData;
};

onMounted(() => {
  getOrder();
});

useHead({
  title: '確認付款｜!WEAR'
});
</script>

<template>
  <main
    style="padding-top: 70px; min-height: calc(100vh - 104px)"
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-sine"
    data-aos-duration="300"
    data-aos-delay="300"
  >
    <div class="container pt-4 pb-5">
      <!-- 結帳進度 -->
      <CheckoutSteps step="3" />
      <!-- 3. 確認付款 -->
      <div class="row pt-4">
        <!-- 訂單資訊 -->
        <div class="col-md-7">
          <OrderInfo title="訂單明細" :order="orderData" />
        </div>
        <!-- 訂購資訊 -->
        <div class="col-md-5">
          <PaymentInfo :id="id" :order="orderData" />
        </div>
      </div>
    </div>
  </main>
  <Footer />
</template>

<style scoped></style>
