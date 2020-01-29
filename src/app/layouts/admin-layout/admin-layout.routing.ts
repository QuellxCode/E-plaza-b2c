
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { WishlistComponent } from 'app/pages/wishlist/wishlist.component';
import { PlazaComponent } from 'app/pages/plaza/plaza.component';
import { ItemComponent } from 'app/pages/item/item.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'wishlist',        component: WishlistComponent},
    { path: 'broadcast',        component: BroadcastComponent },
    { path: 'plaza-search',           component: PlazaComponent},
    { path: 'settings',          component: SettingsComponent},
    { path: 'item', component: ItemComponent}
];
