import {WIN} from './../_constants';
import './../lib/mask.min';

export const PHONE = () => {


  $(document).on('click', '.phone__text--hidden', function () {
    $(this).parent().find('.phone__text--hidden').fadeOut(300);
  });
};
