import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

export const loadSvgResources = (
  matIconRegistry: MatIconRegistry,
  domSanitizer: DomSanitizer
) => {
    matIconRegistry.addSvgIcon('test',domSanitizer.bypassSecurityTrustResourceUrl('assets/test.svg'));
};
