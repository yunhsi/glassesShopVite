describe('購物流程測試', () => {
  context('正常購物流程測試', () => {
    it('應該完成購物流程，從加入購物車到付款成功', () => {
      // 訪問網站
      cy.visit('http://localhost:3000/glassesShopVite/');
      // 點擊到商品頁
      cy.contains('a', '商品分類').click();
      cy.contains('a', '全部商品').click();
      // 點擊兩個商品加入購物車
      cy.get('button').contains('加入購物車').eq(0).click();
      cy.get('button').contains('加入購物車').eq(0).click();
      // 需跳出'已加入購物車'的訊息
      cy.get('.p-toast-message-success').should('be.visible');
      cy.get('.p-toast-message').contains('已加入購物車').should('be.visible');
      // 購物車需出現紅點
      cy.get('.p-badge.p-badge-dot.p-badge-danger').should('be.visible');
      // 點擊到購物車
      cy.get('a[href="#/cart"]').click();
      // 點擊套用優惠券
      cy.get('#coupon').type('happy99');
      cy.get('button').contains('套用優惠碼').click();
      // 需跳出'已套用優惠券'的訊息
      cy.get('.p-toast-message-success').should('be.visible');
      cy.get('.p-toast-message').contains('已套用優惠券').should('be.visible');
      // 全部商品已套用 且 折扣價 低於 原價
      cy.get('p.onsale').each(($onsale, index) => {
        cy.get('p.text-danger')
          .eq(index)
          .invoke('text')
          .then((discountedPrice) => {
            const original = parseFloat($onsale.text().replace(/[$,]/g, ''));
            const discount = parseFloat(discountedPrice.replace(/[$,]/g, ''));

            expect(discount).to.be.lessThan(original);
          });
      });
      // 點擊前往結帳
      cy.get('button').contains('前往結帳').click();
      // 需到建立訂單頁
      cy.url().should('include', '/order');
      // 填寫表單
      const fillCheckoutForm = () => {
        cy.get('#name').type('王小明');
        cy.get('#tel').type('0973846284');
        cy.get('#address').type('e2e測試');
        cy.get('#email').type('test@example.com');
        cy.get('#payment').select('信用卡');
      };
      fillCheckoutForm();
      // 點擊建立訂單
      cy.get('button').contains('建立訂單').click();
      // 購物車紅點需消失
      cy.get('.p-badge.p-badge-dot.p-badge-danger').should('not.exist');
      // 點擊結帳
      cy.get('button').contains('結帳去').click();
      // 需跳出'是否確定結帳'視窗
      cy.get('.swal2-popup').should('be.visible');
      cy.get('.swal2-title').should('have.text', '是否確定結帳?');
      cy.get('.swal2-confirm').should('be.visible').and('contain', '是的！');
      cy.get('.swal2-confirm').click();
      cy.get('.swal2-popup').should('not.exist');
      cy.get('.swal2-popup').should('be.visible');
      cy.get('.swal2-title').should('have.text', '付款完成');
      // 需到結帳完成頁
      cy.url().should('include', '/checkout');
      // 點擊回到商品頁
      cy.contains('a', '回到商品頁').click();
      // 需到全部商品頁
      cy.url().should('include', '/products');
    });
  });
  context('非正常購物流程測試', () => {
    it('購物車為空時無法套用優惠券無法前往結帳', () => {
      // 訪問網站
      cy.visit('http://localhost:3000/glassesShopVite/');
      // 購物車為空時
      cy.get('a[href="#/cart"]').click();
      // 點擊套用優惠券
      cy.get('#coupon').type('happy99');
      cy.get('button').contains('套用優惠碼').click();
      // 需跳出'購物車內沒有商品'的警告
      cy.get('.p-toast-message-warn').should('be.visible');
      cy.get('.p-toast-message').contains('購物車內沒有商品').should('be.visible');
      // 點結帳
      cy.get('button').contains('前往結帳').click();
      // 需跳出'購物車內沒有商品'的警告
      cy.get('.p-toast-message-warn').should('be.visible');
      cy.get('.p-toast-message').contains('購物車內沒有商品').should('be.visible');
    });
  });
});
