import { defineComponent } from 'vue';

import chroma from 'chroma-js';

// Components
import Polo from './Polo';
import Hoody from './Hoody';
import Short from './Short';

// Types
import type { PropType } from 'vue';

export type ShirtStyle = 'hoody' | 'short' | 'polo';

const BRIGHTEN_DEGREE = 1;

export default defineComponent({
  name: 'AvatarShirt',

  props: {
    color: String,
    type: String as PropType<ShirtStyle>,
  },

  setup(props) {
    const subColor = chroma(props.color as string)
      .brighten(BRIGHTEN_DEGREE)
      .hex();

    const renderShirt = () => {
      switch (props.type) {
        case 'hoody':
          return <Hoody color={props.color} lightColor={subColor} />;
        case 'short':
          return <Short color={props.color} />;
        case 'polo':
          return <Polo color={props.color} lightColor={subColor} />;
        default:
          return <Short color={props.color} />;
      }
    };

    return () => <>{renderShirt()}</>;
  },
});
