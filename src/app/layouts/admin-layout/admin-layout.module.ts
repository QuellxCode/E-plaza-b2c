import { PlazaComponent } from './../../pages/plaza/plaza.component';
import { BroadcastComponent } from './../../pages/broadcast/broadcast.component';

import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WishlistComponent } from 'app/pages/wishlist/wishlist.component';
import { DemoMaterialModule } from 'material-module.module';
import { SettingsComponent } from 'app/pages/settings/settings.component';
import { ItemComponent } from 'app/pages/item/item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    DemoMaterialModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    WishlistComponent,
    BroadcastComponent,
    PlazaComponent,
    ItemComponent
  ]
})

export class AdminLayoutModule {}
