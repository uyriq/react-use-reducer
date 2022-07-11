# Learn React

### REACT-USE-REDUCer

В этом задании продолжим практиковаться с уже знакомой корзиной товаров.

Сейчас состояние `discount` определено с помощью хука `useState()`. Ваша задача — переписать это состояние с использованием хука `useReducer()`.

Приложение выглядит как страница корзины с возможностью добавлять товары и применять промокоды:

![https://pictures.s3.yandex.net/resources/localhost_3000__2_1620721396.png](https://pictures.s3.yandex.net/resources/localhost_3000__2_1620721396.png)

_Корзина выглядит и работает точно также, как и в предыдущем уроке._

Вносить исправления нужно в нескольких файлах: `components/app/app.js`, `components/cart/products-container.js`, `components/cart/product.js`, `components/common/total-price.js` и `ui/promo-button/promo-button.js`.

Для решения задачи вам потребуется:

- Заменить хук `useState()` на `useReducer()`;
- Написать функцию-редьюсер, которая будет изменять значение состояния `discount`;
- Сохранить новое состояние и функцию отправки экшена в существующем контексте `DiscountContext`;
- В дочерних компонентах переработать обращение к состоянию и заменить функцию `setDiscount()` на функцию отправки экшена.

Для удобства разработки определите начальное значение стейта `discount` как константу. Это можно сделать рядом с компонентом `App`:

```jsx
const discountInitialState = { discount: null };
```

Как вы могли заметить, значение стейта вместо примитива стало объектом с полем `discount`. Это сделано для удобства обработки состояния внутри редьюсера. Возможно, объект с одним полем кажется избыточным, но лучше с самого начала привыкать к хорошим практикам.

Следующим шагом напишите функцию-редьюсер, которая принимает аргументы `state` и `action`, где `state` — текущее значение состояния, а `action` — объект с полями `type` и `payload`. В зависимости от `action.type` состояние `discount` должно либо модифицироваться (если `action.type === 'set'`), либо сбрасываться (если `action.type === 'reset'`). Значение для изменения состояния нужно брать из поля `action.payload`. Сброс состояния означает возврат к начальному состоянию: `discountInitialState`.

После того, как вы определили начальное состояние и функцию-редьюсер, можно заменить хук `useState()` на `useReducer()`:

```jsx

function App() {
// ...const [discountState, discountDispatcher] = useReducer(reducer, discountInitialState, undefined);
// ...

```

Функция инициализации `init` в этом случае не используется, так что третьим аргументом можно передать `undefined`.

Теперь, когда стейт полностью определён с помощью хука `useReducer()`, сохраните `discountState` и `discountDispatcher` в контексте:

```jsx

<DiscountContext.Provider value={{ discountState, discountDispatcher }}>

```

Переработайте в компонентах обращение к состоянию и способ обновления состояния `discount`.

Получить стейт можно так:

```jsx
const { discountState } = useContext(DiscountContext);
// текущее значение скидки хранится в поле discount
discountState.discount;
```

Для обновления стейта нужно вызвать `discountDispatcher`:

```jsx
const { discountDispatcher } = useContext(DiscountContext);

// обновить стейт
discountDispatcher({ type: "set", payload: newDiscountValue });

// сбросить стейт
discountDispatcher({ type: "reset" });
```

Вот и всё. Как и в предыдущем уроке, главный критерий успеха в том, что приложение работает как раньше и никакая функциональность не сломалась.

Код редьюсера выглядит так:

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "set":
      return { discount: action.payload };
    case "reset":
      return discountInitialState;
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}
```

Переработать получение состояния нужно в компонентах `Product` и `TotalPrice`.

Заменить `setDiscount` на `discountDispatcher` следует в компонентах `ProductsContainer` и `PromoButton`.

Не забудьте добавить импорт: `import {useReducer} from 'react’`.
