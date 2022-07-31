import { mount } from '@vue/test-utils';
import DrinkDetails from '@/pages/DrinkDetails.vue';

describe('DrinkDetails.vue 에 대한 test 입니다.', () => {
  it('하단 메뉴 부분에 NavMenu가 있는지?', () => {
    const wrapper = mount(DrinkDetails);

    expect(wrapper.find('div[data-test="NavMenu"]').exists()).toBeTruthy();
  });

  it('음료 사진 및 버튼이 있는지?', () => {
    const wrapper = mount(DrinkDetails);

    expect(wrapper.find('div[data-test="drinkImg"]').exists()).toBeTruthy();
    expect(wrapper.find('button[data-test="share-Btn"]').exists()).toBeTruthy();
    expect(wrapper.find('button[data-test="back-Btn"]').exists()).toBeTruthy();
  });

  it('추천 메뉴 및 추천 메뉴가 적힐 공간이 있는지?', () => {
    const wrapper = mount(DrinkDetails);

    expect(wrapper.find('div[data-test="best-Menu"]').exists()).toBeTruthy();
  });

  it('음료 이름 하단에 음료 설명이 있는지?', () => {
    const wrapper = mount(DrinkDetails);

    expect(wrapper.find('div[data-test="drink-Intro"]').exists()).toBeTruthy();
  });

  it('음료 설명 하단에 음료 가격이 있는지?', () => {
    const wrapper = mount(DrinkDetails);

    expect(wrapper.find('div[data-test="drink-Price"]').exists()).toBeTruthy();
  });

  it('뜨거운 음료 차가운 음료 선택할 수 있는 버튼이 있는지?', () => {
    const wrapper = mount(DrinkDetails);

    expect(wrapper.find('div[data-test="select-Hot-ICE"]').exists()).toBeTruthy();
  });

  it('음료의 사이즈 선택을 할 수 있는 버튼이 있는지?', () => {
    const wrapper = mount(DrinkDetails);

    expect(wrapper.find('div[data-test="select-Coffee-Size"]').exists()).toBeTruthy();
  });

  it('컵 선택 버튼이 있는지?', () => {
    const wrapper = mount(DrinkDetails);

    expect(wrapper.find('div[data-test="select-Cup"]').exists()).toBeTruthy();
  });

  it('퍼스널 옵션 및 샷추가 버튼이 있는지?', () => {
    const wrapper = mount(DrinkDetails);

    expect(wrapper.find('div[data-test="personal-Option"]').exists()).toBeTruthy();
    expect(wrapper.find('div[data-test="add-Shot"]').exists()).toBeTruthy();
  });

  it('+- 버튼 및 가격, 장바구니, 주문하기 UI가 있는지?', () => {
    const wrapper = mount(DrinkDetails);

    expect(wrapper.find('div[data-test="menu-result"]').exists()).toBeTruthy();
    expect(wrapper.find('div[data-test="price-Result"]').exists()).toBeTruthy();
    expect(wrapper.find('div[data-test="heart-Menu"]').exists()).toBeTruthy();

    expect(wrapper.find('div[data-test="menu-Add-Minus"]').exists()).toBeTruthy();
    expect(wrapper.find('button[data-test="basket-Menu"]').exists()).toBeTruthy();
    expect(wrapper.find('button[data-test="order-Menu"]').exists()).toBeTruthy();
  });
});
