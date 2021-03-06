import formatRelative from 'date-fns/formatRelative';

const commentTemplate = ({ text, resolved, metadata, createdAt, loading = false }) => `
	<div class="gthr-tooltip">
		<div class="gthr-tooltip__content">
			<div class="gthr-tooltip__info ${resolved ? 'gthr-tooltip__info--resolved' : ''}">
				<p
					class="gthr-tooltip__comment ${resolved ? 'gthr-tooltip__comment--resolved': ''}"
				>
					${text}
				</p>
			
				<p
					class="gthr-tooltip__date"
				>
					${formatRelative(new Date(createdAt), new Date())}
				</p>

				<ul class="gthr-tooltip__metainfo">
					<li
						class="gthr-tooltip__metainfo-line"
					>
						Platform:
						<b>${metadata.platform.type}</b>
					</li>
					<li
						class="gthr-tooltip__metainfo-line"
					>
						Browser:
						<b>${metadata.browser.name}</b>
					</li>

					${metadata.viewport ? `
						<li
							class="gthr-tooltip__metainfo-line"
						>
							Viewport:
							<b>${metadata.viewport.x} x ${metadata.viewport.y}</b>
						</li>
					` : ''}
				</ul>
			</div>

			${loading ? `
				<svg width="28" class="gthr-tooltip__spinner" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5" stroke="#9CA3AF" stroke-width="1.2"/>
				</svg>
			` : `
				<button type="button" id="gthr-action-resolve">
					${resolved ? `
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="#10B981">
							<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
						</svg>
					` : `
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#9CA3AF">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					`}
				</button>
			`}
		</div>
	</div>
`

export default commentTemplate;
