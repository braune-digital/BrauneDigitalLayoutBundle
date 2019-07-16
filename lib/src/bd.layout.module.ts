/*
 * @author Felix Baltruschat <fb@braune-digital.com>
 * @copyright 2/12/19 2:37 PM Braune Digital GmbH
 */

import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {NgArrayPipesModule, NgStringPipesModule} from 'angular-pipes';
import {HttpClientModule} from '@angular/common/http';
import {BdFilterModule} from '@braune-digital/angular-query-filter';
import {FileUploadModule} from 'ng2-file-upload';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormUtilitiesModule} from '@braune-digital/form-utilities';

import {BdLoadingComponent} from './components/utils/bd-loading/bd-loading.component';
import {BdMessageComponent} from './components/utils/bd-message/bd-message.component';
import {BdProgressComponent} from './components/utils/bd-progress/bd-progress.component';
import {BdProgressBarComponent} from './components/utils/bd-progress-bar/bd-progress-bar.component';
import {BdBadgeComponent} from './components/utils/bd-badge/bd-badge.component';

import {BdLayoutComponent} from './components/layout/bd-layout/bd-layout.component';
import {BdBrandComponent} from './components/layout/bd-brand/bd-brand.component';
import {BdContentAsideComponent} from './components/layout/bd-content-aside/bd-content-aside.component';
import {BdContentMainComponent} from './components/layout/bd-content-main/bd-content-main.component';
import {BdContentComponent} from './components/layout/bd-content/bd-content.component';
import {BdColComponent} from './components/layout/bd-col/bd-col.component';
import {BdGridComponent} from './components/layout/bd-grid/bd-grid.component';
import {BdAlertComponent} from './components/layout/bd-alert/bd-alert.component';
import {BdContentHeaderComponent} from './components/layout/bd-content-header/bd-content-header.component';
import {BdOverlayComponent} from './components/layout/bd-overlay/bd-overlay.component';
import {ContentLockComponent} from './components/layout/content-lock/content-lock.component';
import {ContentLockContentComponent} from './components/layout/content-lock-content/content-lock-content.component';
import {ContentLockPreviewComponent} from './components/layout/content-lock-preview/content-lock-preview.component';

import {BdButtonComponent} from './components/elements/bd-button/bd-button.component';
import {BdLinkListComponent} from './components/elements/bd-link-list/bd-link-list.component';
import {BdLinkListItemComponent} from './components/elements/bd-link-list-item/bd-link-list-item.component';
import {BdAvatarComponent} from './components/elements/bd-avatar/bd-avatar.component';
import {BdActionGroupComponent} from './components/elements/bd-action-group/bd-action-group.component';
import {BdActionGroupItemComponent} from './components/elements/bd-action-group-item/bd-action-group-item.component';
import {BdIconComponent} from './components/elements/bd-icon/bd-icon.component';
import {BdImageComponent} from './components/elements/bd-image/bd-image.component';
import {BdBookmarkComponent} from './components/elements/bd-bookmark/bd-bookmark.component';
import {BdDividerComponent} from './components/elements/bd-divider/bd-divider.component';
import {BdSerpComponent} from './components/elements/bd-serp/bd-serp.component';
import {BdThumbnailListComponent} from './components/elements/bd-thumbnail-list/bd-thumbnail-list.component';
import {BdThumbnailListItemComponent} from './components/elements/bd-thumbnail-list-item/bd-thumbnail-list-item.component';
import {BdApprovalComponent} from './components/elements/bd-approval/bd-approval.component';
import {BdHighlightComponent} from './components/elements/bd-highlight/bd-highlight.component';
import {BdTagsComponent} from './components/elements/bd-tags/bd-tags.component';
import {BdUserProfileComponent} from './components/elements/bd-user-profile/bd-user-profile.component';
import {BdSocialLinksComponent} from './components/elements/bd-social-links/bd-social-links.component';
import {BdSocialShareComponent} from './components/elements/bd-social-share/bd-social-share.component';
import {BdMembersComponent} from './components/elements/bd-members/bd-members.component';
import {BdContentModalComponent} from './components/content/bd-content-modal/bd-content-modal.component';
import {BdInfoBoxComponent} from './components/elements/bd-info-box/bd-info-box.component';
import {BdMediaComponent} from './components/elements/bd-media/bd-media.component';
import {BdImagePlaceholderComponent} from './components/elements/bd-image-placeholder/bd-image-placeholder.component';
import {BdTagComponent} from './components/elements/bd-tag/bd-tag.component';
import {BdGalleryComponent} from './components/elements/bd-gallery/bd-gallery.component';
import {BdExampleComponent} from './components/elements/bd-example/bd-example.component';
import {BdTabHeadComponent} from './components/elements/bd-tab-head/bd-tab-head.component';

import {BdSearchEntityComponent} from './components/form/search-entity/bd-search-entity.component';
import {BdUploadComponent} from './components/form/bd-upload/bd-upload.component';
import {BdFormErrorComponent} from './components/form/form-error/bd-form-error.component';

import {BdSearchUserModalComponent} from './components/modals/bd-search-user-modal/bd-search-user-modal.component';
import {BdSearchPageModalComponent} from './components/modals/bd-search-page-modal/bd-search-page-modal.component';

