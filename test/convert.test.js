import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  celsiusToKelvin,
  kmhToMs,
} from '../src/convert.js';

test('섭씨 → 화씨: 물의 어는점과 끓는점', () => {
  assert.equal(celsiusToFahrenheit(0), 32);
  assert.equal(celsiusToFahrenheit(100), 212);
});

test('화씨 → 섭씨: 물의 어는점과 끓는점', () => {
  assert.equal(fahrenheitToCelsius(32), 0);
  assert.equal(fahrenheitToCelsius(212), 100);
});

test('-40도는 섭씨와 화씨가 같다', () => {
  assert.equal(celsiusToFahrenheit(-40), -40);
  assert.equal(fahrenheitToCelsius(-40), -40);
});

test('섭씨 → 절대온도', () => {
  assert.equal(celsiusToKelvin(0), 273.15);
  assert.equal(celsiusToKelvin(-273.15), 0);
});

test('절대영도보다 낮은 온도는 오류', () => {
  assert.throws(() => celsiusToKelvin(-300), RangeError);
});

test('시속 → 초속', () => {
  assert.equal(kmhToMs(36), 10);
  assert.equal(kmhToMs(0), 0);
});
