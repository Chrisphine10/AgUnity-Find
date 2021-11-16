import { Component, OnInit } from '@angular/core';
import { AgUnityQrCodeType, IAssetType, IUserProfile } from '@agunity/models';
import { appletName } from '../applet.component';
import { AppletApiService } from '@agunity/provider';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  
	ItemTypes = ItemTypes;
	showamount = false;

	assetType: IAssetType;
  constructor(
		private route: ActivatedRoute,
		private appletApiService: AppletApiService) { }

  ionViewWillEnter(): void {
    const assetTypeId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.assetType =
      assetTypeId && this.appletApiService.store.assetTypes?.find((assetType) => assetType.id === assetTypeId);

    this.showamount = true;
  }

  ngOnInit() {
  }

}
