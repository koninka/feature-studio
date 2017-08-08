import {WIN} from './../_constants';
import './../lib/mask.min';

export const HEADER = () => {

  function serializeForm($form) {
    return $form.serializeArray().reduce(function(m,o){
      m[o.name] = $(m).hasClass('phone-field') ? o.value.replace(/([\s()-])/g, '') : o.value;

      return m;
    }, {});
  }

  $('.phone-field').mask("+7(999) 999-99-99",{
    completed:function(){
      var leadForm = $(this).closest("form");
      var formData = serializeForm(leadForm);

      var data = {};

      data.phone = formData['phone'];
      delete formData.phone;
      data.data = formData;

      window.handlers.lead(data);
    }
  });
  $('#phone_mask_modal').mask("+7(999) 999-99-99");

  $(document).mouseup(function (e) {
    var container = $(".modals");
    if (container.has(e.target).length === 0){
      if ($(window).width() > 589) {
        $(".modals").css('top', '-50%');
      }
    }
    if ($(e.target).closest('.modals').length == 0)
      $('.modals').css('display', 'none');
  });

  $('.tel--hidden').on('click', function () {
    let $this = $(this);
    $this.css('display', 'none');
    $this.parent().find('.tel--visible').css('display', 'block');
  });

  $(document).on('click', '.tel__text--hidden', function () {
    $(this).closest('.tel--black').find('.tel__eye').fadeOut(300);
    $(this).closest('.tel--black').find('.icon_arrow_up_holder').css('visibility', 'hidden');
  });
};
