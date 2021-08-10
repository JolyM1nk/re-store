import React from 'react';

import { ServiceConsumer } from '../service-context';

const withService = () => (Component) => {
  return (props) => {
    return (
      <ServiceConsumer>
        {(service) => <Component {...props} service={service} />}
      </ServiceConsumer>
    );
  };
};

export default withService;
