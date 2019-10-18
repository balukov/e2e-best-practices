import navigationMenu from '@components/navigation-menu.page';
import pageHeader from '@components/page-header.page';

class Contact {
  public navigationMenu() {
    return navigationMenu;
  }

  public pageHeader() {
    return pageHeader;
  }
}

export default new Contact();
