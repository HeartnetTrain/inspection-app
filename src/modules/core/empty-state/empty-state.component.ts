import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component ({
    selector: 'app-empty-state',
    templateUrl: './empty-state.component.html',
    styleUrls: ['./empty-state.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class EmptyStateComponent {

    @Input () content: string;

}
