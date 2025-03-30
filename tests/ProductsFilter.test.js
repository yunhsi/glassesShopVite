import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { useProductStore } from '@/stores/useProductStore';

vi.mock('primevue/usetoast', () => ({
  useToast: () => ({
    add: vi.fn() // Mock `toast.add()`，避免報錯
  })
}));

// Mock 商品資料
const mockProducts = [
  {
    category: '光學眼鏡',
    content: '輕量樹脂',
    description: '威靈頓',
    is_enabled: true,
    num: 27,
    origin_price: 4990,
    price: 2990,
    title: 'brown wellington glasses',
    unit: true,
    id: 1
  },
  {
    category: '光學眼鏡',
    content: '鈦合金',
    description: '圓框',
    is_enabled: true,
    num: 26,
    origin_price: 3990,
    price: 3990,
    title: 'black round glasses',
    unit: false,
    id: 2
  },
  {
    category: '光學眼鏡',
    content: '輕量樹脂',
    description: '威靈頓',
    is_enabled: true,
    num: 25,
    origin_price: 3990,
    price: 2990,
    title: 'transparent wellington glasses',
    unit: false,
    id: 3
  },
  {
    category: '太陽眼鏡',
    content: '鈦合金',
    description: '圓框',
    is_enabled: true,
    num: 24,
    origin_price: 4990,
    price: 4990,
    title: 'golden round sunglasses',
    unit: false,
    id: 4
  },
  {
    category: '太陽眼鏡',
    content: '鈦合金',
    description: '威靈頓',
    is_enabled: true,
    num: 23,
    origin_price: 3990,
    price: 3990,
    title: 'black wellington sunglasses',
    unit: false,
    id: 5
  },
  {
    category: '太陽眼鏡',
    content: '輕量樹脂',
    description: '波士頓',
    is_enabled: true,
    num: 22,
    origin_price: 3990,
    price: 2990,
    title: 'black boston sunglasses',
    unit: false,
    id: 6
  }
];

describe('商品篩選測試', () => {
  let productStore;
  let keyword, colorType, materialType, shapeType, priceType, sortType;

  beforeEach(() => {
    // 建立 Pinia 測試 store
    const pinia = createTestingPinia({ createSpy: vi.fn });

    // 取得 store
    productStore = useProductStore();

    // 模擬 store 資料
    productStore.allProductsData = mockProducts;
    productStore.recommendationProducts = mockProducts.filter((p) => p.unit === true);
    productStore.saleProducts = mockProducts.filter((p) => p.price !== p.origin_price);
    productStore.glassesProducts = mockProducts.filter((p) => p.category === '光學眼鏡');
    productStore.sunGlassesProducts = mockProducts.filter((p) => p.category === '太陽眼鏡');

    // Mock 前端篩選條件
    keyword = { value: null };
    colorType = { value: null };
    materialType = { value: null };
    shapeType = { value: null };
    priceType = { value: null };
    sortType = { value: null };
  });

  it('應該正確篩選出推薦商品', () => {
    expect(productStore.recommendationProducts).toHaveLength(1);
    expect(productStore.recommendationProducts.map((p) => p.id)).toContain(1);
  });

  it('應該正確篩選出折扣商品', () => {
    expect(productStore.saleProducts).toHaveLength(3);
    expect(productStore.saleProducts.map((p) => p.id)).toEqual(expect.arrayContaining([1, 3, 6]));
  });

  it('應該正確篩選出光學眼鏡商品', () => {
    expect(productStore.glassesProducts).toHaveLength(3);
    expect(productStore.glassesProducts.map((p) => p.id)).toEqual(
      expect.arrayContaining([1, 2, 3])
    );
  });

  it('應該正確篩選出太陽眼鏡商品', () => {
    expect(productStore.sunGlassesProducts).toHaveLength(3);
    expect(productStore.sunGlassesProducts.map((p) => p.id)).toEqual(
      expect.arrayContaining([4, 5, 6])
    );
  });

  it('應該根據 keyword 搜尋商品', () => {
    keyword.value = 'black'; // 只搜尋包含 "black" 的商品
    const result = mockProducts.filter((item) =>
      item.title.toLowerCase().includes(keyword.value.toLowerCase())
    );

    expect(result).toHaveLength(3);
    expect(result.map((p) => p.id)).toEqual(expect.arrayContaining([2, 5, 6]));
  });

  it('應該根據 colorType 篩選商品', () => {
    colorType.value = { id: 'brown' }; // 只篩選 "brown" 開頭的商品
    const result = mockProducts.filter((item) => item.title.split(' ')[0] === colorType.value.id);

    expect(result).toHaveLength(1);
    expect(result.map((p) => p.id)).toContain(1);
  });

  it('應該根據 materialType 篩選商品', () => {
    materialType.value = { name: '鈦合金' }; // 只篩選 "鈦合金" 的商品
    const result = mockProducts.filter((item) => item.content === materialType.value.name);

    expect(result).toHaveLength(3);
    expect(result.map((p) => p.id)).toEqual(expect.arrayContaining([2, 4, 5]));
  });

  it('應該根據 shapeType 篩選商品', () => {
    shapeType.value = { name: '圓框' }; // 只篩選 "圓框" 的商品
    const result = mockProducts.filter((item) => item.description === shapeType.value.name);

    expect(result).toHaveLength(2);
    expect(result.map((p) => p.id)).toEqual(expect.arrayContaining([2, 4]));
  });

  it('應該根據 priceType 篩選價格範圍內的商品', () => {
    priceType.value = { min: 2000, max: 3000 }; // 只篩選價格 2000 ~ 3000 的商品
    const result = mockProducts.filter(
      (item) => item.price >= priceType.value.min && item.price <= priceType.value.max
    );

    expect(result).toHaveLength(3);
    expect(result.map((p) => p.id)).toEqual(expect.arrayContaining([1, 3, 6]));
  });

  it('應該根據價格由低到高排序', () => {
    sortType.value = { id: '2' }; // 低到高排序
    const result = [...mockProducts].sort((a, b) => a.price - b.price);

    expect(result[0].id).toBe(1);
    expect(result[result.length - 1].id).toBe(4);
  });

  it('應該根據價格由高到低排序', () => {
    sortType.value = { id: '1' }; // 高到低排序
    const result = [...mockProducts].sort((a, b) => b.price - a.price);

    expect(result[0].id).toBe(4);
    expect(result[result.length - 1].id).toBe(6);
  });
});
