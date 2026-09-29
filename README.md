# pr-practice

과학 수업에서 자주 쓰는 단위를 변환하는 작은 JavaScript 모듈입니다.
GitHub Pull Request(PR) 연습용으로 만들었습니다.

## 들어 있는 함수

| 함수 | 설명 |
|---|---|
| `celsiusToFahrenheit(c)` | 섭씨(°C) → 화씨(°F) |
| `fahrenheitToCelsius(f)` | 화씨(°F) → 섭씨(°C) |
| `celsiusToKelvin(c)` | 섭씨(°C) → 절대온도(K) |
| `kmhToMs(kmh)` | 시속(km/h) → 초속(m/s) |

## 사용 예시

```js
import { celsiusToKelvin, kmhToMs } from './src/convert.js';

celsiusToKelvin(0); // 273.15
kmhToMs(36);        // 10
```

## 테스트 실행

Node.js 18 이상이 필요하며, 따로 설치할 패키지는 없습니다.

```bash
npm test
```
