import qs from '../../utils/simple-query-string.min.js'

const addZero = number => number <= 9 ? `0${ number }` : number
const getHour = timestamp => new Date(timestamp).getHours();
const getMinute = timestamp => new Date(timestamp).getMinutes()
const getMonth = timestamp => new Date(timestamp).getMonth();
const getDay = timestamp => new Date(timestamp).getDay();
const getDate = timestamp => new Date(timestamp).getDate();
const getFullYear = timestamp => new Date(timestamp).getFullYear();
const toSeconds = timestamp => timestamp / 1000;
const toMinutes = timestamp => Math.floor(toSeconds(timestamp) / 60);
const toHours = timestamp => Math.floor(toMinutes(timestamp) / 60);
const toDays = timestamp => Math.floor(toHours(timestamp) / 24);
const toWeeks = timestamp => Math.floor((toDays(timestamp) + 4) / 7); // 1970-01-01 - четверг (+4 дня от недели)
const weekDay = timestamp => getDay(timestamp); // 0 - Воскресенье
const weekDayEn = timestamp => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][weekDay(timestamp)];
const weekDayEnFull = timestamp => [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
][weekDay(timestamp)];

const weekDayCn = timestamp => ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][weekDay(timestamp)];

const monthEnFull = timestamp => {
  return ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ][getMonth(timestamp)]
};

const monthEn = timestamp => {
  return ['Jan', 'Feb', 'Mar', 'Apr',
    'May', 'Jun', 'Jul', 'Aug',
    'Sep', 'Oct', 'Nov', 'Dec'
  ][getMonth(timestamp)]
};

const monthCn = timestamp => {
  return ['1月', '2月', '3月', '4月',
    '5月', '6月', '7月', '8月',
    '9月', '10月', '11月', '12月'
  ][getMonth(timestamp)]
};

const dayHuman = timestamp => {
  const day = getDate(timestamp);
  if ([1, 21, 31].includes(+day))
    return `${day}st`;
  else if ([2, 22].includes(+day))
    return `${day}nd`;
  else if ([3, 23].includes(+day))
    return `${day}rd`;
  else
    return `${day}th`;
};

const dayHumanCn = timestamp => {
  const day = getDate(timestamp);
  return `${day} 日`
};

const tr = (text, lang) => {
  if (lang === 'en') {
    return text;
  }
  const vocabularyCh = {
    'Invalid date': 'Неправльная дата',
    'Right now': 'Прямо сейчас',
    'Today': 'Сегодня днем',
    'Tonight': 'Сегодня вечером',
    'Tomorrow': 'Завтра',
    'This': 'Этот',
    'from': 'с',
    'to': 'до',
    'This': 'Этот',
    'This weekend': 'Эти выходные',
    'Next': 'Следущие',
    'Next weekend': 'Следующие выходные',
    'Every day': 'Каждый день',
    'On weekdays': 'В будни',
    'On weekends': 'На выходных',
    'and': 'и',
    'Monday': 'Понедельник',
    'Tuesday': 'Вторник',
    'Wednesday': 'Среда',
    'Thursday': 'Четверг',
    'Friday': 'Пятница',
    'Saturday': 'Суббота',
    'Sunday': 'Воскресенье'
  };
  return vocabularyCh[text] ? vocabularyCh[text] : '';
};

/**
 * Получение текстовки на нужном языке по двум датам
 * @param start - timestamp
 * @param end - timestamp
 * @param lang - en/ch
 * @returns { string }
 */
const getTimeTitle = (start, end, lang = 'en') => {
  const currentTimestamp = new Date(2019, 0, 1).getTime();
  // const currentTimestamp = new Date().getTime();
  const parseWeekDay = lang === 'ch' ? weekDayCn : weekDayEnFull;
  const parseMonth = lang === 'ch' ? monthCn : monthEn;

  const Invalid = {
    title: `${tr('Invalid date', lang)}`,
    condition: (start, end) => end < start,
  };

  const Past = {
    title: 'Past',
    condition: (start, end) => currentTimestamp > end,
  };

  const RightNow = {
    title: `${tr('Right now', lang)}`,
    condition: (start, end) => currentTimestamp >= start && currentTimestamp <= end
  };

  const Today = {
    title: `${tr('Today', lang)}`,
    condition: (start, end) => {
      const today = toDays(start) === toDays(currentTimestamp);
      return currentTimestamp < start && today && getHour(start) <= 19;
    }
  };

  const Tonight = {
    title: `${tr('Tonight', lang)}`,
    condition: (start, end) => {
      const today = toDays(start) === toDays(currentTimestamp);
      return currentTimestamp < start && today && getHour(start) > 19;
    }
  };

  const Tomorrow = {
    title: `${tr('Tomorrow', lang)}`,
    condition: (start, end) => {
      const diffDays = toDays(start) - toDays(currentTimestamp);
      return currentTimestamp < start && diffDays === 1;
    }
  };

  const ThisWeekday = {
    title: '',
    condition: function (start, end) {
      const sameWeek = toWeeks(start) === toWeeks(currentTimestamp);
      const isWeekday = [0, 1, 2, 3, 4].includes(getDay(start));
      const weekdayName = parseWeekDay(start);
      this.title = `${tr('This', lang)} ${weekdayName}`;
      return currentTimestamp < start && sameWeek && isWeekday;
    }
  };

  const ThisWeekend = {
    title: `${tr('This weekend', lang)}`,
    condition: (start, end) => {
      const sameWeek = toWeeks(start) === toWeeks(currentTimestamp);
      const isWeekend = [5, 6].includes(getDay(start));
      return currentTimestamp < start && sameWeek && isWeekend;
    }
  };

  const NextWeekday = {
    title: '',
    condition: function (start, end) {
      const nextWeek = toWeeks(start) === toWeeks(currentTimestamp) + 1;
      const isWeekday = [1, 2, 3, 4, 5].includes(getDay(start));
      const weekdayName = parseWeekDay(start);
      this.title = `${tr('Next', lang)} ${weekdayName}`;
      return currentTimestamp < start && nextWeek && isWeekday;
    }
  };

  const NextWeekend = {
    title: `${tr('Next weekend', lang)}`,
    condition: (start, end) => {
      const nextWeek = toWeeks(start) === toWeeks(currentTimestamp) + 1;
      const isWeekend = [0, 6].includes(getDay(start));
      return currentTimestamp < start && nextWeek && isWeekend;
    }
  };

  const Future = {
    title: 'Future',
    condition: function (start, end) {
      const moreTwoWeeks = toWeeks(start) >= toWeeks(currentTimestamp) + 2;
      const month = parseMonth(start);
      const otherYear = getFullYear(start) !== getFullYear(currentTimestamp);
      this.title = `${month} ${dayHuman(start)} ${otherYear ? getFullYear(start) : ''}`;
      return currentTimestamp < start && moreTwoWeeks;
    }
  };

  const result = [
    Invalid, Past, RightNow, Today, Tonight, Tomorrow, ThisWeekday, ThisWeekend, NextWeekday, NextWeekend, Future
  ].find(el => el.condition(start, end));
  return result ? result.title : 'past';
};

