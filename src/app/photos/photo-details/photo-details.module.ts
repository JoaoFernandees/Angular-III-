import { NgModule } from "@angular/core";
import { PhotoDetailsComponent } from "./photo-details.component";
import { CommonModule } from "@angular/common";
import { PhotoModule } from "../photo/photo.module";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "../../shared/components/vmessage/vmessage.module";
import { PhotoOwnerDirective } from './photo-comments/photo-owner-only/photo-owner-only.directives';

@NgModule({
    declarations: [
        PhotoDetailsComponent, 
        PhotoCommentsComponent,
        PhotoOwnerDirective
    ],
    exports: [
        PhotoDetailsComponent, 
        PhotoCommentsComponent],
    imports: [
        CommonModule,
        PhotoModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule
    ]
})
export class PhotoDetailsModule { }