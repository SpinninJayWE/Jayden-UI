import _icon from './icon.vue';
import { withInstall } from '../../utils/index';
import { IconName } from './types/icon_enum';

const Icon = withInstall(_icon);

export { IconName, Icon };
export default Icon;
