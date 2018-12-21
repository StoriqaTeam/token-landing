const getTelegramLink = (countryCode) => {
  let telegramLink = 'https://t.me/storiqa_en';
  switch (true) {
    // СНГ
    case countryCode === 'RU' ||
         countryCode === 'AZ' ||
         countryCode === 'AM' ||
         countryCode === 'BY' ||
         countryCode === 'KZ' ||
         countryCode === 'KG' ||
         countryCode === 'MD' ||
         countryCode === 'TJ' ||
         countryCode === 'TM' ||
         countryCode === 'UZ':
      telegramLink = 'https://t.me/storiqa_rus';
      break;

    // Турция
    case countryCode === 'TR':
      telegramLink = 'https://t.me/StoriqaTurkish';
      break;

    // Северная и Южная Кореи
    case countryCode === 'KR' || countryCode === 'KP':
      telegramLink = 'https://t.me/StoriqaKorean';
      break;

    // Потругалия, Бразилия, Ангола, Мозамбик, Кабо-Верде, Гвинея-Бисау, Сан-Томе и Принсипи, Восточный Тимор
    case countryCode === 'PT' ||
         countryCode === 'BR' ||
         countryCode === 'AO' ||
         countryCode === 'MZ' ||
         countryCode === 'CV' ||
         countryCode === 'GW' ||
         countryCode === 'ST' ||
         countryCode === 'TL':
      telegramLink = 'https://t.me/StoriqaPortuguese';
      break;

    // Китай
    case countryCode === 'CN':
      telegramLink = 'https://t.me/StoriqaChinese';
      break;

    // Вьетнам
    case countryCode === 'VN':
      telegramLink = 'https://t.me/StoriqaVietnam';
      break;

    // Япония
    case countryCode === 'JP':
      telegramLink = 'https://t.me/StoriqaJapanese';
      break;

    // Таиланд
    case countryCode === 'TH':
      telegramLink = 'https://t.me/StoriqaThailand';
      break;

    // Индонезия
    case countryCode === 'ID':
      telegramLink = 'https://t.me/StoriqaIndonesia';
      break;

    // Нигерия
    case countryCode === 'NG':
      telegramLink = 'https://t.me/StoriqaNigeria';
      break;

    // Испания, Филлипины, Аргентина, Боливия, Чили, Колумбия, Коста-Рика, Куба, Доминиканская Республика, Эквадор,
    // Гватемала, Гондурас, Мексика, Никарагуа, Панама, Парагвай, Перу, Пуэрто-Рико, Сальвадор, Уругвай, Венесуэла
    case countryCode === 'ES' ||
         countryCode === 'PH' ||
         countryCode === 'AR' ||
         countryCode === 'BO' ||
         countryCode === 'CL' ||
         countryCode === 'CO' ||
         countryCode === 'CR' ||
         countryCode === 'CU' ||
         countryCode === 'DO' ||
         countryCode === 'EC' ||
         countryCode === 'GT' ||
         countryCode === 'HN' ||
         countryCode === 'MX' ||
         countryCode === 'NI' ||
         countryCode === 'PA' ||
         countryCode === 'PY' ||
         countryCode === 'PE' ||
         countryCode === 'PR' ||
         countryCode === 'SV' ||
         countryCode === 'UY' ||
         countryCode === 'VE':
      telegramLink = 'https://t.me/StoriqaSpanish';
      break;

    // Алжир, Бахрейн, Джибути, Египет, Западная Сахара, Иордания, Ирак, Йемен, Катар, Коморские острова, Кувейт,
    // Ливан, Ливия, Мавритания, Марокко, Объединенные Арабские Эмираты, Оман, Палестинская Автономия,
    // Саудовская Аравия, Сирия, Сомали, Судан, Тунис, Чад, Эритрея
    case countryCode === 'DZ' ||
         countryCode === 'BH' ||
         countryCode === 'DJ' ||
         countryCode === 'EG' ||
         countryCode === 'EH' ||
         countryCode === 'JO' ||
         countryCode === 'IQ' ||
         countryCode === 'YE' ||
         countryCode === 'QA' ||
         countryCode === 'KM' ||
         countryCode === 'KW' ||
         countryCode === 'LB' ||
         countryCode === 'LY' ||
         countryCode === 'MR' ||
         countryCode === 'MA' ||
         countryCode === 'AE' ||
         countryCode === 'OM' ||
         countryCode === 'PS' ||
         countryCode === 'SA' ||
         countryCode === 'SY' ||
         countryCode === 'SO' ||
         countryCode === 'SD' ||
         countryCode === 'TN' ||
         countryCode === 'TD' ||
         countryCode === 'ER':
      telegramLink = 'https://t.me/StoriqaArabic';
      break;
    default:
      telegramLink = 'https://t.me/storiqa_en';
  }
  return telegramLink;
};

export default getTelegramLink;
