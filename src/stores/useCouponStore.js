import { defineStore } from 'pinia';
import { ref } from 'vue';
import couponApi from '@/api/couponApi';
import { useCartStore } from '@/stores/useCartStore';
import { useCommonStore } from '@/stores/useCommonStore';
import Swal from 'sweetalert2';

export const useCouponStore = defineStore('useCoupon', () => {
  const cartStore = useCartStore();
  const commonStore = useCommonStore();

  // ✅ 套用優惠券
  const useCoupon = async (data) => {
    // apiData = {
    //   code: data.coupon_code,
    // };
    commonStore.isLoading = true;
    try {
      await couponApi.useCoupon(data);
      await cartStore.getCarts();
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: `${err.message}`
      });
    } finally {
      commonStore.isLoading = false;
    }
  };

  return {
    useCoupon
  };
});
