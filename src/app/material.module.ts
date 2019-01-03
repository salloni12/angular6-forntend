import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule,MatFormFieldModule,MatInputModule } from '@angular/material';


@NgModule({
    imports: [
    
      MatButtonModule,
      MatFormFieldModule,
      MatToolbarModule
    ],
    exports:[
        MatButtonModule,
        MatFormFieldModule,
        MatToolbarModule
    ],
})


export class MaterialModule{}