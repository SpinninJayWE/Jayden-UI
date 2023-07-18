import { isPrimitive } from '../../../utils/index';
import { Input } from '../../input';
import { PropType, computed, defineComponent, ref } from 'vue';
import '../style/index.scss';

// type SelectProps = {
//   select: any[];
// };

export default defineComponent({
  name: 'j-select',
  props: {
    select: {
      type: Array as PropType<any[]>,
      default: () => []
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'medium',
      validator: (val: string) => ['small', 'medium', 'large'].includes(val)
    }
  },
  emits: ['update:select'],
  setup(props, ctx) {
    const iptValue = computed({
      get() {
        return props.select;
      },
      set(value) {
        ctx.emit('update:select', value);
      }
    });

    const selectIptVal = computed(() => {
      return iptValue.value
        .map((item) => {
          if (isPrimitive(item)) {
            return item;
          } else if (typeof item === 'object') {
            if (props.value) {
              return item[props.value];
            } else {
              return item;
            }
          }
        })
        .toString();
    });

    const handleClear = () => {
      iptValue.value.length = 0;
    };

    console.log(ctx.slots);

    const preFix = <div class={'prefix'}>{ctx.slots}</div>;

    const suffix = (
      <div class={'suffix'}>
        <slot name={'suffix'}></slot>
      </div>
    );

    const SelectInnerComp = () => {
      return (
        <div class={'j-select-inner'}>
          <preFix />
          <div class={'body'}></div>
          <suffix />
        </div>
      );
    };

    return () => (
      <div class={'j-select'}>
        <Input
          size={props.size}
          readonly={true}
          fromSelect={true}
          modelValue={selectIptVal.value}
          onClear={handleClear}
        >
          {{
            input: () => SelectInnerComp()
          }}
        </Input>
      </div>
    );
  }
});
