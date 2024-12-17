import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import {
  FCanvasComponent,
  FFlowModule, FSelectionChangeEvent
} from '@foblex/flow';
@Component({
  selector: 'app-foblex',
  imports: [FFlowModule],
  templateUrl: './foblex.component.html',
  styleUrl: './foblex.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoblexComponent {
  @ViewChild(FCanvasComponent, { static: true })
  public fCanvas!: FCanvasComponent;
  public selection: string[][] = [];
  public onLoaded(): void {
    this.fCanvas.resetScaleAndCenter(false);
  }
  public onSelectionChange(event: FSelectionChangeEvent): void {
    this.selection.push(event.nodes);
  }
}
