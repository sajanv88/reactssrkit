import HomeComponent from './components/home/home.component';
import SettingComponent from './components/settings/settings.component';

const Routes = [{
    path: '/',
    exact: true,
    component: HomeComponent
}, {
    path: '/settings',
    component: SettingComponent
}];
export default Routes;
