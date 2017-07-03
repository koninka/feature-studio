import {WIN} from './../_constants';
import './../lib/mask.min';

export const PHONE = () => {


  $(document).on('click', '.phone__text--hidden', function () {
    $(this).closest('.phone').find('.phone__text--hidden').fadeOut(300);
    $(this).closest('.phone').find('.icon_arrow_up_holder').fadeOut(300);
    $(this).closest('.services__phone').find('.phone__text--hidden').fadeOut(300);
    $(this).closest('.services__phone').find('.icon_arrow_up_holder').fadeOut(300);
  });
};
