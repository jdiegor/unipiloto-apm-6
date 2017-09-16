import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product';
@NgModule({
	declarations: [ProductComponent],
	imports: [CommonModule],
	exports: [ProductComponent]
})
export class ComponentsModule {}
