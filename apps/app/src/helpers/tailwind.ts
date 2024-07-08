import { useState } from 'react';
import { create, useDeviceContext } from 'twrnc';

// eslint-disable-next-line import/extensions
const defaultConfig = require('../../tailwind.config.js');


export const useTailwind = () => {
    const [config] = useState(defaultConfig);

    const tw = create(config);
    useDeviceContext(tw);


    return { tw };
};
