import {WIN} from './../_constants';

export const HEADER = () => {
  let headerVisible = $('.tel--hidden');
  let headerHidden = $('.tel--visible');
  headerVisible.on('click', e => {
    headerVisible.css('display', 'none');
    headerHidden.css('display', 'block');
  });
};