import {BdMasonryDirective} from './directive/bd-masonry/bd-masonry.directive';
import {BdMasonryItemDirective} from './directive/bd-masonry/bd-masonry-item.directive';
import {SafePipe} from './pipes/safe.pipe';
import {AlertService} from './services/alert.service';
import {AngularStickyThingsModule} from '@w11k/angular-sticky-things';
import {BdContentModalMainComponent} from './components/content/bd-content-modal-main/bd-content-modal-main.component';
import {BdContentModalFooterComponent} from './components/content/bd-content-modal-footer/bd-content-modal-footer.component';
import {BdHeaderComponent} from './components/layout/bd-header/bd-header.component';
import {BdHeaderMainComponent} from './components/layout/bd-header-main/bd-header-main.component';
import {BdHeaderActionsComponent} from './components/layout/bd-header-actions/bd-header-actions.component';
import { BdCenterComponent } from './components/layout/bd-center/bd-center.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        FormUtilitiesModule,
        BdFilterModule,
        ModalModule,
        ReactiveFormsModule,
        RouterModule,
        NgStringPipesModule,
        NgArrayPipesModule,
        TranslateModule,
        TooltipModule,
        FileUploadModule,
        AngularStickyThingsModule,
        BsDropdownModule.forRoot(),

    ],
    declarations: [

        // ---------------------------
        // Pipes
        // ---------------------------
        SafePipe,

        // ---------------------------
        // Layout
        // ---------------------------
        BdAlertComponent,
        BdBrandComponent,
        BdContentHeaderComponent,
        BdContentComponent,
        BdGridComponent,
        BdLayoutComponent,
        BdLoadingComponent,
        BdContentAsideComponent,
        BdContentMainComponent,
        BdHeaderComponent,
        BdHeaderMainComponent,
        BdHeaderActionsComponent,

        // ---------------------------
        // Utils
        // ---------------------------
        BdBadgeComponent,
        BdColComponent,
        BdMessageComponent,
        BdProgressComponent,
        BdProgressBarComponent,

        // ---------------------------
        // Elements
        // ---------------------------
        BdActionGroupComponent,
        BdActionGroupItemComponent,
        BdApprovalComponent,
        BdAvatarComponent,
        BdBookmarkComponent,
        BdButtonComponent,
        BdCenterComponent,
        BdDividerComponent,
        BdExampleComponent,
        BdHighlightComponent,
        BdGalleryComponent,
        BdIconComponent,
        BdImageComponent,
        BdImagePlaceholderComponent,
        BdInfoBoxComponent,
        BdLinkListComponent,
        BdLinkListItemComponent,
        BdMediaComponent,
        BdMembersComponent,
        BdSerpComponent,
        BdSocialLinksComponent,
        BdSocialShareComponent,
        BdTabHeadComponent,
        BdTagComponent,
        BdTagsComponent,
        BdThumbnailListComponent,
        BdThumbnailListItemComponent,
        BdUserProfileComponent,

        // ---------------------------
        // Content
        // ---------------------------
        BdContentModalComponent,
        BdContentModalMainComponent,
        BdContentModalFooterComponent,

        // ---------------------------
        // Form
        // ---------------------------
        BdSearchUserModalComponent,
        BdSearchPageModalComponent,
        BdSearchEntityComponent,
        BdFormErrorComponent,

        BdOverlayComponent,
        ContentLockComponent,
        ContentLockContentComponent,
        ContentLockPreviewComponent,

        BdUploadComponent,

        // ---------------------------
        // Directives
        // ---------------------------
        BdMasonryDirective,
        BdMasonryItemDirective
    ],
    providers: [],
    exports: [
        // ---------------------------
        // Pipes
        // ---------------------------
        SafePipe,

        // ---------------------------
        // Layout
        // ---------------------------
        BdAlertComponent,
        BdContentComponent,
        BdContentAsideComponent,
        BdContentMainComponent,
        BdHeaderComponent,
        BdHeaderMainComponent,
        BdHeaderActionsComponent,
        BdLayoutComponent,
        BdLoadingComponent,
        BdGridComponent,
        BdContentHeaderComponent,

        // ---------------------------
        // Utils
        // ---------------------------
        BdBadgeComponent,
        BdColComponent,
        BdMessageComponent,
        BdProgressComponent,
        BdProgressBarComponent,

        // ---------------------------
        // Elements
        // ---------------------------
        BdActionGroupComponent,
        BdActionGroupItemComponent,
        BdApprovalComponent,
        BdAvatarComponent,
        BdBookmarkComponent,
        BdButtonComponent,
        BdCenterComponent,
        BdDividerComponent,
        BdExampleComponent,
        BdHighlightComponent,
        BdGalleryComponent,
        BdIconComponent,
        BdImageComponent,
        BdImagePlaceholderComponent,
        BdInfoBoxComponent,
        BdLinkListComponent,
        BdLinkListItemComponent,
        BdMediaComponent,
        BdMembersComponent,
        BdSerpComponent,
        BdSocialLinksComponent,
        BdSocialShareComponent,
        BdTabHeadComponent,
        BdTagComponent,
        BdTagsComponent,
        BdThumbnailListComponent,
        BdThumbnailListItemComponent,
        BdUserProfileComponent,

        // ---------------------------
        // Content
        // ---------------------------
        BdContentModalComponent,
        BdContentModalMainComponent,
        BdContentModalFooterComponent,

        // ---------------------------
        // Form
        // ---------------------------
        BdSearchEntityComponent,
        BdSearchUserModalComponent,
        BdSearchPageModalComponent,
        BdFormErrorComponent,
        BdSearchEntityComponent,


        ContentLockComponent,
        ContentLockContentComponent,
        ContentLockPreviewComponent,
        BdUploadComponent,

        // ---------------------------
        // Directives
        // ---------------------------
        BdMasonryDirective,
        BdMasonryItemDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BdLayoutModule {
    static forRoot(provider: Array<Provider> = [AlertService]): ModuleWithProviders {
        return {
            ngModule: BdLayoutModule,
            providers: provider
        };
    }
}


