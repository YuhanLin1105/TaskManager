import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

export const loadSvgResources = (
  matIconRegistry: MatIconRegistry,
  domSanitizer: DomSanitizer
) => {
  const imgDir = "assets/img";
  const sidebarDir = `${imgDir}/sidebar`;
  const daysDir = `${imgDir}/days`;

  matIconRegistry.addSvgIcon(
    "day",
    domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`)
  );
  matIconRegistry.addSvgIcon(
    "month",
    domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`)
  );
  matIconRegistry.addSvgIcon(
    "project",
    domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/project.svg`)
  );
  matIconRegistry.addSvgIcon(
    "projects",
    domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`)
  );
  matIconRegistry.addSvgIcon(
    "week",
    domSanitizer.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`)
  );
  
  new Array(31).fill(0).map((_,d)=>{
    matIconRegistry.addSvgIcon(
      `day${+d+1}`,
      domSanitizer.bypassSecurityTrustResourceUrl(`${daysDir}/day${+d+1}.svg`)
    );
  })

};
