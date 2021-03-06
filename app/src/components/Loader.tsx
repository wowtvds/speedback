
import { FunctionComponent } from 'react';
import cn from "classnames";

type LoaderProps = {
	fullscreen?: boolean,
}

const Loader: FunctionComponent<LoaderProps> = ({ fullscreen = false }) => {
	return (
		<div className={cn("flex items-center justify-center container-spacing section-spacing", {
			"min-h-screen": fullscreen,
		})}>
			 <div className="flex flex-col items-center space-y-6">
				<svg className="animate-spin h-8 w-8 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
					<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
					<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
				</svg>

				<p className="text-center text-sm text-gray-600">Loading...</p>
			 </div>
		</div>
	)
}

export default Loader;