const daysByOrder = (allDays, days) => {
  const countParseDays = days.length;
  let byOrder = true;
  let foundCount = 0;
  allDays.forEach(day => {
    const includes = days.includes(day);
    if (includes) {
      foundCount++;
    } else if (foundCount !== 0 && foundCount !== countParseDays) {
      byOrder = false;
    }
  });
  return byOrder;
};

const getWeekTitle = (str, lang = 'en') => {
  const parseObj = qs.parse(str);
  const parseDays = Object.values(parseObj);
  const allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const days = allDays.filter(day => parseDays.includes(day));

  if (days.length === 0) return '';

  const byOrder = daysByOrder(allDays, parseDays);

  const EveryDay = {
    title: `${tr('Every day', lang)}`,
    condition: days => days.length === 7
  };

  const OneDay = {
    title: '',
    condition: function (days) {
      this.title = `${tr('Every', lang)} ${tr(days[0], lang)}`;
      return days.length === 1;
    }
  };

  const Weekdays = {
    title: `${tr('On weekdays', lang)}`,
    condition: days => days.length === 5 && !days.includes('Saturday') && !days.includes('Sunday')
  };

  const Weekends = {
    title: `${tr('On weekends', lang)}`,
    condition: days => days.length === 2 && days.includes('Saturday') && days.includes('Sunday')
  };

  const TwoDays = {
    title: '',
    condition: function (days) {
      const twoDays = days.length === 2;
      this.title = twoDays ? `${tr('Every', lang)} ${tr(days[0], lang)} ${tr('and', lang)} ${tr(days[1], lang)}` : '';
      return twoDays;
    }
  };

  const DaysByOrder = {
    title: '',
    condition: function (days) {
      const lastIndex = days.length - 1;
      const lastDay = days[lastIndex];
      const startDay = days[0];
      this.title = `${tr(startDay, lang)} - ${tr(lastDay, lang)}`;
      return days.length > 2 && byOrder;
    }
  };

  const DaysNotOrder = {
    title: '',
    condition: function (days) {
      const lastIndex = days.length - 1;
      const lastDay = days[lastIndex];
      const daysExcludeLast = days.slice(0, lastIndex);
      this.title = `${daysExcludeLast.map(day => tr(day, lang)).join(', ')} ${tr('and', lang)} ${tr(lastDay, lang)}`;
      return days.length > 2 && !byOrder;
    }
  };

  const result = [
    EveryDay, OneDay, Weekdays, Weekends, TwoDays, DaysByOrder, DaysNotOrder
  ].find(el => el.condition(days));

  return result ? result.title : '';
};

const fromToHumanTime = (start, end, lang = 'en') => {
  const firstPart = !isNaN(start)
                  ? `${tr('from', lang)} ${addZero(getHour(start))}:${addZero(getMinute(start))}`
                  : ''
  const secondPart = !isNaN(end)
                  ? `${tr('to', lang)} ${addZero(getHour(end))}:${addZero(getMinute(end))}`
                  : ''
  return `${firstPart} ${secondPart}`
}

const humanDate = (timestamp, lang = 'en') => {
  const date = new Date(timestamp)
  console.warn(lang)
  return {
    day: lang === 'en' ? dayHuman(date) : dayHumanCn(date),
    month: lang === 'en' ? monthEn(date) : monthCn(date),
    weekDay: lang === 'en' ? weekDayEn(date) : weekDayCn(date)
  }
}

export {
  getTimeTitle,
  getWeekTitle,
  fromToHumanTime,
  humanDate
}