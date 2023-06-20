import createFooter from './footer';
import createHeader from './header';
import createMain from './main';

export default function createPage() {
  createHeader();
  createMain();
  createFooter();
}
