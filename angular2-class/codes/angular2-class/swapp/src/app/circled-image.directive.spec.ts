/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { CircledImage } from './circled-image.directive';

describe('CircledImage Directive', () => {
  it('should create an instance', () => {
    let directive = new CircledImage();
    expect(directive).toBeTruthy();
  });
});
