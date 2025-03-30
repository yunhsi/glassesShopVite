import { defineStore } from 'pinia';
import payApi from '@/api/payApi';
import { useCommonStore } from '@/stores/useCommonStore';
import { useOrderStore } from '@/stores/useOrderStore';
import Swal from 'sweetalert2';

export const usePayStore = defineStore('usePay', () => {
  const commonStore = useCommonStore();
  const orderStore = useOrderStore();

  // ✅ 結帳
  const postPay = async (orderId) => {
    commonStore.isLoading = true;
    try {
      const res = await payApi.postPay(orderId);
      Swal.fire({
        icon: 'success',
        title: `${res.message}`,
        showConfirmButton: false,
        timer: 1500
      });
      await orderStore.getOrders();
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
    postPay
  };
});
