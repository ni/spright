import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprightAccordionDirective } from './spright-accordion.directive';

import '@ni/nimble-components/dist/esm/card';

@NgModule({
    declarations: [SprightAccordionDirective],
    imports: [CommonModule],
    exports: [SprightAccordionDirective]
})
export class SprightAccordionModule { }
