import type { CategorySlug } from "./categories";
import { getGeneratedProductImages } from "./image-map";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  price: number;
  oldPrice?: number;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  material: string;
  color: string;
  room: string;
  dimensions: string;
  style: string;
  warranty: string;
  availability: string;
  isPopular: boolean;
  isNew: boolean;
};

const product = (
  id: string,
  slug: string,
  name: string,
  category: CategorySlug,
  price: number,
  options: Omit<Product, "id" | "slug" | "name" | "category" | "price" | "images">
): Product => ({
  id,
  slug,
  name,
  category,
  price,
  images: getGeneratedProductImages(category, id),
  ...options
});

export const products: Product[] = [
  product("p-001", "divan-modena", "Диван Модена", "sofas", 89990, {
    oldPrice: 104990,
    shortDescription: "Прямой диван с глубокими модулями и мягкой посадкой.",
    fullDescription:
      "Модена создан для гостиной, где важны спокойные линии, плотная ткань и ощущение приватного клуба. Модули легко адаптируются под пространство, а низкая посадка делает силуэт особенно дорогим.",
    material: "Велюр, массив бука, металл",
    color: "Тёплый графит",
    room: "Гостиная",
    dimensions: "260 x 105 x 78 см",
    style: "Современный premium",
    warranty: "5 лет",
    availability: "В наличии",
    isPopular: true,
    isNew: false
  }),
  product("p-002", "divan-palermo", "Диван Палермо", "sofas", 124990, {
    shortDescription: "Угловая модель с мягкой геометрией и широкой оттоманкой.",
    fullDescription:
      "Палермо собирает вокруг себя гостиную: широкая оттоманка, плотные подушки и бронзовые опоры создают камерный премиальный акцент.",
    material: "Шенилл, фанера, латунь",
    color: "Мокко",
    room: "Гостиная",
    dimensions: "310 x 180 x 82 см",
    style: "Soft modern",
    warranty: "5 лет",
    availability: "Под заказ 14 дней",
    isPopular: true,
    isNew: true
  }),
  product("p-003", "divan-verona", "Диван Верона", "sofas", 76990, {
    shortDescription: "Компактный диван для квартиры, кабинета или лаунж-зоны.",
    fullDescription:
      "Верона сохраняет премиальную посадку в компактном корпусе. Подходит для квартиры, офиса или приватной зоны ожидания.",
    material: "Букле, массив сосны",
    color: "Кремовый камень",
    room: "Гостиная",
    dimensions: "218 x 96 x 80 см",
    style: "Minimal luxury",
    warranty: "3 года",
    availability: "В наличии",
    isPopular: false,
    isNew: true
  }),
  product("p-004", "divan-sorrento", "Диван Сорренто", "sofas", 139990, {
    oldPrice: 159990,
    shortDescription: "Модульный диван с округлыми блоками и lounge-посадкой.",
    fullDescription:
      "Сорренто выглядит как часть дорогого шоурума: низкая линия, плавные углы, глубокая посадка и гибкая модульная конфигурация.",
    material: "Микрофибра, металл, HR-пена",
    color: "Пепельный беж",
    room: "Гостиная",
    dimensions: "340 x 210 x 76 см",
    style: "Italian lounge",
    warranty: "5 лет",
    availability: "Под заказ 21 день",
    isPopular: true,
    isNew: false
  }),
  product("p-005", "divan-luara", "Диван Луара", "sofas", 94990, {
    shortDescription: "Диван с тонкими подлокотниками и выразительной строчкой.",
    fullDescription:
      "Луара добавляет интерьеру лёгкий французский ритм: тонкие подлокотники, спокойная ткань и аккуратная строчка без лишнего декора.",
    material: "Рогожка premium, массив",
    color: "Дымчатый тауп",
    room: "Гостиная",
    dimensions: "246 x 102 x 83 см",
    style: "Contemporary classic",
    warranty: "4 года",
    availability: "В наличии",
    isPopular: false,
    isNew: false
  }),
  product("p-006", "krovat-lorenco", "Кровать Лоренцо", "beds", 79990, {
    shortDescription: "Мягкая кровать с высоким изголовьем и тихой палитрой.",
    fullDescription:
      "Лоренцо создаёт в спальне настроение бутик-отеля: высокое изголовье, плотная обивка и устойчивое основание с подъёмным механизмом.",
    material: "Велюр, ортопедическое основание",
    color: "Шампань",
    room: "Спальня",
    dimensions: "180 x 200 см",
    style: "Hotel luxury",
    warranty: "5 лет",
    availability: "В наличии",
    isPopular: true,
    isNew: false
  }),
  product("p-007", "krovat-bellagio", "Кровать Белладжио", "beds", 94990, {
    shortDescription: "Кровать с панельным изголовьем и встроенной подсветкой.",
    fullDescription:
      "Белладжио соединяет мягкую архитектуру панелей и деликатный свет, который превращает спальню в спокойную вечернюю сцену.",
    material: "Экокожа, МДФ, LED-подсветка",
    color: "Глубокий графит",
    room: "Спальня",
    dimensions: "200 x 210 см",
    style: "Architectural premium",
    warranty: "5 лет",
    availability: "Под заказ 18 дней",
    isPopular: true,
    isNew: true
  }),
  product("p-008", "krovat-versal", "Кровать Версаль", "beds", 97990, {
    oldPrice: 119990,
    shortDescription: "Классическая форма с современно спокойной отделкой.",
    fullDescription:
      "Версаль сохраняет статусную классику без тяжести: мягкая стёжка, глубокий цвет и аккуратные латунные детали.",
    material: "Велюр, массив, латунные детали",
    color: "Тёмный шоколад",
    room: "Спальня",
    dimensions: "180 x 200 см",
    style: "Modern classic",
    warranty: "4 года",
    availability: "В наличии",
    isPopular: false,
    isNew: false
  }),
  product("p-009", "krovat-toskana", "Кровать Тоскана", "beds", 87990, {
    shortDescription: "Лаконичная кровать с мягким изголовьем и нишей хранения.",
    fullDescription:
      "Тоскана даёт спальне чистую геометрию, удобную систему хранения и тёплую обивку, которая не спорит с текстилем.",
    material: "Букле, берёзовая фанера",
    color: "Молочный серый",
    room: "Спальня",
    dimensions: "160 x 200 см",
    style: "Calm modern",
    warranty: "3 года",
    availability: "В наличии",
    isPopular: false,
    isNew: true
  }),
  product("p-010", "krovat-nero", "Кровать Неро", "beds", 89990, {
    shortDescription: "Выразительная тёмная кровать с низким силуэтом.",
    fullDescription:
      "Неро работает как архитектурный объект: глубокий чёрный тон, широкое основание и мягкое изголовье с тонким бронзовым кантом.",
    material: "Нубук premium, металл",
    color: "Чёрный графит",
    room: "Спальня",
    dimensions: "200 x 210 см",
    style: "Dark luxury",
    warranty: "5 лет",
    availability: "Под заказ 21 день",
    isPopular: true,
    isNew: false
  }),
  product("p-011", "kuhnya-milan", "Кухня Милан", "kitchens", 219990, {
    shortDescription: "Проектная кухня с островом, матовыми фасадами и подсветкой.",
    fullDescription:
      "Милан создаётся под размеры помещения: матовые фасады, каменная столешница, скрытая фурнитура и вечерняя подсветка рабочей зоны.",
    material: "МДФ эмаль, кварцевый агломерат",
    color: "Чёрный дуб",
    room: "Кухня",
    dimensions: "Индивидуальный проект",
    style: "Urban premium",
    warranty: "5 лет",
    availability: "Проектирование 3 дня",
    isPopular: true,
    isNew: false
  }),
  product("p-012", "kuhnya-aurelia", "Кухня Аурелия", "kitchens", 289990, {
    shortDescription: "Светлая кухня с латунными акцентами и высоким пеналом.",
    fullDescription:
      "Аурелия раскрывает премиальный интерьер через спокойные светлые фасады, тёплую фурнитуру и рациональную систему хранения.",
    material: "Шпон, эмаль, латунь",
    color: "Ivory и бронза",
    room: "Кухня",
    dimensions: "Индивидуальный проект",
    style: "Soft luxury",
    warranty: "5 лет",
    availability: "Под заказ 35 дней",
    isPopular: true,
    isNew: true
  }),
  product("p-013", "kuhnya-bruno", "Кухня Бруно", "kitchens", 184990, {
    shortDescription: "Компактная кухня для квартиры с высоким хранением.",
    fullDescription:
      "Бруно помогает собрать строгую кухню без визуального шума: вертикальные фасады, интегрированные ручки и плотная рабочая поверхность.",
    material: "ЛДСП premium, HPL-столешница",
    color: "Орех и графит",
    room: "Кухня",
    dimensions: "Индивидуальный проект",
    style: "Functional premium",
    warranty: "4 года",
    availability: "Под заказ 25 дней",
    isPopular: false,
    isNew: false
  }),
  product("p-014", "kuhnya-kapri", "Кухня Капри", "kitchens", 249990, {
    oldPrice: 279990,
    shortDescription: "Кухня с островом, витринными фасадами и мягким светом.",
    fullDescription:
      "Капри рассчитана на открытые кухни-гостиные: остров становится центром общения, а витрины добавляют интерьеру глубину.",
    material: "Эмаль, стекло, кварц",
    color: "Песочный графит",
    room: "Кухня",
    dimensions: "Индивидуальный проект",
    style: "Mediterranean premium",
    warranty: "5 лет",
    availability: "Проектирование 3 дня",
    isPopular: true,
    isNew: false
  }),
  product("p-015", "kuhnya-granda", "Кухня Гранда", "kitchens", 319990, {
    shortDescription: "Статусная кухня с каменной фактурой и скрытыми модулями.",
    fullDescription:
      "Гранда выглядит цельно и дорого: каменная фактура, высокие шкафы, остров и продуманная интеграция техники.",
    material: "Керамогранит, МДФ, алюминий",
    color: "Чёрный камень",
    room: "Кухня",
    dimensions: "Индивидуальный проект",
    style: "Luxury monolith",
    warranty: "5 лет",
    availability: "Под заказ 45 дней",
    isPopular: false,
    isNew: true
  }),
  product("p-016", "shkaf-rimini", "Шкаф Римини", "wardrobes", 59990, {
    shortDescription: "Трёхдверный шкаф с подсветкой и спокойной геометрией.",
    fullDescription:
      "Римини закрывает ежедневное хранение без массивности: ровные фасады, мягкая подсветка и продуманное внутреннее наполнение.",
    material: "МДФ, зеркало, алюминий",
    color: "Графит",
    room: "Спальня",
    dimensions: "240 x 62 x 230 см",
    style: "Modern storage",
    warranty: "3 года",
    availability: "В наличии",
    isPopular: true,
    isNew: false
  }),
  product("p-017", "shkaf-asti", "Шкаф Асти", "wardrobes", 74990, {
    shortDescription: "Распашной шкаф с вертикальными латунными ручками.",
    fullDescription:
      "Асти добавляет комнате тонкий акцент: матовые фасады, бронзовые ручки и внутренние секции под длинную одежду.",
    material: "МДФ, латунь",
    color: "Оливковый графит",
    room: "Прихожая",
    dimensions: "220 x 60 x 230 см",
    style: "Contemporary",
    warranty: "4 года",
    availability: "В наличии",
    isPopular: false,
    isNew: true
  }),
  product("p-018", "shkaf-veneciya", "Шкаф Венеция", "wardrobes", 104990, {
    oldPrice: 124990,
    shortDescription: "Шкаф-витрина со стеклом и внутренним тёплым светом.",
    fullDescription:
      "Венеция подходит для гардеробных зон и спален, где хранение становится частью атмосферы: стекло, свет и строгий силуэт.",
    material: "Тонированное стекло, алюминий",
    color: "Дымчатое стекло",
    room: "Спальня",
    dimensions: "260 x 64 x 240 см",
    style: "Showroom storage",
    warranty: "5 лет",
    availability: "Под заказ 21 день",
    isPopular: true,
    isNew: false
  }),
  product("p-019", "garderob-livorno", "Гардероб Ливорно", "wardrobes", 149990, {
    shortDescription: "Открытая гардеробная система с бронзовым профилем.",
    fullDescription:
      "Ливорно создаётся под комнату и помогает собрать гардеробную как в премиальном шоуруме: открытые секции, свет и аккуратный профиль.",
    material: "Шпон, алюминий, LED",
    color: "Орех и бронза",
    room: "Гардеробная",
    dimensions: "Индивидуальный проект",
    style: "Boutique closet",
    warranty: "5 лет",
    availability: "Проектирование 3 дня",
    isPopular: false,
    isNew: true
  }),
  product("p-020", "shkaf-orlando", "Шкаф Орландо", "wardrobes", 68990, {
    shortDescription: "Шкаф-купе с матовыми дверями и мягким закрыванием.",
    fullDescription:
      "Орландо даёт максимум хранения в спокойном корпусе: качественные направляющие, плотные фасады и лаконичная отделка.",
    material: "ЛДСП premium, зеркало",
    color: "Тёмный кашемир",
    room: "Прихожая",
    dimensions: "230 x 65 x 230 см",
    style: "Urban compact",
    warranty: "3 года",
    availability: "В наличии",
    isPopular: false,
    isNew: false
  }),
  product("p-021", "kreslo-everest", "Кресло Эверест", "office-chairs", 49990, {
    shortDescription: "Эргономичное кресло с высокой спинкой и мягкой поддержкой.",
    fullDescription:
      "Эверест помогает работать долго и спокойно: регулируемая поддержка, плотная посадка и премиальная фактура обивки.",
    material: "Натуральная кожа, металл",
    color: "Чёрный",
    room: "Кабинет",
    dimensions: "68 x 72 x 122 см",
    style: "Executive",
    warranty: "3 года",
    availability: "В наличии",
    isPopular: true,
    isNew: false
  }),
  product("p-022", "kreslo-arktika", "Кресло Арктика", "office-chairs", 37990, {
    shortDescription: "Светлое кресло с сетчатой поддержкой и тихими роликами.",
    fullDescription:
      "Арктика создана для современного домашнего офиса: воздухопроницаемая спинка, мягкая посадка и спокойная светлая палитра.",
    material: "Ткань, сетка, алюминий",
    color: "Серый лёд",
    room: "Кабинет",
    dimensions: "64 x 68 x 118 см",
    style: "Ergo modern",
    warranty: "2 года",
    availability: "В наличии",
    isPopular: false,
    isNew: true
  }),
  product("p-023", "kreslo-vektor", "Кресло Вектор", "office-chairs", 42990, {
    shortDescription: "Рабочее кресло с чётким профилем и синхромеханизмом.",
    fullDescription:
      "Вектор балансирует между офисной функциональностью и домашним комфортом: точные настройки, уверенная спинка и строгая линия.",
    material: "Экокожа, металл",
    color: "Графит",
    room: "Кабинет",
    dimensions: "66 x 70 x 120 см",
    style: "Tech premium",
    warranty: "3 года",
    availability: "Под заказ 10 дней",
    isPopular: false,
    isNew: false
  }),
  product("p-024", "kreslo-senator", "Кресло Сенатор", "office-chairs", 69990, {
    oldPrice: 84990,
    shortDescription: "Статусное кресло руководителя с мягкими подлокотниками.",
    fullDescription:
      "Сенатор задаёт кабинету уверенный тон: широкая спинка, натуральная кожа, плавный механизм качания и массивное основание.",
    material: "Натуральная кожа, алюминий",
    color: "Коньячный",
    room: "Кабинет",
    dimensions: "72 x 76 x 126 см",
    style: "Executive classic",
    warranty: "5 лет",
    availability: "В наличии",
    isPopular: true,
    isNew: false
  }),
  product("p-025", "kreslo-grand", "Кресло Гранд", "office-chairs", 58990, {
    shortDescription: "Кресло с выразительной боковой поддержкой и тихой базой.",
    fullDescription:
      "Гранд подходит для кабинета, переговорной и домашней рабочей зоны: плотная форма, комфортная посадка и солидная отделка.",
    material: "Кожа premium, металл",
    color: "Тёмный орех",
    room: "Кабинет",
    dimensions: "70 x 74 x 124 см",
    style: "Business lounge",
    warranty: "4 года",
    availability: "Под заказ 14 дней",
    isPopular: false,
    isNew: true
  }),
  product("p-026", "tumba-siena", "Тумба Сиена", "bedside-tables", 14990, {
    shortDescription: "Компактная тумба с двумя ящиками и бронзовой ручкой.",
    fullDescription:
      "Сиена завершает композицию у кровати: два тихих ящика, мягкая фактура фасада и тонкая бронзовая ручка.",
    material: "МДФ, шпон, латунь",
    color: "Тёмный орех",
    room: "Спальня",
    dimensions: "52 x 42 x 48 см",
    style: "Modern classic",
    warranty: "2 года",
    availability: "В наличии",
    isPopular: true,
    isNew: false
  }),
  product("p-027", "tumba-lira", "Тумба Лира", "bedside-tables", 18990, {
    shortDescription: "Округлая прикроватная тумба с мягким фасадом.",
    fullDescription:
      "Лира добавляет спальне мягкую форму и маленький световой акцент благодаря открытой нише и деликатной фурнитуре.",
    material: "МДФ, микрофибра",
    color: "Пыльная бронза",
    room: "Спальня",
    dimensions: "48 x 44 x 50 см",
    style: "Soft premium",
    warranty: "2 года",
    availability: "В наличии",
    isPopular: false,
    isNew: true
  }),
  product("p-028", "tumba-asti", "Тумба Асти", "bedside-tables", 21990, {
    oldPrice: 26990,
    shortDescription: "Высокая тумба с каменной столешницей и скрытым ящиком.",
    fullDescription:
      "Асти выглядит как маленький предмет коллекционного интерьера: каменная фактура, чёткая геометрия и скрытая система хранения.",
    material: "МДФ, керамогранит",
    color: "Графитовый камень",
    room: "Спальня",
    dimensions: "54 x 44 x 56 см",
    style: "Stone premium",
    warranty: "3 года",
    availability: "Под заказ 10 дней",
    isPopular: true,
    isNew: false
  }),
  product("p-029", "tumba-ravenna", "Тумба Равенна", "bedside-tables", 16990, {
    shortDescription: "Лаконичная тумба на тонких металлических опорах.",
    fullDescription:
      "Равенна визуально облегчает пространство: тонкие опоры, матовый корпус и удобная открытая полка для вечерних мелочей.",
    material: "Шпон, металл",
    color: "Кашемир",
    room: "Спальня",
    dimensions: "50 x 40 x 52 см",
    style: "Light modern",
    warranty: "2 года",
    availability: "В наличии",
    isPopular: false,
    isNew: false
  }),
  product("p-030", "tumba-nord", "Тумба Норд", "bedside-tables", 19990, {
    shortDescription: "Тумба с рифлёным фасадом и тёплой подсветкой ниши.",
    fullDescription:
      "Норд соединяет функциональность и вечернюю атмосферу: рифлёный фасад, скрытая ниша и свет, который подчёркивает фактуру.",
    material: "МДФ, LED, металл",
    color: "Чёрный ясень",
    room: "Спальня",
    dimensions: "56 x 42 x 54 см",
    style: "Nordic luxury",
    warranty: "3 года",
    availability: "Под заказ 12 дней",
    isPopular: false,
    isNew: true
  }),
  product("p-031", "spalnya-monako", "Спальня Монако", "bedrooms", 189990, {
    shortDescription: "Комплект спальни с кроватью, тумбами и шкафом.",
    fullDescription:
      "Монако собирает приватное пространство целиком: кровать с мягким изголовьем, две тумбы, комод и шкаф в единой фактуре.",
    material: "Велюр, МДФ, шпон",
    color: "Тёплый графит",
    room: "Спальня",
    dimensions: "Комплект под комнату",
    style: "Hotel suite",
    warranty: "5 лет",
    availability: "Проектирование 3 дня",
    isPopular: true,
    isNew: false
  }),
  product("p-032", "spalnya-valensiya", "Спальня Валенсия", "bedrooms", 229990, {
    shortDescription: "Светлый комплект спальни с мягкими панелями и комодом.",
    fullDescription:
      "Валенсия делает спальню светлой и собранной: широкие панели за изголовьем, аккуратные тумбы и вместимый комод.",
    material: "МДФ эмаль, букле, латунь",
    color: "Ivory",
    room: "Спальня",
    dimensions: "Комплект под комнату",
    style: "Soft classic",
    warranty: "5 лет",
    availability: "Под заказ 30 дней",
    isPopular: false,
    isNew: true
  }),
  product("p-033", "spalnya-imperiya", "Спальня Империя", "bedrooms", 279990, {
    oldPrice: 319990,
    shortDescription: "Статусная спальня с тёмным деревом и подсветкой.",
    fullDescription:
      "Империя предназначена для просторных комнат: тёмный шпон, архитектурные панели, подсветка и продуманное хранение.",
    material: "Шпон ореха, велюр, LED",
    color: "Тёмный орех",
    room: "Спальня",
    dimensions: "Комплект под комнату",
    style: "Grand luxury",
    warranty: "5 лет",
    availability: "Проектирование 3 дня",
    isPopular: true,
    isNew: false
  }),
  product("p-034", "spalnya-avrora", "Спальня Аврора", "bedrooms", 169990, {
    shortDescription: "Комплект для спокойной спальни в мягкой светлой гамме.",
    fullDescription:
      "Аврора держит интерьер в светлом премиальном ритме: мягкая кровать, лёгкое хранение и нейтральная палитра для текстиля.",
    material: "Букле, МДФ, шпон",
    color: "Молочный камень",
    room: "Спальня",
    dimensions: "Комплект под комнату",
    style: "Calm suite",
    warranty: "4 года",
    availability: "В наличии",
    isPopular: false,
    isNew: true
  }),
  product("p-035", "spalnya-kameliya", "Спальня Камелия", "bedrooms", 209990, {
    shortDescription: "Комплект с акцентным изголовьем и гардеробным модулем.",
    fullDescription:
      "Камелия объединяет спальню и хранение: акцентное изголовье, прикроватные модули и шкаф с мягким светом.",
    material: "Велюр, стекло, алюминий",
    color: "Тауп и бронза",
    room: "Спальня",
    dimensions: "Комплект под комнату",
    style: "Boutique bedroom",
    warranty: "5 лет",
    availability: "Под заказ 24 дня",
    isPopular: true,
    isNew: false
  })
];

export const getProductBySlug = (slug: string) =>
  products.find((item) => item.slug === slug);

export const getProductsByCategory = (category: CategorySlug) =>
  products.filter((item) => item.category === category);

export const getRelatedProducts = (current: Product, limit = 4) =>
  products
    .filter((item) => item.category === current.category && item.id !== current.id)
    .slice(0, limit);
