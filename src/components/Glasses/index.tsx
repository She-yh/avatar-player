import { defineComponent } from 'vue';

// Components
import Round from './Round';
import Square from './Square';

// Types
import type { PropType } from 'vue';

export type GlassesStyle = 'none' | 'round' | 'square';

export default defineComponent({
  name: 'AvatarGlasses',

  props: {
    type: String as PropType<GlassesStyle>,
  },

  setup(props) {
    const renderGlasses = () => {
      switch (props.type) {
        case 'none':
          return;
        case 'round':
          return <Round />;
        case 'square':
          return <Square />;
        default:
          return;
      }
    };

    return () => <>{renderGlasses()}</>;
  },
});
