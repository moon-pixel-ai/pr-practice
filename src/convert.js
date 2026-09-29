// 과학 수업에서 자주 쓰는 단위 변환 함수 모음

const ABSOLUTE_ZERO_C = -273.15;

// 섭씨(°C) → 화씨(°F)
export function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

// 화씨(°F) → 섭씨(°C)
export function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

// 섭씨(°C) → 절대온도(K)
export function celsiusToKelvin(c) {
  if (c < ABSOLUTE_ZERO_C) {
    throw new RangeError('절대영도(-273.15°C)보다 낮은 온도는 없습니다.');
  }
  return c + 273.15;
}

// 시속(km/h) → 초속(m/s)
export function kmhToMs(kmh) {
  return kmh / 3.6;
}
