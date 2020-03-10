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
import {BdContentComponent} from './components/layout/bd-content/bd-content.component';
import {BdColComponent} from './components/layout/bd-col/bd-col.component';
import {BdGridComponent} from './components/layout/bd-grid/bd-grid.component';
import {BdAlertComponent} from './components/layout/bd-alert/bd-alert.component';
import {BdOverlayComponent} from './components/layout/bd-overlay/bd-overlay.component';
import {ContentLockComponent} from './components/layout/content-lock/content-lock.component';
import {ContentLockContentComponent} from './components/layout/content-lock-content/content-lock-content.component';
import {ContentLockPreviewComponent} from './components/layout/content-lock-preview/content-lock-preview.component';

import {BdButtonComponent} from './components/elements/bd-button/bd-button.component';
import {BdLinkListComponent} from './components/elements/bd-link-list/bd-link-list.component';
import {BdLinkListItemComponent} from './components/elements/bd-link-list-item/bd-link-list-item.component';
import {BdAvatarComponent} from './components/elements/bd-avatar/bd-avatar.component';
import {BdActionGroupComponent} from './components/elements/bd-action-group/bd-action-group.component';
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
import {BdSidebarComponent} from './components/layout/bd-sidebar/bd-sidebar.component';
import {BdSidebarPreComponent} from './components/layout/bd-sidebar/bd-sidebar-pre/bd-sidebar-pre.component';
import {BdSidebarPostComponent} from './components/layout/bd-sidebar/bd-sidebar-post/bd-sidebar-post.component';
import {BdSidebarMainComponent} from './components/layout/bd-sidebar/bd-sidebar-main/bd-sidebar-main.component';
import {BdSidebarListComponent} from './components/layout/bd-sidebar/bd-sidebar-list/bd-sidebar-list.component';
import {BdSidebarListItemComponent} from './components/layout/bd-sidebar/bd-sidebar-list-item/bd-sidebar-list-item.component';
import {BdLayoutContentComponent} from './components/layout/bd-layout/bd-layout-content/bd-layout-content.component';
import {BdLayoutSidebarComponent} from './components/layout/bd-layout/bd-layout-sidebar/bd-layout-sidebar.component';
import {BdVersionComponent} from './components/elements/bd-version/bd-version.component';
import {BdContentHeaderComponent} from './components/layout/bd-content/bd-content-header/bd-content-header.component';
import {BdContentMainComponent} from './components/layout/bd-content/bd-content-main/bd-content-main.component';
import {BdContentAsideComponent} from './components/layout/bd-content/bd-content-aside/bd-content-aside.component';
import {BdHeaderMainComponent} from './components/layout/bd-header/bd-header-main/bd-header-main.component';
import {BdHeaderAsideComponent} from './components/layout/bd-header/bd-header-aside/bd-header-aside.component';
import {BdHeaderPostAsideComponent} from './components/layout/bd-header/bd-header-post-aside/bd-header-post-aside.component';
import {BdHeaderPostMainComponent} from './components/layout/bd-header/bd-header-post-main/bd-header-post-main.component';
import {BdContentCenteredComponent} from './components/layout/bd-content/bd-content-centered/bd-content-centered.component';
import {BdFileComponent} from './components/elements/bd-file/bd-file.component';
import {BdActionGroupItemComponent} from './components/elements/bd-action-group/bd-action-group-item/bd-action-group-item.component';
import {BdActionBarComponent} from './components/elements/bd-action-bar/bd-action-bar.component';
import {BdActionBarGroupComponent} from './components/elements/bd-action-bar/bd-action-bar-group/bd-action-bar-group.component';
import {BdItemComponent} from './components/elements/bd-item/bd-item.component';
import {BdProgressCircleComponent} from './components/utils/bd-progress-circle/bd-progress-circle.component';
import {BdNavAsideComponent} from './components/layout/bd-nav/bd-nav-aside/bd-nav-aside.component';
import {BdNavComponent} from './components/layout/bd-nav/bd-nav.component';
import {BdNavMainComponent} from './components/layout/bd-nav/bd-nav-main/bd-nav-main.component';
import {BdLayoutNavComponent} from './components/layout/bd-layout/bd-layout-nav/bd-layout-nav.component';
import {BdHamburgerComponent} from './components/elements/bd-hamburger/bd-hamburger.component';
import {BdNavSubComponent} from './components/layout/bd-nav/bd-nav-sub/bd-nav-sub.component';
import {BdDropdownToggleComponent} from './components/elements/bd-dropdown/bd-dropdown-toggle/bd-dropdown-toggle.component';
import {BdDropdownContentComponent} from './components/elements/bd-dropdown/bd-dropdown-content/bd-dropdown-content.component';
import {BdDropdownComponent} from './components/elements/bd-dropdown/bd-dropdown.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    FormUtilitiesModule,
    ReactiveFormsModule,
    BdFilterModule,
    ModalModule,
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
    BdLayoutContentComponent,
    BdLayoutSidebarComponent,
    BdLoadingComponent,
    BdContentAsideComponent,
    BdContentMainComponent,
    BdContentCenteredComponent,
    BdHeaderComponent,
    BdHeaderMainComponent,
    BdHeaderAsideComponent,
    BdHeaderPostMainComponent,
    BdHeaderPostAsideComponent,
    BdSidebarComponent,
    BdSidebarPreComponent,
    BdSidebarMainComponent,
    BdSidebarPostComponent,
    BdSidebarListComponent,
    BdSidebarListItemComponent,
    BdNavAsideComponent,
    BdNavComponent,
    BdNavMainComponent,
    BdNavSubComponent,
    BdLayoutNavComponent,
    // ---------------------------
    // Utils
    // ---------------------------
    BdBadgeComponent,
    BdColComponent,
    BdMessageComponent,
    BdProgressComponent,
    BdProgressBarComponent,
    BdProgressCircleComponent,

    // ---------------------------
    // Elements
    // ---------------------------
    BdActionBarComponent,
    BdActionBarGroupComponent,
    BdActionGroupComponent,
    BdActionGroupItemComponent,
    BdApprovalComponent,
    BdAvatarComponent,
    BdBookmarkComponent,
    BdButtonComponent,
    BdDividerComponent,
    BdDropdownComponent,
    BdDropdownToggleComponent,
    BdDropdownContentComponent,
    BdFileComponent,
    BdExampleComponent,
    BdHighlightComponent,
    BdHamburgerComponent,
    BdGalleryComponent,
    BdIconComponent,
    BdItemComponent,
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
    BdVersionComponent,

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
    BdBrandComponent,
    BdContentHeaderComponent,
    BdContentComponent,
    BdGridComponent,
    BdLayoutComponent,
    BdLayoutContentComponent,
    BdLayoutSidebarComponent,
    BdLoadingComponent,
    BdContentAsideComponent,
    BdContentMainComponent,
    BdContentCenteredComponent,
    BdHeaderComponent,
    BdHeaderMainComponent,
    BdHeaderAsideComponent,
    BdHeaderPostMainComponent,
    BdHeaderPostAsideComponent,
    BdSidebarComponent,
    BdSidebarPreComponent,
    BdSidebarMainComponent,
    BdSidebarPostComponent,
    BdSidebarListComponent,
    BdSidebarListItemComponent,
    BdNavAsideComponent,
    BdNavComponent,
    BdNavMainComponent,
    BdNavSubComponent,
    BdLayoutNavComponent,

    // ---------------------------
    // Utils
    // ---------------------------
    BdBadgeComponent,
    BdColComponent,
    BdMessageComponent,
    BdProgressComponent,
    BdProgressBarComponent,
    BdProgressCircleComponent,

    // ---------------------------
    // Elements
    // ---------------------------
    BdActionBarComponent,
    BdActionBarGroupComponent,
    BdActionGroupComponent,
    BdActionGroupItemComponent,
    BdApprovalComponent,
    BdAvatarComponent,
    BdBookmarkComponent,
    BdButtonComponent,
    BdDividerComponent,
    BdDropdownComponent,
    BdDropdownToggleComponent,
    BdDropdownContentComponent,
    BdFileComponent,
    BdExampleComponent,
    BdHighlightComponent,
    BdHamburgerComponent,
    BdGalleryComponent,
    BdIconComponent,
    BdItemComponent,
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
    BdVersionComponent,

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
  static forRoot(provider: Array<Provider> = [AlertService]): ModuleWithProviders<BdLayoutModule> {
    return {
      ngModule: BdLayoutModule,
      providers: provider
    };
  }
}


