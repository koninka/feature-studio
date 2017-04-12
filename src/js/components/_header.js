import {WIN} from './../_constants';
import './../lib/mask.min';

export const HEADER = () => {
  let headerVisible = $('.tel--hidden');
  let headerHidden = $('.tel--visible');
  $('#phone_mask').mask("+7(999) 999-9999");
  $('#phone_mask_modal').mask("+7(999) 999-9999");
  $(document).mouseup(function (e) {
    var container = $(".modals");
    if (container.has(e.target).length === 0){
        $(".modals").css('top', '-50%');
    }
  });
  headerVisible.on('click', e => {
    headerVisible.css('display', 'none');
    headerHidden.css('display', 'block');
  });
};