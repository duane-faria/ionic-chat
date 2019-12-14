import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TabsPage } from "./tabs";
//import { InboxPage } from "../inbox/inbox";

@NgModule({
  declarations: [TabsPage],
  imports: [IonicPageModule.forChild(TabsPage)],
  entryComponents: []
})
export class TabsPageModule {}
