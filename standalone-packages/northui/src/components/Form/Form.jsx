import system from '@rebass/components';
import Item from './FormItem';

const Form = system({
  is: 'form',
  width: '100%',
});

Form.displayName = 'Form';
Form.Item = Item;

export default Form;
