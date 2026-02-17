import React from 'react';
import { IntlProvider } from 'react-intl';
import type { Props } from '@theme/Root';

export default function Root({ children }: Props): JSX.Element {
  return (
    <IntlProvider locale="en">
      {children}
    </IntlProvider>
  );
}
