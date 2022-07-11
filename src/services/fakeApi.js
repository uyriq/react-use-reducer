import pic1 from "../images/prod-1.jpg";
import pic2 from "../images/prod-2.jpg";
import rec1 from "../images/rec-1.png";
import rec2 from "../images/rec-2.png";
import rec3 from "../images/rec-3.png";
import rec4 from "../images/rec-4.png";

export const getItemsRequest = async () => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        success: true,
        data: [
          {
            id: 1,
            src: pic1,
            qty: 1,
            text: "похожая на настоящую красный Мягкая приманка в виде червя силиконовый искусственный приманки рыбный запах креветок",
            price: 120,
          },
          {
            id: 2,
            src: pic2,
            qty: 1,
            text: "Умное кольцо из нержавеющей стали с датчиком температуры тела, модный дисплей",
            price: 450,
          },
        ],
      });
    }, 1500)
  );
};

export const getRecommendedItemsRequest = async () => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        success: true,
        data: [
          {
            src: rec1,
            price: 640,
            text: "Деревянная подушка в виде бревна, деревянная текстура пня для украшения",
          },
          {
            src: rec2,
            price: 480,
            text: "Забавная 3D имитация, закусочный хлеб, мягкая подушка в форме поясницы",
          },
          {
            src: rec3,
            price: 960,
            text: "3D моделирование формы еды плюшевая подушка креативная курица колбаса",
          },
          {
            src: rec4,
            price: 360,
            text: "Забавная Мужская футболка Роберт Паттинсон стоячий мем",
          },
        ],
      });
    }, 1500)
  );
};

const promoCodes = {
  PROMO10: 10,
  PROMO15: 15,
  PROMO20: 20,
  PROMO99: 99,
  PROMO100: 100,
};

export const applyPromoCodeRequest = async (code) => {
  const result = { success: true };
  // ~ bitwise not operator  is doing -(N+1) так что из -1 (не найдено) => 0 ( false )
  if (~Object.keys(promoCodes).indexOf(code)) {
    result.discount = promoCodes[code];
  } else {
    result.success = false;
    result.discount = 0;
  }
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(result);
    }, 1500)
  );
};
