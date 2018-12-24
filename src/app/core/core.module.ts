import { NgModule, SkipSelf, Optional } from "@angular/core";

import { MatIconRegistry } from "@angular/material";
import { DomSanitizer, BrowserModule } from "@angular/platform-browser";


import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

import { loadSvgResources } from "../utils/svg.util";
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    private domSanitizer: DomSanitizer,
    private matIconRegistry: MatIconRegistry
  ) {
    if (parent) {
      throw new Error("Core Module Exist");
    }
    // svgIcon Init
    loadSvgResources(matIconRegistry, domSanitizer);
  }
}
