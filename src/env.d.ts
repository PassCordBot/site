/// <reference types="astro/client" />

declare module '@discord-message-components/react';
declare module 'react-reveal/Fade';
declare module 'svelte-switch' {
	interface Props {
		checked: boolean;
		disabled?: boolean;
		offColor?: string;
		onColor?: string;
		offHandleColor?: string;
		onHandleColor?: string;
		handleDiameter?: string;
		boxShadow?: string | null;
		activeBoxShadow?: string;
		height?: number;
		width?: number;
		id?: string;
		containerClass?: string;
	}

	export default function Switch(_props: Props) {}
}
