import React from 'react';
import {
	Button,
	Intent,
	Popover,
	PopoverInteractionKind,
	Position,
} from '@blueprintjs/core';

export const PopoverSystem = props => {
	return (
		<Popover
			interactionKind={PopoverInteractionKind.CLICK}
			popoverClassName="bp3-popover-content-sizing"
			position={Position.RIGHT}>
			<Button intent={Intent.PRIMARY}>Popover target</Button>
			<div>
				<h5>Popover title</h5>
				<p>...</p>
				<Button className="bp3-popover-dismiss">Dismiss</Button>
			</div>
		</Popover>
	);
};
