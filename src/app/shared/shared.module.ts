import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModuleModule } from './ng-zorro-antd-module/ng-zorro-antd-module.module';
// import { NumericDirective } from '@app/shared/directives/numeric.directive';
// import { ErrorTipPipe } from '@app/shared/pipes/error-tip.pipe';

@NgModule({
  imports: [
    // Shared modules
    CommonModule
  ],
  declarations: [
    // Shared directives/components/pipes/etc.
  ],
  exports: [
    // Exports directives/components/pipes/etc.
  ],
})
export class SharedModule {}
