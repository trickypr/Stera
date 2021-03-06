import { MutationComponent, html } from 'https://unpkg.com/stera/dist/index.js'

class ProgressBar extends MutationComponent {
	render() {
		return html`
			<div class="progress container">
				<div class="progress bar" style="width: ${this.getAttribute('progress')}%"></div>

				<style>
					:root {
						width: 100%;
					}

					.progress.container {
						width: 100%;
						background-color: #818AA350;
					}

					.progress.bar {
						width: 1%;
						height: 30px;
						background: #19539F;
					}
				</style>
			</div>
		`
	}
}
customElements.define('progress-bar', ProgressBar)
