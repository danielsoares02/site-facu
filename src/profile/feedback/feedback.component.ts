import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiUsuarioService } from '../../api/api-usuario.service';

@Component({
    standalone: true,
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css'],
    imports: [CommonModule, FormsModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class FeedbackComponent {

    usuarioService = inject(ApiUsuarioService);
    feedback = signal('');

    async confirm(feedbackInput: HTMLTextAreaElement) {
        if (feedbackInput.reportValidity()) {
            try {
                await this.usuarioService.sendFeedback(feedbackInput.value);

                alert("Comentário enviado!");
                this.feedback.set('');

            } catch (error) {
                alert(`Erro ao enviar o feedback ${error}!`);
            }
        }
    }
}
