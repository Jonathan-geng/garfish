import { lifecycle } from '../config';
import { interfaces } from '../interface';

export default function OptionsLife(options) {
  return function (_Garfish: interfaces.Garfish): interfaces.Plugin {
    const plugin = {
      name: 'default-life',
      version: __VERSION__,
    };
    lifecycle.forEach((life) => {
      if (options[life]) {
        plugin[life] = options[life];
      }
    });
    return plugin;
  };
}