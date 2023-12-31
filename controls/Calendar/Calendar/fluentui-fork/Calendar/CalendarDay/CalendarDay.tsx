/* eslint-disable */
/* istanbul ignore file */
import * as React from 'react';
import { CalendarDayBase } from './CalendarDay.base';
import { styles } from './CalendarDay.styles';
import { styled } from '@fluentui/react';
import type { ICalendarDayProps } from './CalendarDay.types';

export const CalendarDay: React.FunctionComponent<ICalendarDayProps> = styled(CalendarDayBase, styles, undefined, {
  scope: 'CalendarDay',
});


