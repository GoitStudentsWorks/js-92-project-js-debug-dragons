import { checkLocalTheme, onCheckboxClick } from './header/checkboxClick';
import { headeRrefs } from './header/headerConst';
import {
  setCurrentPageName,
  setCurrentPageNameModal,
} from './header/setCurrentPageName';

// setCurrentPageName();
// setCurrentPageNameModal();
document.addEventListener('DOMContentLoaded', setCurrentPageName);
window.addEventListener('popstate', setCurrentPageName);
document.addEventListener('DOMContentLoaded', setCurrentPageNameModal);
window.addEventListener('popstate', setCurrentPageNameModal);

checkLocalTheme();

headeRrefs.checkbox.addEventListener('click', onCheckboxClick);
