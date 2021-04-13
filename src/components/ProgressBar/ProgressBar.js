/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
	small: {
		"--wrapperHeight": "8px",
		"--barPadding": "0px",
		"--borderRadius": "4px",
		"--barHeight": "8px",
	},
	medium: {
		"--wrapperHeight": "12px",
		"--barPadding": "0px",
		"--borderRadius": "4px",
		"--barHeight": "12px",
	},
	large: {
		"--wrapperHeight": "24px",
		"--barPadding": "4px",
		"--borderRadius": "8px",
		"--barHeight": "16px",
	},
};

const ProgressBar = ({ value, size }) => {
	return (
		<ProgressWrapper role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={SIZES[size]}>
			<VisuallyHidden> {value}%</VisuallyHidden>
			<BarWrapper>
				<Bar value={value} />
			</BarWrapper>
		</ProgressWrapper>
	);
};

const ProgressWrapper = styled.div`
	background-color: ${COLORS.transparentGray15};
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	border-radius: var(--borderRadius);
	padding: var(--barPadding);

	/* Round corners of progress bar as we approach max */
	overflow: hidden;
`;

const BarWrapper = styled.div`
	border-radius: 4px;
	overflow: hidden;
`;

const Bar = styled.div`
	background-color: ${COLORS.primary};
	width: ${(p) => p.value}%;
	height: var(--barHeight);
	border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
