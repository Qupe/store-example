import Vue from 'vue';
import {
  SET_CATALOG_ITEMS,
  SET_EXCHANGE_RATE,
  SET_NOTIFIER_VISIBILITY,
} from '@/constants/mutationTypes';
import { GET_GOODS } from '@/constants/actionTypes';

export default {
  namespaced: true,
  state: {
    data: {
      1: {
        G: 'Книги',
        B: {
          1: {
            N: 'Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест, К. Штайн.',
            T: 1,
          },
          2: {
            N: 'Совершенный код. Стив Макконнелл.',
            T: 1,
          },
          3: {
            N: 'JavaScript. Подробное руководство. Дэвид Флэнаган.',
            T: 1,
          },
        },
      },
      2: {
        G: 'Еда',
        C: 2,
        B: {
          7: {
            N: 'Овсяные пирожные с шоколадной прослойкой',
            T: 3,
          },
          8: {
            N: 'Суп с пекинской капустой',
            T: 3,
          },
          85: {
            N: 'Вишня в коньяке',
            T: 3,
          },
          86: {
            N: 'Постный фаршированный перец',
            T: 3,
          },
          109: {
            N: 'Салат Подсолнух',
            T: null,
          },
          110: {
            N: 'Форель «Эрланген»',
            T: null,
          },
          111: {
            N: 'Салат с морепродуктами',
            T: 3,
          },
          112: {
            N: 'Тёртый пирог',
            T: 3,
          },
          115: {
            N: 'Свинина, маринованная в красном вине, с кориандром',
            T: null,
          },
          116: {
            N: 'Салат с черносливом и ветчиной',
            T: null,
          },
          125: {
            N: 'Болгарский перец и цуккини на гриле',
            T: 3,
          },
          126: {
            N: 'Салат «Букет нарциссов»',
            T: 3,
          },
          127: {
            N: 'Салат из морепродуктов, с огурцами, рукколой и оливками',
            T: 3,
          },
        },
      },
      5: {
        G: 'Спорт',
        C: 2,
        B: {
          184: {
            N: 'Беговая дорожка',
            T: 1,
          },
          185: {
            N: 'Гантели съемные',
            T: 1,
          },
          186: {
            N: 'Ружьё охотничье',
            T: 1,
          },
          187: {
            N: 'Велотренажер',
            T: 1,
          },
        },
      },
      8: {
        G: 'Сантехника',
        C: 3,
        B: {
          4: {
            N: 'Акриловая ванна Alpen Mars ',
            T: 1,
          },
          5: {
            N: 'Смеситель Sturm Classica',
            T: 1,
          },
          6: {
            N: 'Тумба с раковиной Tiffany World ',
            T: 1,
          },
        },
      },
      10: {
        G: 'Запчасти для машин',
        C: 3,
        B: {
          191: {
            N: 'Амортизатор задний CX-5 ',
            T: 3,
          },
          192: {
            N: 'Пружина амортизатора ',
            T: 3,
          },
          193: {
            N: 'Корпус воздушного фильтра ',
            T: 3,
          },
          194: {
            N: 'Ремень приводной',
            T: 3,
          },
          195: {
            N: 'Диффузор радиатора',
            T: 1,
          },
          196: {
            N: 'Фильтр АКПП',
            T: 3,
          },
        },
      },
      15: {
        G: 'Сувениры',
        C: 2,
        B: {
          11: {
            N: 'Набор для рисования Пастель',
            T: 3,
          },
          12: {
            N: 'Брелок-рулетка',
            T: 3,
          },
          63: {
            N: 'Брелок-открывалка',
            T: 3,
          },
          64: {
            N: 'Ручка-стилус шариковая',
            T: 3,
          },
          146: {
            N: 'Браслет',
            T: 3,
          },
          147: {
            N: 'Чехол для очков',
            T: 3,
          },
          148: {
            N: 'Сумка для выставок',
            T: 3,
          },
        },
      },
    },
  },
  mutations: {
    [SET_CATALOG_ITEMS](state, payload) {
      payload.forEach((item) => {
        Vue.set(state.data[item.G].B[item.T], 'T', item.P);
        Vue.set(state.data[item.G].B[item.T], 'C', item.C);
      });
    },
  },
  actions: {
    [GET_GOODS]: ({ commit }) => import('../assets/data/data.json').then((response) => {
      commit(SET_EXCHANGE_RATE, null, { root: true });
      commit(SET_NOTIFIER_VISIBILITY, true, { root: true });
      commit(SET_CATALOG_ITEMS, response.Value.Goods);
    }),
  },
};
