import {WIN} from './../_constants';
import './../lib/mask.min';

export const HEADER = () => {
  $('.phone-field').mask("+7(999) 999-99-99");
  $('#phone_mask_modal').mask("+7(999) 999-99-99");

  $(document).mouseup(function (e) {
    var container = $(".modals");
    if (container.has(e.target).length === 0){
        $(".modals").css('top', '-50%');
    }
  });
  $('.tel--hidden').on('click', function () {
    let $this = $(this);
    $this.css('display', 'none');
    $this.parent().find('.tel--visible').css('display', 'block');
  });
};
